const CACHE_VERSION = 4;
const STATIC_CACHE_NAME = `vsg-static-v${CACHE_VERSION}`;
const RUNTIME_CACHE_NAME = `vsg-runtime-v${CACHE_VERSION}`;
const CACHE_MAX_SIZE = 50;
const IMMUTABLE_PATTERNS = [
  /\.[a-f0-9]{8,}\.(js|css)$/,
  /\.(woff2?|ttf|eot)$/,
  /\.(png|jpg|jpeg|gif|webp|avif|svg|ico)$/
];

const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/logo.png',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png'
];

const isImmutableAsset = (url) => {
  return IMMUTABLE_PATTERNS.some(pattern => pattern.test(url.pathname));
};

const trimCache = async (cacheName, maxSize) => {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxSize) {
    const deleteCount = keys.length - maxSize;
    await Promise.all(keys.slice(0, deleteCount).map(key => cache.delete(key)));
  }
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn('[SW] Failed to cache some static assets:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => {
            return name.startsWith('vsg-') && 
                   name !== STATIC_CACHE_NAME && 
                   name !== RUNTIME_CACHE_NAME;
          })
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  if (url.pathname.startsWith('/api/')) return;
  if (url.origin !== location.origin) return;

  if (isImmutableAsset(url)) {
    event.respondWith(
      caches.open(RUNTIME_CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) return cachedResponse;
        
        const networkResponse = await fetch(event.request);
        if (networkResponse.status === 200) {
          cache.put(event.request, networkResponse.clone());
          trimCache(RUNTIME_CACHE_NAME, CACHE_MAX_SIZE);
        }
        return networkResponse;
      }).catch(() => {
        return new Response('Asset unavailable', { status: 503 });
      })
    );
    return;
  }

  if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(RUNTIME_CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          const cachedResponse = await caches.match(event.request);
          if (cachedResponse) return cachedResponse;
          return new Response('Script unavailable', { status: 503 });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(STATIC_CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      });

      return cachedResponse || fetchPromise.catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});

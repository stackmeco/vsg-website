# VSG Marketing Site - Quick-Win Optimizations

**Generated:** December 3, 2025  
**Purpose:** Actionable code patches for immediate implementation

---

## 1. Fix Sitemap.xml (CRITICAL)

Replace entire contents of `client/public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Home -->
  <url>
    <loc>https://verifiablesystems.com/</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Ventures -->
  <url>
    <loc>https://verifiablesystems.com/ventures</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/ventures/helios</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/ventures/lumina</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/ventures/stackme</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Approach -->
  <url>
    <loc>https://verifiablesystems.com/approach</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/approach/pillars</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/approach/process</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/approach/standards</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Studio -->
  <url>
    <loc>https://verifiablesystems.com/studio</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/studio/purpose</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/studio/vision</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/studio/mission</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Insights -->
  <url>
    <loc>https://verifiablesystems.com/insights</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/insights/verification-standard</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/insights/insolvency-of-fiction</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/insights/machine-native-settlement</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Connect -->
  <url>
    <loc>https://verifiablesystems.com/connect</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Legal -->
  <url>
    <loc>https://verifiablesystems.com/privacy</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://verifiablesystems.com/terms</loc>
    <lastmod>2025-12-03</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
```

---

## 2. Fix Manifest.json Icons (CRITICAL)

Replace contents of `client/public/manifest.json`:

```json
{
  "name": "Verifiable Systems Group",
  "short_name": "VSG",
  "description": "The infrastructure of verifiable autonomy",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0B0C10",
  "theme_color": "#F26D21",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ]
}
```

---

## 3. Make BASE_URL Configurable (HIGH)

In `client/src/components/PageMeta.tsx`, change line 13:

```typescript
// Before
const BASE_URL = "https://verifiablesystems.com";

// After
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://verifiablesystems.com";
```

Add to `.env` or Replit Secrets:
```
VITE_BASE_URL=https://verifiablesystems.com
```

---

## 4. Add Twitter Handle to OG Meta (MEDIUM)

In `client/index.html`, add after line 31:

```html
<meta name="twitter:site" content="@VSG_official" />
<meta name="twitter:creator" content="@VSG_official" />
```

And update `client/src/components/PageMeta.tsx` to include:

```typescript
// In useEffect, add:
setMeta('meta[name="twitter:site"]', "content", "@VSG_official");
```

---

## 5. Remove Console Statements (MEDIUM)

### In `client/src/components/ContactForm.tsx` (line 100):
```typescript
// Before
console.error("Contact form error:", error);

// After
if (import.meta.env.DEV) {
  console.error("Contact form error:", error);
}
```

### In `client/src/components/ErrorBoundary.tsx` (line 26):
```typescript
// Before
console.error("[ErrorBoundary] Caught error:", error, errorInfo);

// After
if (process.env.NODE_ENV === "development") {
  console.error("[ErrorBoundary] Caught error:", error, errorInfo);
}
```

---

## 6. Image Optimization Commands

Run these commands to optimize images (requires imagemagick or sharp):

```bash
# Convert hero-texture to WebP (reduces 5.6MB → ~500KB)
npx sharp-cli client/public/hero-texture.png -o client/public/hero-texture.webp

# Optimize OG image
npx sharp-cli client/public/og-image.png --quality 80 -o client/public/og-image-opt.png

# Remove unused og_background.png (5.2MB)
rm client/public/og_background.png
```

---

## 7. Add Service Worker Registration (OPTIONAL)

If keeping PWA support, add to `client/src/main.tsx`:

```typescript
// At the end of the file
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered:', registration.scope);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}
```

Or remove `client/public/sw.js` if not using service worker.

---

## 8. Tighten CSP for Production (OPTIONAL)

In `server/app.ts`, consider using nonces for inline scripts:

```typescript
// Generate nonce per request
const nonce = crypto.randomBytes(16).toString('base64');

// Use in CSP
`script-src 'self' 'nonce-${nonce}'`

// Inject nonce into index.html
```

This requires more infrastructure changes but significantly improves security.

---

## Quick Win Summary

| Fix | Impact | Effort | Priority |
|-----|--------|--------|----------|
| Sitemap update | High | 5 min | CRITICAL |
| Manifest fix | Medium | 2 min | CRITICAL |
| BASE_URL env var | Medium | 5 min | HIGH |
| Image compression | High | 15 min | HIGH |
| Twitter handle | Low | 2 min | MEDIUM |
| Console removal | Low | 5 min | MEDIUM |

**Total estimated time for all fixes:** ~35 minutes

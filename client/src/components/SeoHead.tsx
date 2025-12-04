import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SeoProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  path: string;
  image?: string;
  publishedTime?: string;
  breadcrumbs?: BreadcrumbItem[];
  articleAuthor?: string;
}

const DOMAIN = "https://verifiablesystems.com";

export function SeoHead({ 
  title, 
  description, 
  type = 'website', 
  path, 
  image, 
  publishedTime,
  breadcrumbs,
  articleAuthor = "Verifiable Systems Group"
}: SeoProps) {
  const fullUrl = `${DOMAIN}${path}`;
  const ogImage = image ? `${DOMAIN}${image}` : `${DOMAIN}/og-image.png`;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": "Verifiable Systems Group LLC",
    "alternateName": ["Verifiable Systems Group", "Verifiable Systems", "VSG"],
    "url": DOMAIN,
    "logo": `${DOMAIN}/favicon.svg`,
    "description": "An AI-native, cryptography-grounded venture studio building verifiable systems for capital, identity, and intelligence.",
    "knowsAbout": ["Artificial Intelligence", "Verifiable Systems", "Non-custodial Finance", "Digital Identity"]
  };

  const articleSchema = type === 'article' ? {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "image": ogImage,
    "datePublished": publishedTime,
    "author": {
      "@type": "Organization",
      "name": articleAuthor,
      "url": DOMAIN
    },
    "publisher": {
      "@type": "ResearchOrganization",
      "name": "Verifiable Systems Group",
      "logo": {
        "@type": "ImageObject",
        "url": `${DOMAIN}/favicon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  } : null;

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${DOMAIN}${item.path}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{`${title} — Verifiable Systems Group`}</title>
      <meta name="keywords" content="Verifiable Systems Group, VSG, AI-native, non-custodial, verifiable systems, capital, identity, intelligence, Truth, Capital, Dignity" />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:site_name" content="Verifiable Systems Group" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="verifiablesystems.com" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}

export default SeoHead;

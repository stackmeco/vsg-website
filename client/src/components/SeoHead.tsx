import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  path: string;
  image?: string;
  publishedTime?: string;
}

export function SeoHead({ title, description, type = 'website', path, image, publishedTime }: SeoProps) {
  const domain = "https://verifiablesystems.com";
  const fullUrl = `${domain}${path}`;
  const ogImage = image ? `${domain}${image}` : `${domain}/og-image.png`;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": "Verifiable Systems Group",
    "alternateName": "VSG",
    "url": domain,
    "logo": `${domain}/favicon.svg`,
    "description": "Engineering verifiable systems for intelligence and value.",
    "knowsAbout": ["Artificial Intelligence", "Bitcoin", "Digital Assets", "System Engineering"]
  };

  return (
    <Helmet>
      <title>{`${title} | VSG`}</title>
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
    </Helmet>
  );
}

export default SeoHead;

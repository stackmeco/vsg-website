interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function OrganizationJsonLd({
  name = "Verifiable Systems Group",
  url = "https://verifiablesystems.com",
  logo = "https://verifiablesystems.com/logo.png",
  description = "AI-native finance R&D studio building governed rails for identity, treasury, and liquidity.",
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Andrew Steck"
      }
    ],
    sameAs: []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

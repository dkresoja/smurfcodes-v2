import Script from "next/script";

export default function JsonLd() {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SmurfCodes",
          url: "https://smurfcodes.com",
          description: "Your Ultimate CS2 Promo Codes Resource",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://smurfcodes.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}

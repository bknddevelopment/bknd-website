import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Web Development Company in Elizabeth, NJ | BKND",
  description:
    "Elizabeth NJ web development and digital marketing agency. Custom websites, SEO, and AI-powered marketing for local businesses. Free consultation.",
  alternates: {
    canonical: "/locations/elizabeth-nj",
  },
  openGraph: {
    title: "Web Development Company in Elizabeth, NJ",
    description:
      "Custom websites, SEO, and AI-powered marketing for Elizabeth NJ businesses.",
    type: "website",
    url: "https://bknddevelopment.com/locations/elizabeth-nj",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development - Elizabeth NJ Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Elizabeth, NJ",
    description:
      "Custom websites, SEO, and AI-powered marketing for Elizabeth NJ businesses.",
    images: ["/images/bknd-logo-new.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://bknddevelopment.com/#organization",
      name: "BKND Development",
      description:
        "Web development and digital marketing agency serving Elizabeth, NJ and Union County. Custom websites, SEO, paid advertising, and AI-powered marketing solutions.",
      url: "https://bknddevelopment.com",
      telephone: "+1-908-555-0100",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Elizabeth",
        addressRegion: "NJ",
        postalCode: "07201",
        addressCountry: "US",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Elizabeth",
          containedInPlace: {
            "@type": "State",
            name: "New Jersey",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "Union County",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/bknd-development",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development and Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Website Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Search Engine Optimization",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Marketing Solutions",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/locations/elizabeth-nj#webpage",
      url: "https://bknddevelopment.com/locations/elizabeth-nj",
      name: "Web Development Company in Elizabeth, NJ | BKND Development",
      description:
        "Elizabeth NJ web development and digital marketing agency. Custom websites, SEO, and AI-powered marketing for local businesses.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://bknddevelopment.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Elizabeth, NJ",
          item: "https://bknddevelopment.com/locations/elizabeth-nj",
        },
      ],
    },
  ],
};

export default function ElizabethNJLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="elizabeth-nj-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

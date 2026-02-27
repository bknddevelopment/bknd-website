import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Industry Marketing Solutions | BKND Development",
  description:
    "Specialized digital marketing for HVAC, dental, roofing, plumbing, and restaurant businesses. Data-driven SEO strategies tailored to your industry.",
  keywords: [
    "industry marketing",
    "HVAC marketing",
    "dental marketing",
    "roofing marketing",
    "plumbing marketing",
    "restaurant marketing",
    "industry SEO",
  ],
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industry Marketing Solutions | BKND Development",
    description:
      "Specialized digital marketing strategies for service-based businesses. HVAC, dental, roofing, plumbing, and restaurant marketing that drives leads.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/industries",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Industry Marketing",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://bknddevelopment.com/industries#page",
      url: "https://bknddevelopment.com/industries",
      name: "Industry Marketing Solutions",
      description:
        "Specialized digital marketing for HVAC, dental, roofing, plumbing, and restaurant businesses.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "HVAC Marketing",
            url: "https://bknddevelopment.com/industries/hvac-marketing",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dental Marketing",
            url: "https://bknddevelopment.com/industries/dental-marketing",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Roofing Marketing",
            url: "https://bknddevelopment.com/industries/roofing-marketing",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Plumbing Marketing",
            url: "https://bknddevelopment.com/industries/plumbing-marketing",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Restaurant Marketing",
            url: "https://bknddevelopment.com/industries/restaurant-marketing",
          },
        ],
      },
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
          name: "Industries",
          item: "https://bknddevelopment.com/industries",
        },
      ],
    },
  ],
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="industries-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

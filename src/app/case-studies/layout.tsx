import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Client Results | BKND Development",
  description:
    "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth through SEO and digital marketing.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Client Results | BKND Development",
    description:
      "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth.",
    type: "website",
    url: "https://bknddevelopment.com/case-studies",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Results | BKND Development",
    description:
      "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth.",
    images: ["/images/bknd-logo-new.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://bknddevelopment.com/case-studies#webpage",
      url: "https://bknddevelopment.com/case-studies",
      name: "Client Results | BKND Development",
      description:
        "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth through SEO and digital marketing.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
      datePublished: "2026-01-26",
      dateModified: "2026-02-23",
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
          name: "Case Studies",
          item: "https://bknddevelopment.com/case-studies",
        },
      ],
    },
  ],
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="case-studies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

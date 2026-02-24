import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Us | BKND Development",
  description:
    "BKND Development is a marketing agency built by developers. We combine technical expertise with data-driven strategy to deliver measurable growth for businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | BKND Development",
    description:
      "Marketing agency built by developers. Technical expertise meets data-driven strategy.",
    type: "website",
    url: "https://bknddevelopment.com/about",
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
    title: "About Us | BKND Development",
    description:
      "Marketing agency built by developers. Technical expertise meets data-driven strategy.",
    images: ["/images/bknd-logo-new.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://bknddevelopment.com/about#webpage",
      url: "https://bknddevelopment.com/about",
      name: "About Us | BKND Development",
      description:
        "BKND Development is a marketing agency built by developers. We combine technical expertise with data-driven strategy to deliver measurable growth for businesses.",
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
          name: "About",
          item: "https://bknddevelopment.com/about",
        },
      ],
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

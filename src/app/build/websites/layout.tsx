import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Software-Built Websites | BKND Development",
  description:
    "Custom websites built in code, not dragged and dropped. Next.js, performance-first architecture, and AI-powered content systems that grow with your business.",
  keywords: [
    "software built websites",
    "custom website development",
    "next.js web development",
    "custom web development",
    "website development company",
  ],
  alternates: {
    canonical: "/build/websites",
  },
  openGraph: {
    title: "Software-Built Websites | BKND Development",
    description:
      "Custom websites built in code, not dragged and dropped. Performance-first architecture that grows with your business.",
    url: "https://bknddevelopment.com/build/websites",
  },
  twitter: {
    title: "Software-Built Websites | BKND Development",
    description:
      "Custom websites built in code, not dragged and dropped.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/build/websites#webpage",
      url: "https://bknddevelopment.com/build/websites",
      name: "Software-Built Websites | BKND Development",
      description:
        "Custom websites built in code, not dragged and dropped. Performance-first architecture that grows with your business.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Build", item: "https://bknddevelopment.com/build" },
        { "@type": "ListItem", position: 3, name: "Websites", item: "https://bknddevelopment.com/build/websites" },
      ],
    },
  ],
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="websites-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

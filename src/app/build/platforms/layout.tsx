import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom Software & Platforms | BKND Development",
  description:
    "We build custom software, SaaS platforms, and internal tools. From concept to production — designed, coded, and deployed by a developer who understands business.",
  keywords: [
    "custom software development",
    "saas development",
    "custom platform development",
    "web application development",
  ],
  alternates: {
    canonical: "/build/platforms",
  },
  openGraph: {
    title: "Custom Software & Platforms | BKND Development",
    description:
      "We build custom software, SaaS platforms, and internal tools.",
    url: "https://bknddevelopment.com/build/platforms",
  },
  twitter: {
    title: "Custom Software & Platforms | BKND Development",
    description:
      "We build custom software, SaaS platforms, and internal tools.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/build/platforms#webpage",
      url: "https://bknddevelopment.com/build/platforms",
      name: "Custom Software & Platforms | BKND Development",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Build", item: "https://bknddevelopment.com/build" },
        { "@type": "ListItem", position: 3, name: "Platforms", item: "https://bknddevelopment.com/build/platforms" },
      ],
    },
  ],
};

export default function PlatformsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="platforms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Powered Marketing | BKND Development",
  description:
    "SEO, content, ads, analytics, and CRO — all run by one person with AI and custom software. No account managers. No handoffs. Just results.",
  keywords: [
    "ai powered marketing",
    "ai marketing agency",
    "automated seo",
    "ai seo agency",
    "marketing automation",
  ],
  alternates: {
    canonical: "/build/marketing",
  },
  openGraph: {
    title: "AI-Powered Marketing | BKND Development",
    description:
      "SEO, content, ads, analytics, and CRO — all run by one person with AI and custom software.",
    url: "https://bknddevelopment.com/build/marketing",
  },
  twitter: {
    title: "AI-Powered Marketing | BKND Development",
    description:
      "SEO, content, ads, analytics, and CRO — all run by one person with AI and custom software.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/build/marketing#webpage",
      url: "https://bknddevelopment.com/build/marketing",
      name: "AI-Powered Marketing | BKND Development",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Build", item: "https://bknddevelopment.com/build" },
        { "@type": "ListItem", position: 3, name: "Marketing", item: "https://bknddevelopment.com/build/marketing" },
      ],
    },
  ],
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

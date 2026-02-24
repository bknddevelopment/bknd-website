import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Content Marketing Services | BKND Development",
  description:
    "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers. Blog content, case studies, whitepapers, and email sequences.",
  keywords: [
    "content marketing",
    "blog writing",
    "case studies",
    "content strategy",
    "SEO content",
    "thought leadership",
    "content creation agency",
  ],
  alternates: {
    canonical: "/services/content",
  },
  openGraph: {
    title: "Content Marketing Services | BKND Development",
    description:
      "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers.",
    type: "website",
    url: "https://bknddevelopment.com/services/content",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services | BKND Development",
    description:
      "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bknddevelopment.com/services/content#service",
      name: "Content Marketing Services",
      description:
        "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers.",
      provider: { "@id": "https://bknddevelopment.com/#organization" },
      serviceType: "Content Marketing",
      areaServed: [{ "@type": "Country", name: "United States" }],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Content Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Blog Content Strategy",
              description:
                "SEO-optimized blog content that drives organic traffic and establishes thought leadership.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Case Study Development",
              description:
                "Compelling case studies that showcase results and build trust with prospects.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Email Sequences",
              description:
                "Automated email sequences for nurturing leads and driving conversions.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/services/content#webpage",
      url: "https://bknddevelopment.com/services/content",
      name: "Content Marketing Services | BKND Development",
      description:
        "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/services/content#service" },
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
          name: "Services",
          item: "https://bknddevelopment.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Content Marketing",
          item: "https://bknddevelopment.com/services/content",
        },
      ],
    },
  ],
};

export default function ContentMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="content-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

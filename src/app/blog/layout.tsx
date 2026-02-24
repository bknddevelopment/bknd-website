import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Insights | BKND Development",
  description:
    "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Insights | BKND Development",
    description:
      "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
    type: "website",
    url: "https://bknddevelopment.com/blog",
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
    title: "Insights | BKND Development",
    description:
      "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
    images: ["/images/bknd-logo-new.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://bknddevelopment.com/blog#blog",
      url: "https://bknddevelopment.com/blog",
      name: "Insights | BKND Development",
      description:
        "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
      publisher: { "@id": "https://bknddevelopment.com/#organization" },
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://bknddevelopment.com/blog#webpage",
      url: "https://bknddevelopment.com/blog",
      name: "Insights | BKND Development",
      description:
        "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
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
          name: "Blog",
          item: "https://bknddevelopment.com/blog",
        },
      ],
    },
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

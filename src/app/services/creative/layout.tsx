import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Performance Creative Services | Ad Creative & Landing Pages | BKND Development",
  description:
    "Data-driven creative services that convert. We design ad creative, landing pages, video ads, and social content engineered for performance. A/B tested, conversion-focused design.",
  keywords: [
    "performance creative",
    "ad creative agency",
    "landing page design",
    "video ads",
    "social media creative",
    "A/B testing",
    "conversion optimization",
    "creative testing",
    "ad design",
    "digital advertising creative",
  ],
  openGraph: {
    title: "Performance Creative Services | BKND Development",
    description:
      "Data-driven creative services that convert. Ad creative, landing pages, and video content engineered for performance.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/services/creative",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Creative Services | BKND Development",
    description:
      "Data-driven creative services that convert. Ad creative, landing pages, and video content engineered for performance.",
  },
  alternates: {
    canonical: "/services/creative",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bknddevelopment.com/services/creative#service",
      name: "Performance Creative Services",
      description:
        "Data-driven creative services including ad creative, landing page design, video ads, and social content engineered for conversion performance.",
      provider: { "@id": "https://bknddevelopment.com/#organization" },
      serviceType: "Creative Services",
      areaServed: [{ "@type": "Country", name: "United States" }],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Creative Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ad Creative Design",
              description:
                "Performance-driven ad creative for Google, Meta, LinkedIn, and programmatic campaigns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Landing Page Design",
              description:
                "Conversion-optimized landing pages with A/B testing and iterative improvement.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Video Ad Production",
              description:
                "Short-form video ads optimized for social platforms and YouTube.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/services/creative#webpage",
      url: "https://bknddevelopment.com/services/creative",
      name: "Performance Creative Services | BKND Development",
      description:
        "Data-driven creative services that convert. Ad creative, landing pages, and video content engineered for performance.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/services/creative#service" },
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
          name: "Creative",
          item: "https://bknddevelopment.com/services/creative",
        },
      ],
    },
  ],
};

export default function CreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="creative-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

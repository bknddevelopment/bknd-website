import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Data & Analytics Services | GA4, Tracking & Dashboards | BKND Development",
  description:
    "Developer-built analytics that actually work. GA4 setup, tracking implementation, custom dashboards, and attribution modeling. Get data you can use to drive business decisions.",
  keywords: [
    "GA4 setup",
    "Google Analytics 4",
    "tracking implementation",
    "custom dashboards",
    "attribution modeling",
    "analytics consultant",
    "data analytics",
    "Looker Studio dashboards",
    "server-side tagging",
    "cross-domain tracking",
    "marketing analytics",
    "conversion tracking",
    "New Jersey analytics agency",
  ],
  openGraph: {
    title: "Data & Analytics Services | BKND Development",
    description:
      "Developer-built analytics that actually work. GA4 setup, tracking implementation, custom dashboards, and attribution modeling.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/services/analytics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data & Analytics Services | BKND Development",
    description:
      "Developer-built analytics that actually work. GA4 setup, tracking implementation, custom dashboards, and attribution modeling.",
  },
  alternates: {
    canonical: "/services/analytics",
  },
};

// JSON-LD Schema for the service page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data & Analytics Services",
  description:
    "Developer-built analytics including GA4 setup, tracking implementation, custom dashboards, and attribution modeling.",
  provider: {
    "@type": "Organization",
    name: "BKND Development",
    url: "https://bknddevelopment.com/",
  },
  serviceType: "Analytics & Data Services",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Analytics Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GA4 Setup & Migration",
          description:
            "Complete Google Analytics 4 implementation with custom events, conversions, and e-commerce tracking.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tracking Implementation",
          description:
            "Server-side tagging, cross-domain tracking, and custom event architectures.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Dashboards",
          description:
            "Real-time dashboards built in Looker Studio or your preferred platform.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Attribution Modeling",
          description:
            "Multi-touch attribution that shows the true customer journey.",
        },
      },
    ],
  },
};

// FAQ Schema
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a GA4 implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard GA4 setup takes 2-3 weeks. Complex implementations with custom events, e-commerce tracking, and multi-domain setups typically take 4-6 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing analytics setup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We often audit and improve existing implementations. We identify what is working, what is broken, and what is missing—then fix it without losing historical data.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms do you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with GA4, Google Tag Manager, Looker Studio, BigQuery, Segment, Mixpanel, Amplitude, and most major marketing platforms.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle attribution across channels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement proper UTM structures, cross-domain tracking, and custom attribution models that account for the full customer journey—not just last-click.",
      },
    },
  ],
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}

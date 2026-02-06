import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "AI Marketing Solutions | Custom AI, Chatbots, GEO & Automation | BKND Development",
  description:
    "AI solutions that actually drive revenue. Custom AI development, chatbots, marketing automation, and Generative Engine Optimization (GEO) for businesses ready to leverage AI.",
  keywords: [
    "AI marketing solutions",
    "AI chatbots",
    "marketing automation",
    "generative engine optimization",
    "custom AI development",
    "AI marketing agency",
    "AI for business",
  ],
  alternates: {
    canonical: "/services/ai",
  },
  openGraph: {
    title: "AI Marketing Solutions | BKND Development",
    description:
      "AI solutions that actually drive revenue. Custom AI, chatbots, GEO, and automation.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/services/ai",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development AI Marketing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Solutions | BKND Development",
    description:
      "AI solutions that actually drive revenue. Custom AI, chatbots, GEO, and automation.",
    images: ["/images/bknd-logo-new.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://bknddevelopment.com/services/ai#service",
      name: "AI Marketing Solutions",
      description:
        "Comprehensive AI solutions including chatbots, marketing automation, custom AI development, and Generative Engine Optimization (GEO).",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "AI Marketing Solutions",
      areaServed: [{ "@type": "Country", name: "United States" }],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Chatbots & Assistants",
              description:
                "24/7 customer engagement that converts. AI chatbots that handle inquiries, qualify leads, and book meetings.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Marketing Automation",
              description:
                "AI-powered workflows that learn and optimize email sequences, customer journeys, and campaign management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom AI Solutions",
              description:
                "Bespoke AI including RAG implementations, custom agents, and AI solutions for specific business challenges.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative Engine Optimization (GEO)",
              description:
                "Optimize content for ChatGPT, Gemini, Perplexity, and AI-powered search platforms.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/services/ai#webpage",
      url: "https://bknddevelopment.com/services/ai",
      name: "AI Marketing Solutions | BKND Development",
      description: "AI solutions that actually drive revenue.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/services/ai#service" },
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
          name: "AI Solutions",
          item: "https://bknddevelopment.com/services/ai",
        },
      ],
    },
  ],
};

export default function AIServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="ai-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

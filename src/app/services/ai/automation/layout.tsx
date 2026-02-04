import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI Marketing Automation | Intelligent Workflows & Lead Scoring | BKND Development",
  description:
    "AI-powered marketing automation that learns and optimizes. Email sequences, customer journeys, lead scoring, and predictive personalization. 250-300% ROI vs traditional automation.",
  keywords: [
    "AI marketing automation",
    "intelligent automation",
    "marketing automation AI",
    "email automation AI",
    "predictive marketing",
    "lead scoring AI",
    "customer journey automation",
    "marketing workflow optimization",
    "Klaviyo automation",
    "HubSpot AI",
    "Marketo automation",
    "predictive personalization",
    "automated email campaigns",
    "machine learning marketing",
    "New Jersey marketing automation",
  ],
  openGraph: {
    title: "AI Marketing Automation | BKND Development",
    description:
      "AI-powered marketing automation that learns and optimizes. Email sequences, customer journeys, lead scoring, and predictive personalization.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://charwinvanryckdegroot.github.io/bknd-website/services/ai/automation",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Marketing Automation | BKND Development",
    description:
      "AI-powered marketing automation that learns and optimizes. Email sequences, customer journeys, lead scoring, and predictive personalization.",
  },
  alternates: {
    canonical: "/services/ai/automation",
  },
};

// JSON-LD Schema for the service page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Marketing Automation Services",
  description:
    "AI-powered marketing automation including email campaigns, customer journey automation, lead scoring, and predictive personalization.",
  provider: {
    "@type": "Organization",
    name: "BKND Development",
    url: "https://charwinvanryckdegroot.github.io/bknd-website/",
  },
  serviceType: "AI Marketing Automation",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Automation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Email Campaign Automation",
          description:
            "AI-optimized email sequences with predictive send times.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Customer Journey Automation",
          description: "Multi-channel workflows that adapt in real-time.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lead Scoring & Nurturing",
          description: "ML-powered scoring that identifies ready-to-buy leads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predictive Personalization",
          description: "Dynamic content based on behavior and intent.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workflow Optimization",
          description:
            "AI that identifies bottlenecks and suggests improvements.",
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
      name: "How is AI automation different from regular marketing automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional automation runs on fixed rules. AI automation learns from every interaction, optimizes send times, personalizes content, and improves conversion rates automatically.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms do you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with all major marketing automation platforms including Klaviyo, HubSpot, Marketo, ActiveCampaign, Salesforce Marketing Cloud, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How long until we see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see measurable improvements within 30-60 days. 60% of implementations achieve positive ROI within 12 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need a lot of data to get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. We can start with as little as 1,000 email subscribers or 500 monthly leads. The AI begins learning immediately and improves as your data grows.",
      },
    },
  ],
};

export default function AIAutomationLayout({
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

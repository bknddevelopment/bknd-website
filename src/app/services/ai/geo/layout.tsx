import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "Generative Engine Optimization (GEO) | AI Search Optimization | BKND Development",
  description:
    "Get found in AI search. GEO optimizes your content for ChatGPT, Gemini, Perplexity, and other AI platforms. Be cited, referenced, and recommended in AI-generated answers.",
  keywords: [
    "generative engine optimization",
    "GEO",
    "AI search optimization",
    "ChatGPT optimization",
    "AI SEO",
    "LLM optimization",
    "AI citation generation",
    "Perplexity optimization",
    "Gemini optimization",
    "AI search visibility",
    "AI content optimization",
    "generative AI marketing",
    "AI search strategy",
    "answer engine optimization",
  ],
  alternates: {
    canonical: "/services/ai/geo",
  },
  openGraph: {
    title: "Generative Engine Optimization (GEO) | BKND Development",
    description:
      "Get found in AI search. Optimize your content for ChatGPT, Gemini, and Perplexity. Be the source AI trusts and cites.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/services/ai/geo",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development GEO Services - AI Search Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative Engine Optimization (GEO) | BKND Development",
    description:
      "Get found in AI search. Optimize for ChatGPT, Gemini, Perplexity, and AI platforms.",
    images: ["/images/bknd-logo-new.png"],
  },
};

// JSON-LD Schema Markup for GEO Services Page
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Service Schema
    {
      "@type": "Service",
      "@id": "https://bknddevelopment.com/services/ai/geo#service",
      name: "Generative Engine Optimization (GEO)",
      description:
        "GEO services that optimize your content for AI search engines including ChatGPT, Google Gemini, Perplexity, Claude, and Microsoft Copilot. Get cited, referenced, and recommended in AI-generated answers.",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "Generative Engine Optimization",
      areaServed: [
        {
          "@type": "City",
          name: "Elizabeth",
          containedInPlace: {
            "@type": "State",
            name: "New Jersey",
          },
        },
        {
          "@type": "State",
          name: "New Jersey",
        },
        {
          "@type": "Country",
          name: "United States",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "GEO Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Search Visibility Audits",
              description:
                "Analyze how AI platforms currently perceive and cite your brand across ChatGPT, Gemini, and Perplexity.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LLM Optimization",
              description:
                "Structure content for large language model understanding and optimal information retrieval.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Citation Generation",
              description:
                "Engineer content that AI systems reference and cite when answering user queries.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content Structuring for AI",
              description:
                "Format information architecture for optimal AI consumption with clear hierarchies and semantic relationships.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Search Tracking",
              description:
                "Monitor visibility across AI platforms including citations, references, and brand mentions.",
            },
          },
        ],
      },
    },
    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/services/ai/geo#webpage",
      url: "https://bknddevelopment.com/services/ai/geo",
      name: "Generative Engine Optimization (GEO) | AI Search Optimization | BKND Development",
      description:
        "Get found in AI search. GEO optimizes your content for ChatGPT, Gemini, Perplexity, and other AI platforms.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/services/ai/geo#service",
      },
      datePublished: "2026-01-28",
      dateModified: "2026-01-28",
    },
    // BreadcrumbList Schema
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
          name: "AI",
          item: "https://bknddevelopment.com/services/ai",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "GEO",
          item: "https://bknddevelopment.com/services/ai/geo",
        },
      ],
    },
    // FAQPage Schema
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/services/ai/geo#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Generative Engine Optimization (GEO)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GEO is the practice of optimizing content to appear in AI-generated responses. While SEO targets traditional search engines like Google, GEO targets AI systems like ChatGPT, Gemini, and Perplexity that generate answers by synthesizing information from multiple sources.",
          },
        },
        {
          "@type": "Question",
          name: "How is GEO different from traditional SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Traditional SEO optimizes for ranking in a list of blue links. GEO optimizes to be cited within AI-generated answers. The goal shifts from "rank higher" to "be the source AI references." This requires different content structures, authority signals, and optimization tactics.',
          },
        },
        {
          "@type": "Question",
          name: "How do you track AI search visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We systematically query AI platforms with relevant questions and analyze which sources they cite. We track citation frequency, context accuracy, and brand mention sentiment. This provides ongoing visibility into your AI search presence.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see GEO results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI systems update their knowledge and citation patterns regularly. Initial improvements can appear within weeks as optimized content gets indexed. Full impact typically materializes over 2-4 months as AI systems learn to trust and cite your content.",
          },
        },
        {
          "@type": "Question",
          name: "Do I still need traditional SEO if I do GEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Traditional search isn't going away—it's being supplemented by AI search. The strongest strategy combines SEO and GEO to capture users regardless of how they search. Many AI systems also use traditional search rankings as trust signals.",
          },
        },
      ],
    },
  ],
};

export default function GEOServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="geo-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

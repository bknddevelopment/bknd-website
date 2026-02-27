import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dental Marketing Agency | SEO for Dentists & Dental Practices | BKND Development",
  description:
    "Dental marketing agency helping dentists and dental practices get more patients through SEO, Google Business Profile optimization, and reputation management. Dental SEO company built by developers.",
  keywords: [
    "dentist seo",
    "dental seo company",
    "dental marketing",
    "dental marketing agency",
    "seo for dentists",
    "dental practice marketing",
    "dentist digital marketing",
    "dental office seo",
    "dental website marketing",
    "dental patient acquisition",
  ],
  alternates: {
    canonical: "/industries/dental-marketing",
  },
  openGraph: {
    title: "Dental Marketing Agency | BKND Development",
    description:
      "Dental marketing agency built by developers. SEO, Google Business Profile optimization, and patient acquisition strategies that fill your appointment book.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/industries/dental-marketing",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Dental Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Marketing Agency | BKND Development",
    description:
      "Dental marketing agency built by developers. Get more patients through SEO and digital marketing for dentists.",
    images: ["/images/bknd-logo-new.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://bknddevelopment.com/#organization",
      name: "BKND Development",
      description:
        "Dental marketing agency providing SEO, web development, and digital marketing services to dentists and dental practices nationwide.",
      url: "https://bknddevelopment.com",
      telephone: "+1-908-555-0100",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cranford",
        addressRegion: "NJ",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/bknd-development",
      ],
    },
    {
      "@type": "Service",
      "@id": "https://bknddevelopment.com/industries/dental-marketing#service",
      name: "Dental Marketing Services",
      description:
        "Comprehensive digital marketing services for dentists and dental practices including SEO, Google Business Profile optimization, reputation management, and patient acquisition.",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "Dental Marketing",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Dental Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dental SEO",
              description:
                "Search engine optimization for dental practices including technical SEO, local SEO, keyword targeting, and content strategy to rank for dental search terms.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Business Profile for Dentists",
              description:
                "Google Business Profile optimization, category management, post scheduling, and map pack ranking strategies for dental practices.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Patient Review Management",
              description:
                "Review generation, monitoring, and response management to build trust and improve local search rankings for dental practices.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dental Content Marketing",
              description:
                "Patient-focused content creation, blog strategy, and educational resources that drive organic traffic and establish dental authority.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/industries/dental-marketing#webpage",
      url: "https://bknddevelopment.com/industries/dental-marketing",
      name: "Dental Marketing Agency | SEO for Dentists & Dental Practices | BKND Development",
      description:
        "Dental marketing agency helping dentists and dental practices get more patients through SEO, Google Business Profile optimization, and reputation management.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/industries/dental-marketing#service",
      },
      datePublished: "2026-02-27",
      dateModified: "2026-02-27",
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
          name: "Industries",
          item: "https://bknddevelopment.com/industries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dental Marketing",
          item: "https://bknddevelopment.com/industries/dental-marketing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/industries/dental-marketing#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does dental marketing cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dental marketing costs typically range from $1,500 to $5,000 per month depending on competition in your area, the number of services you want to rank for, and whether you need content creation and reputation management. Single-location dental practices usually start around $1,500-$2,500/month for SEO and GBP optimization. Multi-location practices or those in competitive metro areas may need $3,000-$5,000/month.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take for dental SEO to show results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most dental practices see measurable improvements in Google Maps visibility within 2-3 months and significant organic ranking improvements within 4-6 months. The timeline depends on your current website health, local competition, and how many dental keywords you are targeting. Google Business Profile optimizations tend to show results faster than organic SEO.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get my dental practice to show up on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ranking on Google Maps requires a fully optimized Google Business Profile with accurate categories, complete service lists, consistent NAP citations across the web, a steady stream of patient reviews, and geo-targeted content on your website. We handle all of this as part of our dental marketing service.",
          },
        },
        {
          "@type": "Question",
          name: "How important are patient reviews for dental SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Patient reviews are one of the top ranking factors for local dental searches. 88% of consumers trust online reviews as much as personal recommendations. Google uses review quantity, quality, recency, and your responses as ranking signals. A consistent review generation strategy is essential for any dental practice serious about showing up in local search.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of content should a dental practice publish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dental practices should publish service-specific pages for every procedure offered, educational blog content answering common patient questions, location-specific pages for each service area, and before-and-after case studies. This content targets long-tail dental keywords and builds topical authority that Google rewards with higher rankings.",
          },
        },
        {
          "@type": "Question",
          name: "Should dentists invest in PPC or SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both have a place in dental marketing. PPC (Google Ads) delivers immediate visibility but costs $25+ per click for dental keywords and stops the moment you stop paying. SEO builds long-term organic visibility that generates free patient leads month after month. Most dental practices benefit from PPC for immediate patient acquisition while SEO builds sustainable traffic over time.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle marketing for multi-location dental practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multi-location dental practices need separate Google Business Profiles for each location, location-specific landing pages, unique content for each service area, and a citation strategy that keeps NAP data consistent across all locations. We build individual strategies for each location while maintaining brand consistency across the practice.",
          },
        },
        {
          "@type": "Question",
          name: "How do you measure dental marketing ROI?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We track dental marketing ROI through new patient phone calls, appointment form submissions, Google Maps actions (calls, directions, website clicks), keyword rankings for target dental terms, organic traffic growth, and cost per patient acquisition. Monthly reports show exactly how many new patient leads your marketing investment generated.",
          },
        },
      ],
    },
  ],
};

export default function DentalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="dental-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "HVAC Marketing Agency | Digital Marketing for HVAC Companies | BKND Development",
  description:
    "HVAC marketing agency that fills your service calendar year-round. SEO, Google Ads, Google Business Profile optimization, and content marketing built specifically for HVAC companies. Get a free HVAC marketing audit.",
  keywords: [
    "hvac marketing agency",
    "hvac marketing",
    "hvac seo",
    "hvac digital marketing",
    "hvac advertising",
    "marketing for hvac companies",
    "hvac lead generation",
    "hvac internet marketing",
    "hvac company marketing",
    "digital marketing for hvac",
  ],
  alternates: {
    canonical: "/industries/hvac-marketing",
  },
  openGraph: {
    title: "HVAC Marketing Agency | BKND Development",
    description:
      "HVAC marketing agency built by developers. SEO, paid ads, and digital marketing strategies that keep your HVAC service calendar full year-round.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/industries/hvac-marketing",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development HVAC Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HVAC Marketing Agency | BKND Development",
    description:
      "HVAC marketing agency built by developers. Fill your service calendar with SEO, Google Ads, and digital marketing for HVAC companies.",
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
        "HVAC marketing agency providing SEO, paid advertising, content marketing, and digital marketing services to HVAC companies nationwide.",
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
      "@id": "https://bknddevelopment.com/industries/hvac-marketing#service",
      name: "HVAC Marketing Services",
      description:
        "Digital marketing services for HVAC companies including local SEO, Google Business Profile optimization, content marketing, and paid advertising to generate leads year-round.",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "Digital Marketing for HVAC Companies",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HVAC Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "HVAC Local SEO",
              description:
                "Search engine optimization for HVAC companies including keyword targeting, technical SEO, and content strategy to rank for high-intent HVAC searches.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "HVAC Google Business Profile Optimization",
              description:
                "Google Business Profile setup, optimization, and management for HVAC companies to dominate Google Maps and local search results.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "HVAC Content Marketing",
              description:
                "Blog content, service page optimization, and seasonal content strategies that attract homeowners searching for HVAC services.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "HVAC Paid Advertising",
              description:
                "Google Ads and Local Services Ads management for HVAC companies targeting high-intent emergency and seasonal searches.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/industries/hvac-marketing#webpage",
      url: "https://bknddevelopment.com/industries/hvac-marketing",
      name: "HVAC Marketing Agency | Digital Marketing for HVAC Companies | BKND Development",
      description:
        "HVAC marketing agency that fills your service calendar year-round. SEO, Google Ads, Google Business Profile optimization, and content marketing built specifically for HVAC companies.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/industries/hvac-marketing#service",
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
          name: "HVAC Marketing",
          item: "https://bknddevelopment.com/industries/hvac-marketing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/industries/hvac-marketing#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does HVAC marketing cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HVAC marketing typically costs between $1,500 and $5,000 per month depending on your market size, competition level, and service mix. Local SEO for a single-location HVAC company starts around $1,500/month, while comprehensive campaigns including paid ads and content marketing may require $3,000-$5,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see results from HVAC marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most HVAC companies see measurable improvements within 3-4 months for SEO and immediate results from paid advertising. Google Business Profile optimizations often show results within 4-6 weeks. The full impact of a comprehensive HVAC marketing strategy typically materializes by 6-8 months, with compounding returns after that.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle seasonal HVAC marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build seasonal strategies that ramp up before peak demand periods. AC content and ads intensify in spring before summer hits. Heating campaigns launch in early fall. During shoulder seasons, we focus on maintenance, indoor air quality, and system replacement content to keep leads flowing year-round instead of leaving you with dead months.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get my HVAC company to show up on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google Maps rankings for HVAC companies depend on three factors: a fully optimized Google Business Profile, consistent citations across online directories, and strong reviews. We handle all three -- optimizing your GBP with the right categories and services, building citations on HVAC-relevant directories, and implementing a review generation strategy that builds social proof.",
          },
        },
        {
          "@type": "Question",
          name: "How important are reviews for HVAC marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reviews are critical for HVAC companies. 93% of homeowners read reviews before hiring a contractor, and Google uses review quantity, quality, and recency as ranking factors for local search. We help you build a systematic review generation process that consistently earns 5-star reviews and respond professionally to all feedback.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of content should HVAC companies publish?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HVAC companies should publish service pages for every service they offer, location pages for each service area, seasonal maintenance guides, troubleshooting articles that capture emergency searches, and comparison content like heat pump vs furnace guides. This content captures searchers at every stage from research to emergency calls.",
          },
        },
        {
          "@type": "Question",
          name: "Should my HVAC company invest in PPC or SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both, but for different reasons. PPC (Google Ads) delivers immediate leads, especially for emergency searches like AC repair. SEO builds long-term organic visibility that generates free leads once you rank. Most HVAC companies benefit from PPC for immediate ROI while SEO compounds over time. We help you allocate budget between both based on your goals and season.",
          },
        },
        {
          "@type": "Question",
          name: "How do you track ROI on HVAC marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We track every lead source -- phone calls, form submissions, and chat messages -- back to the specific marketing channel and keyword that generated it. Monthly reports show cost per lead by channel, which keywords drive the most valuable jobs, and your overall return on marketing investment. You always know exactly what your marketing dollars are producing.",
          },
        },
      ],
    },
  ],
};

export default function HVACMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="hvac-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

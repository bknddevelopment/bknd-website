import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NJ SEO Company | Search Engine Optimization in New Jersey | BKND Development",
  description:
    "Top-rated NJ SEO company helping New Jersey businesses rank higher on Google. Technical SEO, local optimization, and content strategy built by developers. Get a free SEO audit.",
  keywords: [
    "NJ SEO company",
    "SEO company NJ",
    "SEO company in NJ",
    "NJ SEO companies",
    "best SEO company in NJ",
    "New Jersey SEO",
    "NJ local SEO",
    "SEO services New Jersey",
    "search engine optimization NJ",
    "SEO agency NJ",
  ],
  alternates: {
    canonical: "/services/seo/new-jersey",
  },
  openGraph: {
    title: "NJ SEO Company | BKND Development",
    description:
      "New Jersey SEO company built by developers. Technical SEO, local optimization, and data-driven strategies that get NJ businesses to page one of Google.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/services/seo/new-jersey",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development NJ SEO Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NJ SEO Company | BKND Development",
    description:
      "New Jersey SEO company built by developers. Get your NJ business to page one of Google.",
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
        "NJ SEO company providing search engine optimization, web development, and digital marketing services to businesses across New Jersey.",
      url: "https://bknddevelopment.com",
      telephone: "+1-908-555-0100",
      areaServed: [
        { "@type": "State", name: "New Jersey", sameAs: "https://en.wikipedia.org/wiki/New_Jersey" },
        { "@type": "AdministrativeArea", name: "Union County, NJ" },
        { "@type": "AdministrativeArea", name: "Essex County, NJ" },
        { "@type": "AdministrativeArea", name: "Middlesex County, NJ" },
        { "@type": "AdministrativeArea", name: "Bergen County, NJ" },
        { "@type": "AdministrativeArea", name: "Morris County, NJ" },
        { "@type": "AdministrativeArea", name: "Hudson County, NJ" },
      ],
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
      "@id": "https://bknddevelopment.com/services/seo/new-jersey#service",
      name: "NJ SEO Services",
      description:
        "Search engine optimization services for New Jersey businesses including technical SEO, local SEO, content strategy, and link building.",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "Search Engine Optimization",
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NJ SEO Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO for NJ Businesses",
              description:
                "Site speed optimization, schema markup, Core Web Vitals, crawlability fixes, and indexation management for New Jersey websites.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NJ Local SEO",
              description:
                "Google Business Profile optimization, local citations, map pack ranking, and geo-targeted content for NJ service areas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO Content Strategy",
              description:
                "Keyword research, content gap analysis, topic clusters, and editorial planning targeting NJ market search intent.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NJ Link Building",
              description:
                "White-hat link building through NJ business directories, local partnerships, digital PR, and authority content.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/services/seo/new-jersey#webpage",
      url: "https://bknddevelopment.com/services/seo/new-jersey",
      name: "NJ SEO Company | Search Engine Optimization in New Jersey | BKND Development",
      description:
        "Top-rated NJ SEO company helping New Jersey businesses rank higher on Google. Technical SEO, local optimization, and content strategy built by developers.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/services/seo/new-jersey#service",
      },
      datePublished: "2026-02-26",
      dateModified: "2026-02-26",
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
          name: "SEO",
          item: "https://bknddevelopment.com/services/seo",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "New Jersey",
          item: "https://bknddevelopment.com/services/seo/new-jersey",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/services/seo/new-jersey#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does SEO cost in New Jersey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO costs in New Jersey typically range from $1,500 to $5,000 per month depending on the scope, competition level, and number of target keywords. Local SEO for a single-location NJ business starts around $1,500/month, while multi-location or competitive statewide campaigns may require $3,000-$5,000/month. Unlike agencies that lock you into 12-month contracts, we offer flexible month-to-month agreements because our results speak for themselves.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to rank on Google in NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most NJ businesses see measurable ranking improvements within 3-4 months and significant results by 6-8 months. The timeline depends on your current site health, competition level for your target keywords, and how aggressively we can build authority. Local SEO improvements like Google Maps rankings tend to happen faster than organic rankings for competitive statewide terms.",
          },
        },
        {
          "@type": "Question",
          name: "What makes BKND different from other NJ SEO companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are developers first, which means we implement SEO changes directly instead of handing off recommendations to your dev team. This eliminates the bottleneck that slows down most SEO campaigns. We also use AI-enhanced tools for keyword research, content optimization, and competitive analysis that most NJ agencies do not have access to. Our clients see faster results because we move faster.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with small businesses in NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most of our NJ clients are small to mid-size businesses -- contractors, professional services firms, healthcare practices, and local service companies. We specialize in helping NJ businesses that depend on local customers finding them through Google Search and Google Maps.",
          },
        },
        {
          "@type": "Question",
          name: "What NJ areas do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve businesses throughout New Jersey with a focus on Central and Northern NJ including Union County, Essex County, Middlesex County, Bergen County, Morris County, Hudson County, Somerset County, and Passaic County. Our office is in Cranford, NJ, but we work with clients across the entire state.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help my NJ business show up on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Google Maps and the local 3-pack are where most NJ customers start when searching for local services. We optimize your Google Business Profile, build consistent local citations, manage reviews, and create geo-targeted content that helps you rank in the map results for your service area.",
          },
        },
      ],
    },
  ],
};

export default function NJSEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="nj-seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

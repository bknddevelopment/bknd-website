import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Powered Marketing in New Jersey | BKND Development",
  description:
    "NJ marketing company powered by AI and custom software. SEO, content, local optimization, and paid ads for New Jersey businesses. Developer-built. Results-driven.",
  keywords: [
    "NJ SEO company",
    "SEO company NJ",
    "NJ marketing agency",
    "New Jersey SEO",
    "NJ local SEO",
    "SEO services New Jersey",
    "ai marketing NJ",
    "NJ digital marketing",
  ],
  alternates: {
    canonical: "/build/marketing/new-jersey",
  },
  openGraph: {
    title: "AI-Powered Marketing in New Jersey | BKND Development",
    description:
      "NJ marketing company powered by AI and custom software. SEO, content, and paid ads for New Jersey businesses.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/build/marketing/new-jersey",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development NJ Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Marketing in New Jersey | BKND Development",
    description:
      "NJ marketing powered by AI and software. Get your NJ business to page one.",
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
        "NJ marketing company providing AI-powered SEO, web development, and digital marketing services to businesses across New Jersey.",
      url: "https://bknddevelopment.com",
      telephone: "+19735185600",
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
        streetAddress: "30 Union St, Unit 13",
        addressLocality: "Elizabeth",
        addressRegion: "NJ",
        postalCode: "07202",
        addressCountry: "US",
      },
      sameAs: ["https://www.linkedin.com/company/bknddevelopment"],
    },
    {
      "@type": "Service",
      "@id": "https://bknddevelopment.com/build/marketing/new-jersey#service",
      name: "NJ Marketing Services",
      description:
        "AI-powered marketing services for New Jersey businesses including SEO, content strategy, local optimization, and paid advertising.",
      provider: { "@id": "https://bknddevelopment.com/#organization" },
      serviceType: "Digital Marketing",
      areaServed: { "@type": "State", name: "New Jersey" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NJ Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO for NJ Businesses",
              description: "Site speed optimization, schema markup, Core Web Vitals, crawlability fixes, and indexation management for New Jersey websites.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NJ Local SEO",
              description: "Google Business Profile optimization, local citations, map pack ranking, and geo-targeted content for NJ service areas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI-Powered Content Strategy",
              description: "Keyword research, content gap analysis, topic clusters, and editorial planning targeting NJ market search intent.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "NJ Link Building",
              description: "White-hat link building through NJ business directories, local partnerships, digital PR, and authority content.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/build/marketing/new-jersey#webpage",
      url: "https://bknddevelopment.com/build/marketing/new-jersey",
      name: "AI-Powered Marketing in New Jersey | BKND Development",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/build/marketing/new-jersey#service" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Build", item: "https://bknddevelopment.com/build" },
        { "@type": "ListItem", position: 3, name: "Marketing", item: "https://bknddevelopment.com/build/marketing" },
        { "@type": "ListItem", position: 4, name: "New Jersey", item: "https://bknddevelopment.com/build/marketing/new-jersey" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/build/marketing/new-jersey#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does SEO cost in New Jersey?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO costs in New Jersey typically range from $1,500 to $5,000 per month depending on the scope, competition level, and number of target keywords. Local SEO for a single-location NJ business starts around $1,500/month, while multi-location or competitive statewide campaigns may require $3,000-$5,000/month.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to rank on Google in NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most NJ businesses see measurable ranking improvements within 3-4 months and significant results by 6-8 months. Local SEO improvements like Google Maps rankings tend to happen faster than organic rankings for competitive statewide terms.",
          },
        },
        {
          "@type": "Question",
          name: "What makes BKND different from other NJ marketing companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are one person with AI and custom software doing what normally takes a 15-person agency. We implement changes directly in code, use AI tools for research and optimization, and move faster because there are no handoffs or bottlenecks.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with small businesses in NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most of our NJ clients are small to mid-size businesses — contractors, professional services firms, healthcare practices, and local service companies.",
          },
        },
        {
          "@type": "Question",
          name: "What NJ areas do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve businesses throughout New Jersey with a focus on Central and Northern NJ including Union County, Essex County, Middlesex County, Bergen County, Morris County, Hudson County, Somerset County, and Passaic County.",
          },
        },
        {
          "@type": "Question",
          name: "Can you help my NJ business show up on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We optimize your Google Business Profile, build consistent local citations, manage reviews, and create geo-targeted content that helps you rank in the map results for your service area.",
          },
        },
      ],
    },
  ],
};

export default function NJMarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="nj-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Plumbing Marketing Agency | SEO for Plumbers | BKND Development",
  description:
    "Plumbing marketing agency that gets plumbers more calls. SEO for plumbers, Google Maps optimization, emergency service content, and paid search — built by developers who understand plumber marketing.",
  keywords: [
    "plumber seo",
    "plumber marketing",
    "plumbing marketing",
    "plumbing seo",
    "seo for plumbers",
    "plumbing company marketing",
    "plumber digital marketing",
    "plumbing advertising",
    "plumber lead generation",
    "plumbing website optimization",
  ],
  alternates: {
    canonical: "/industries/plumbing-marketing",
  },
  openGraph: {
    title: "Plumbing Marketing Agency | BKND Development",
    description:
      "Plumbing marketing agency built by developers. SEO for plumbers, Google Maps dominance, emergency keyword targeting, and full ROI tracking that keeps your phones ringing.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/industries/plumbing-marketing",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Plumbing Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plumbing Marketing Agency | BKND Development",
    description:
      "Plumbing marketing that gets plumbers more calls. SEO, Google Maps, emergency keywords, and paid search built by developers.",
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
        "Plumbing marketing agency providing SEO, Google Maps optimization, content strategy, and paid search services for plumbing companies nationwide.",
      url: "https://bknddevelopment.com",
      telephone: "+1-908-555-0100",
      areaServed: [
        { "@type": "Country", name: "United States", sameAs: "https://en.wikipedia.org/wiki/United_States" },
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
      "@id": "https://bknddevelopment.com/industries/plumbing-marketing#service",
      name: "Plumbing Marketing Services",
      description:
        "Digital marketing services for plumbing companies including SEO, Google Maps optimization, emergency service content strategy, and paid search management.",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "Digital Marketing for Plumbers",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plumbing Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plumbing SEO",
              description:
                "Search engine optimization for plumbing companies including technical SEO, on-page optimization, and link building targeting high-intent plumbing keywords.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Maps & Local Pack Optimization",
              description:
                "Google Business Profile optimization, local citations, and geo-targeted content to dominate the local 3-pack for plumbing searches in your service area.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Emergency Service Content Strategy",
              description:
                "Content creation targeting emergency plumbing keywords that capture homeowners actively searching for urgent plumbing help.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paid Search for Plumbers",
              description:
                "Google Ads management for plumbing companies with emergency keyword targeting, call-only campaigns, and full ROI tracking.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/industries/plumbing-marketing#webpage",
      url: "https://bknddevelopment.com/industries/plumbing-marketing",
      name: "Plumbing Marketing Agency | SEO for Plumbers | BKND Development",
      description:
        "Plumbing marketing agency that gets plumbers more calls. SEO for plumbers, Google Maps optimization, emergency service content, and paid search built by developers.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/industries/plumbing-marketing#service",
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
          name: "Plumbing Marketing",
          item: "https://bknddevelopment.com/industries/plumbing-marketing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/industries/plumbing-marketing#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does plumbing marketing cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plumbing marketing typically costs between $1,500 and $5,000 per month depending on your market size, competition level, and how many services you want to target. Local SEO for a single-location plumbing company starts around $1,500/month. Multi-location or highly competitive metro areas may require $3,000-$5,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take for plumber SEO to work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most plumbing companies see measurable ranking improvements within 3-4 months and significant call volume increases by 6-8 months. Google Maps and local 3-pack rankings tend to improve faster than organic rankings for competitive keywords. Emergency plumbing keywords often show results sooner because the search intent is so strong and conversion rates are high.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get my plumbing company to show up on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Getting your plumbing company into the Google Maps 3-pack requires optimizing your Google Business Profile with accurate categories and services, building consistent citations across plumbing directories, generating authentic customer reviews, and creating geo-targeted content for each service area. We handle all of this as part of our plumbing local SEO service.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best keywords for plumbers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The highest-value plumbing keywords combine service type with location and urgency. Emergency plumber near me, 24 hour plumber, plumber in [city], water heater repair, drain cleaning, and sewer line repair are consistently high-volume and high-intent. We research the specific keyword landscape in your market to find the best opportunities based on search volume, competition, and commercial value.",
          },
        },
        {
          "@type": "Question",
          name: "How important are reviews for plumbing companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reviews are critical for plumbing companies. They directly influence your Google Maps ranking, your click-through rate in search results, and whether a homeowner calls you or your competitor. Plumbing companies with 50+ reviews and a 4.5+ star rating consistently outrank competitors with fewer reviews. We implement review generation systems that help you collect reviews after every job.",
          },
        },
        {
          "@type": "Question",
          name: "What content should a plumbing website have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A plumbing website needs individual pages for each service you offer (drain cleaning, water heater repair, sewer line replacement, etc.), location pages for each city you serve, an emergency services page optimized for urgent keywords, a blog with helpful plumbing tips, and trust signals like licenses, insurance, and customer testimonials. Each page should target specific keywords your customers search for.",
          },
        },
        {
          "@type": "Question",
          name: "Should plumbers invest in PPC or SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both, but they serve different purposes. PPC (Google Ads) gets you immediate calls -- especially for emergency plumbing keywords where the cost per click is $35 or more. SEO builds long-term visibility so you get free organic calls month after month. Most plumbing companies benefit from running PPC while SEO builds momentum, then gradually shifting budget toward organic as rankings improve.",
          },
        },
        {
          "@type": "Question",
          name: "How do I track phone calls from my plumbing marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We implement call tracking that assigns unique phone numbers to each marketing channel -- Google organic, Google Maps, Google Ads, and your website. This tells you exactly how many calls come from each source, what keywords drove those calls, and your cost per lead. You see a clear dashboard showing which marketing dollars are generating actual plumbing jobs.",
          },
        },
      ],
    },
  ],
};

export default function PlumbingMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="plumbing-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

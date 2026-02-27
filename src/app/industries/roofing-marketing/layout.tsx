import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Roofing Marketing Agency | SEO for Roofing Companies | BKND Development",
  description:
    "Roofing marketing agency specializing in SEO for roofing companies. We help roofers generate qualified leads through Google search, Maps optimization, and storm damage content strategy. Free roofing marketing audit.",
  keywords: [
    "roofing seo",
    "seo for roofing companies",
    "roofing marketing",
    "roofing company marketing",
    "roofing lead generation",
    "roofing digital marketing",
    "seo for roofers",
    "roofing contractor marketing",
    "roofing company seo",
    "roofing internet marketing",
  ],
  alternates: {
    canonical: "/industries/roofing-marketing",
  },
  openGraph: {
    title: "Roofing Marketing Agency | BKND Development",
    description:
      "SEO and digital marketing built for roofing companies. Generate qualified leads through Google search, Maps optimization, and storm damage content strategy.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/industries/roofing-marketing",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Roofing Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Marketing Agency | BKND Development",
    description:
      "SEO and digital marketing built for roofing companies. Generate qualified leads through search and Maps.",
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
        "Roofing marketing agency providing SEO, Google Maps optimization, and digital marketing services to roofing companies nationwide.",
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
      "@id": "https://bknddevelopment.com/industries/roofing-marketing#service",
      name: "Roofing Marketing Services",
      description:
        "Digital marketing and SEO services built specifically for roofing companies including local SEO, Google Maps optimization, storm damage content strategy, and lead generation.",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "Roofing Digital Marketing",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roofing SEO",
              description:
                "Search engine optimization tailored for roofing companies including technical SEO, keyword targeting for roofing services, and authority building in the roofing industry.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Maps Optimization for Roofers",
              description:
                "Google Business Profile optimization, local citation building, and geo-targeted content to rank roofing companies in the local map pack.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Storm Damage Content Strategy",
              description:
                "Seasonal and storm-driven content marketing that captures high-intent roofing leads when homeowners need emergency roof repair and storm damage restoration.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roofing Lead Generation",
              description:
                "Full-funnel lead generation for roofing companies through paid search, organic SEO, review management, and website conversion optimization.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/industries/roofing-marketing#webpage",
      url: "https://bknddevelopment.com/industries/roofing-marketing",
      name: "Roofing Marketing Agency | SEO for Roofing Companies | BKND Development",
      description:
        "Roofing marketing agency specializing in SEO for roofing companies. Generate qualified leads through Google search, Maps optimization, and storm damage content strategy.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/industries/roofing-marketing#service",
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
          name: "Roofing Marketing",
          item: "https://bknddevelopment.com/industries/roofing-marketing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/industries/roofing-marketing#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does roofing marketing cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Roofing marketing costs typically range from $1,500 to $5,000 per month depending on your market competition, number of service areas, and the channels you want to invest in. SEO-focused campaigns start around $1,500/month while comprehensive programs including paid ads and content marketing may require $3,000-$5,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take for roofing SEO to work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most roofing companies see measurable ranking improvements within 3-4 months and significant lead increases by 6-8 months. Local SEO improvements like Google Maps rankings tend to happen faster than organic rankings for competitive terms like 'roofing contractor near me.' Storm damage content can generate traffic almost immediately after a weather event if the pages are already indexed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get my roofing company on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Getting your roofing company into the Google Maps 3-pack requires a fully optimized Google Business Profile, consistent business citations across directories, positive reviews with responses, and geo-targeted content on your website. We handle all of this as part of our roofing local SEO service, including category optimization, service area setup, and ongoing review management.",
          },
        },
        {
          "@type": "Question",
          name: "Should roofing companies invest in storm chasing content?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but strategically. Storm damage content should be built before storm season so pages are already indexed and ranking when homeowners search for emergency roof repair. We create evergreen storm damage service pages plus seasonal content that captures high-intent searches during and after major weather events in your service area.",
          },
        },
        {
          "@type": "Question",
          name: "How important are reviews for roofing companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reviews are critical for roofing companies. 97% of consumers read reviews before hiring a contractor, and roofing is a high-trust purchase. Google also uses review signals as a ranking factor for local search. We help roofing companies build a review generation system, respond to all reviews professionally, and leverage positive reviews in marketing materials.",
          },
        },
        {
          "@type": "Question",
          name: "Is PPC or SEO better for roofing companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both have a role, but SEO delivers better long-term ROI for roofing companies. PPC costs for roofing keywords average $50+ per click, making it expensive to sustain. SEO builds organic visibility that generates leads without per-click costs. Most roofing companies benefit from PPC for immediate leads while SEO builds sustainable traffic. Over 12 months, organic leads typically cost 3x less than paid leads.",
          },
        },
        {
          "@type": "Question",
          name: "How do I track leads from roofing marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We set up call tracking, form submission tracking, and Google Analytics goals so you know exactly where every lead comes from. You get monthly reports showing leads by source (organic search, Google Maps, paid ads, direct), cost per lead by channel, and which keywords are driving the most valuable roofing leads.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with multi-location roofing companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Multi-location roofing companies need a different strategy than single-location roofers. We create location-specific landing pages, manage separate Google Business Profiles for each location, build local citations per service area, and ensure your brand maintains consistency across all markets while targeting location-specific keywords.",
          },
        },
      ],
    },
  ],
};

export default function RoofingMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="roofing-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

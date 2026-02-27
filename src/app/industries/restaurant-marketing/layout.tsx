import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency | SEO for Restaurants | BKND Development",
  description:
    "Restaurant marketing agency that fills tables. SEO for restaurants, Google Maps optimization, menu SEO, review management, and digital marketing strategies that turn hungry searchers into loyal regulars.",
  keywords: [
    "restaurant marketing",
    "restaurant seo",
    "restaurant marketing agency",
    "restaurant digital marketing",
    "seo for restaurants",
    "restaurant local seo",
    "restaurant google maps",
    "restaurant online marketing",
    "restaurant reputation management",
    "restaurant menu seo",
  ],
  alternates: {
    canonical: "/industries/restaurant-marketing",
  },
  openGraph: {
    title: "Restaurant Marketing Agency | BKND Development",
    description:
      "Restaurant marketing agency built by developers. SEO, Google Maps optimization, review management, and digital strategies that fill every table.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/industries/restaurant-marketing",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Restaurant Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing Agency | BKND Development",
    description:
      "Restaurant marketing agency that fills tables. SEO, Google Maps, reviews, and digital strategy for restaurants.",
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
        "Restaurant marketing agency providing SEO, Google Maps optimization, review management, and digital marketing services for restaurants and hospitality businesses.",
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
      "@id": "https://bknddevelopment.com/industries/restaurant-marketing#service",
      name: "Restaurant Marketing Services",
      description:
        "Comprehensive digital marketing services for restaurants including SEO, Google Maps optimization, menu content strategy, and review management.",
      provider: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      serviceType: "Restaurant Marketing",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Restaurant Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Restaurant SEO",
              description:
                "Search engine optimization for restaurants including keyword targeting, technical SEO, and content strategy to rank for high-intent dining searches.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Maps & Local Listings",
              description:
                "Google Business Profile optimization, local citation building, and map pack ranking strategies for restaurants.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Menu & Content Optimization",
              description:
                "Menu page SEO, schema markup for menus, and content strategy that helps diners find your restaurant through search.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Review & Reputation Management",
              description:
                "Monitor and respond to reviews across Google, Yelp, and TripAdvisor. Build a review generation system that drives social proof.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/industries/restaurant-marketing#webpage",
      url: "https://bknddevelopment.com/industries/restaurant-marketing",
      name: "Restaurant Marketing Agency | SEO for Restaurants | BKND Development",
      description:
        "Restaurant marketing agency that fills tables. SEO for restaurants, Google Maps optimization, menu SEO, review management, and digital marketing strategies.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/industries/restaurant-marketing#service",
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
          name: "Restaurant Marketing",
          item: "https://bknddevelopment.com/industries/restaurant-marketing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://bknddevelopment.com/industries/restaurant-marketing#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does restaurant marketing cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Restaurant marketing costs typically range from $1,000 to $4,000 per month depending on your goals, competition, and number of locations. A single-location restaurant focused on local SEO and Google Maps starts around $1,000-$1,500/month, while multi-location restaurants or those in highly competitive markets may need $2,500-$4,000/month. We offer flexible month-to-month agreements because our results speak for themselves.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to see results from restaurant SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most restaurants see measurable improvements in Google Maps visibility within 4-6 weeks and significant organic ranking improvements within 3-4 months. Local SEO for restaurants tends to move faster than other industries because many competitors have poor online presence. Review management and Google Business Profile optimization often produce the fastest visible results.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get my restaurant to show up on Google Maps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Getting your restaurant on Google Maps requires a fully optimized Google Business Profile with accurate hours, complete menu information, high-quality photos, consistent NAP (name, address, phone) across all directories, active review management, and local citations on platforms like Yelp, TripAdvisor, and OpenTable. We handle all of this as part of our restaurant marketing service.",
          },
        },
        {
          "@type": "Question",
          name: "How important are online reviews for restaurants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Online reviews are critical for restaurants. 94% of diners read online reviews before choosing a restaurant, and a one-star increase on Yelp can lead to a 5-9% increase in revenue. We help restaurants build a systematic review generation process, respond to all reviews professionally, and turn negative feedback into opportunities to demonstrate excellent customer service.",
          },
        },
        {
          "@type": "Question",
          name: "What is menu SEO and why does it matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Menu SEO means optimizing your online menu so search engines can read and index your dishes, prices, and descriptions. Many restaurants use PDF menus or embed menus as images, which Google cannot read. We convert menus to crawlable HTML with proper schema markup so your dishes appear in search results when people search for specific cuisines or dishes in your area.",
          },
        },
        {
          "@type": "Question",
          name: "Is social media or SEO more important for restaurants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both matter, but SEO delivers higher-intent traffic. Social media builds brand awareness and keeps you top of mind, but when someone searches 'best Italian restaurant near me' or 'sushi delivery downtown,' they are ready to eat now. SEO captures that high-intent demand. The best restaurant marketing strategy combines both: SEO for capturing ready-to-buy diners and social media for building community and brand loyalty.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle marketing for multi-location restaurants?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multi-location restaurants need location-specific landing pages, individual Google Business Profiles for each location, location-targeted content, and consistent NAP data across all directories for every location. We create a scalable system where each location has its own optimized presence while maintaining brand consistency. This prevents locations from competing against each other in search results.",
          },
        },
        {
          "@type": "Question",
          name: "How do I measure ROI from restaurant marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We track restaurant marketing ROI through multiple metrics: Google Business Profile actions (calls, direction requests, website clicks), online reservation and ordering conversions, organic traffic growth to your website, keyword rankings for high-intent dining searches, and review volume and sentiment trends. Monthly reports tie marketing activity directly to measurable business outcomes like covers served and revenue influenced.",
          },
        },
      ],
    },
  ],
};

export default function RestaurantMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="restaurant-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Technical SEO Services | Developer-Built Optimization | BKND Development',
  description: 'SEO built by developers, for results. Technical SEO, Core Web Vitals optimization, schema markup, and data-driven content strategy. No black hat tactics, just sustainable growth.',
  keywords: [
    'technical SEO',
    'SEO services',
    'Core Web Vitals optimization',
    'schema markup',
    'local SEO',
    'content strategy',
    'link building',
    'Elizabeth NJ SEO',
    'New Jersey SEO agency',
    'developer SEO',
  ],
  alternates: {
    canonical: '/services/seo',
  },
  openGraph: {
    title: 'Technical SEO Services | BKND Development',
    description: 'SEO built by developers, for results. Technical optimization, schema markup, and data-driven strategies for sustainable organic growth.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BKND Development',
    url: 'https://charwinvanryckdegroot.github.io/bknd-website/services/seo',
    images: [
      {
        url: '/images/bknd-logo.png',
        width: 1536,
        height: 1024,
        alt: 'BKND Development SEO Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Services | BKND Development',
    description: 'SEO built by developers, for results. Technical optimization, schema markup, and data-driven strategies.',
    images: ['/images/bknd-logo.png'],
  },
};

// JSON-LD Schema Markup for SEO Services Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Service Schema
    {
      '@type': 'Service',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/services/seo#service',
      name: 'SEO Services',
      description: 'Developer-built SEO services including technical optimization, Core Web Vitals, schema markup, local SEO, content strategy, and white-hat link building.',
      provider: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#organization',
      },
      serviceType: 'Search Engine Optimization',
      areaServed: [
        {
          '@type': 'City',
          name: 'Elizabeth',
          containedInPlace: {
            '@type': 'State',
            name: 'New Jersey',
          },
        },
        {
          '@type': 'State',
          name: 'New Jersey',
        },
        {
          '@type': 'Country',
          name: 'United States',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'SEO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Technical SEO',
              description: 'Site architecture, schema markup, crawlability, indexation, and Core Web Vitals optimization.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'On-Page Optimization',
              description: 'Content structure, meta tags, heading hierarchy, internal linking, and keyword targeting.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local SEO',
              description: 'Google Business Profile optimization, local citations, review management, and geo-targeted content.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Content Strategy',
              description: 'Keyword research, content gap analysis, topic clusters, and editorial calendars.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Link Building',
              description: 'White-hat outreach, digital PR, and authority building through genuine relationships.',
            },
          },
        ],
      },
    },
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/services/seo#webpage',
      url: 'https://charwinvanryckdegroot.github.io/bknd-website/services/seo',
      name: 'Technical SEO Services | Developer-Built Optimization | BKND Development',
      description: 'SEO built by developers, for results. Technical SEO, Core Web Vitals optimization, schema markup, and data-driven content strategy.',
      isPartOf: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#website',
      },
      about: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/services/seo#service',
      },
      datePublished: '2026-01-26',
      dateModified: '2026-01-26',
    },
    // BreadcrumbList Schema
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://charwinvanryckdegroot.github.io/bknd-website/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://charwinvanryckdegroot.github.io/bknd-website/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SEO',
          item: 'https://charwinvanryckdegroot.github.io/bknd-website/services/seo',
        },
      ],
    },
    // FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/services/seo#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to see SEO results?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "SEO is a long-term investment. You'll typically see initial improvements in 3-4 months, with significant results in 6-12 months. Unlike paid ads, these results compound over time and don't disappear when you stop spending.",
          },
        },
        {
          '@type': 'Question',
          name: 'What makes your approach different from other SEO agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We're developers first. We don't just recommend changes—we implement them. Our technical foundation means we can optimize site speed, fix schema markup, and resolve crawl issues directly, without the back-and-forth with your dev team.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you guarantee first page rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No legitimate SEO agency can guarantee specific rankings—Google's algorithm is outside anyone's control. What we guarantee is transparent work, measurable progress, and adherence to best practices that build sustainable organic growth.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do you measure SEO success?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We track what matters to your business: organic traffic growth, keyword rankings, conversion rates, and revenue attribution. Vanity metrics like 'impressions' are secondary to actual business impact.",
          },
        },
      ],
    },
  ],
};

export default function SEOServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="seo-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

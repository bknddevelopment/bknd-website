import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Methodology | How We Implement AI Solutions | BKND Development',
  description: 'Our proven 5-phase AI implementation methodology: Assess, Strategize, Build, Deploy, Optimize. Transform your marketing with AI solutions that deliver measurable ROI.',
  keywords: [
    'AI implementation methodology',
    'AI marketing strategy',
    'AI readiness assessment',
    'AI solution development',
    'AI deployment',
    'AI optimization',
    'AI consulting process',
    'marketing AI implementation',
    'AI-powered marketing',
    'AI agency methodology',
  ],
  alternates: {
    canonical: '/methodology/ai',
  },
  openGraph: {
    title: 'AI Methodology | How We Implement AI Solutions | BKND Development',
    description: 'Our proven 5-phase AI implementation methodology delivers measurable ROI through systematic assessment, strategy, development, deployment, and optimization.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BKND Development',
    url: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai',
    images: [
      {
        url: '/images/bknd-logo-new.png',
        width: 1536,
        height: 1024,
        alt: 'BKND Development AI Methodology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Methodology | BKND Development',
    description: 'Our proven 5-phase AI implementation methodology delivers measurable ROI.',
    images: ['/images/bknd-logo-new.png'],
  },
};

// JSON-LD Schema Markup for AI Methodology Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // HowTo Schema for the Methodology
    {
      '@type': 'HowTo',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#howto',
      name: 'BKND AI Implementation Methodology',
      description: 'Our proven 5-phase approach to implementing AI solutions that deliver measurable business results.',
      totalTime: 'P12W',
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: '10000-100000',
      },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Assess',
          text: 'Comprehensive AI readiness evaluation including technology audit, process analysis, and opportunity identification.',
          url: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#assess',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Strategize',
          text: 'Develop a customized AI implementation roadmap aligned with business objectives and prioritized by ROI potential.',
          url: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#strategize',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Build',
          text: 'Develop AI solutions using agile sprints with continuous stakeholder feedback and iterative improvements.',
          url: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#build',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Deploy',
          text: 'Systematic integration and launch with proper testing, training, and change management support.',
          url: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#deploy',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Optimize',
          text: 'Continuous monitoring, performance analysis, and iterative improvements to maximize ROI over time.',
          url: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#optimize',
        },
      ],
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'Existing marketing data and analytics',
        },
        {
          '@type': 'HowToSupply',
          name: 'Business objectives and KPIs',
        },
        {
          '@type': 'HowToSupply',
          name: 'Current technology stack documentation',
        },
      ],
      tool: [
        {
          '@type': 'HowToTool',
          name: 'AI/ML platforms (OpenAI, Anthropic, Google)',
        },
        {
          '@type': 'HowToTool',
          name: 'Marketing automation tools',
        },
        {
          '@type': 'HowToTool',
          name: 'Analytics and tracking systems',
        },
      ],
    },
    // Service Schema
    {
      '@type': 'Service',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#service',
      name: 'AI Implementation Services',
      description: 'End-to-end AI implementation services following our proven 5-phase methodology: Assess, Strategize, Build, Deploy, Optimize.',
      provider: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#organization',
      },
      serviceType: 'AI Consulting and Implementation',
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
        },
      ],
    },
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#webpage',
      url: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai',
      name: 'AI Methodology | How We Implement AI Solutions | BKND Development',
      description: 'Our proven 5-phase AI implementation methodology delivers measurable ROI through systematic assessment, strategy, development, deployment, and optimization.',
      isPartOf: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#website',
      },
      about: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#howto',
      },
      datePublished: '2026-01-28',
      dateModified: '2026-01-28',
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
          name: 'Methodology',
          item: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'AI',
          item: 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai',
        },
      ],
    },
    // FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/methodology/ai#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does AI implementation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most AI solutions can be deployed in 6-12 weeks. Simple chatbots take 2-4 weeks, while complex custom AI systems with RAG implementations typically require 8-12 weeks. Our phased approach ensures you see value quickly while building toward comprehensive solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What ROI can we expect from AI implementation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-powered workflows deliver 250-300% ROI compared to traditional automation. Our clients typically see 40% efficiency gains, 30% cost reductions, and measurable revenue improvements within 90 days of deployment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do we need technical expertise to work with your AI methodology?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Our methodology is designed to work with businesses at any technical level. We handle all development, integration, and optimization. Your team provides business context and objectives; we handle the technical implementation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you ensure AI solutions align with our brand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'During the Assessment phase, we document your brand voice, guidelines, and communication standards. We then train AI systems on your existing content and build in human review checkpoints. The result is AI that sounds like your brand, not generic automation.',
          },
        },
      ],
    },
  ],
};

export default function AIMethodologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="ai-methodology-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom AI Solutions | RAG, AI Agents & Enterprise AI | BKND Development',
  description: 'Custom AI solutions built for your business. RAG implementations, bespoke AI agents, AI integration services, and industry-specific AI that solves your specific challenges.',
  keywords: [
    'custom AI solutions',
    'RAG implementation',
    'AI agents',
    'enterprise AI',
    'AI integration',
    'custom AI development',
    'AI consulting',
    'knowledge base AI',
    'AI automation',
    'machine learning solutions',
    'AI for business',
    'custom chatbots',
    'AI strategy',
  ],
  openGraph: {
    title: 'Custom AI Solutions | RAG, AI Agents & Enterprise AI | BKND Development',
    description: 'From RAG implementations to bespoke AI agents, we build intelligent systems that solve your specific challenges and drive measurable results.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BKND Development',
    url: 'https://charwinvanryckdegroot.github.io/bknd-website/services/ai/custom',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Solutions | BKND Development',
    description: 'Custom AI built on your data, trained for your use cases, integrated with your systems.',
  },
  alternates: {
    canonical: '/services/ai/custom',
  },
};

// JSON-LD Schema for the Custom AI service page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom AI Solutions',
  description: 'Custom AI solutions built for your business. RAG implementations, bespoke AI agents, AI integration services, and industry-specific AI that solves your specific challenges and drives measurable results.',
  provider: {
    '@type': 'Organization',
    name: 'BKND Development',
    url: 'https://charwinvanryckdegroot.github.io/bknd-website/',
  },
  serviceType: 'Custom AI Development',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom AI Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'RAG Implementations',
          description: 'Knowledge bases that answer questions from your documents. Turn company wikis, manuals, and documentation into intelligent assistants.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '40000-100000',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Agents',
          description: 'Autonomous systems that handle complex workflows. From customer service to data processing, agents that work around the clock.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Integration Services',
          description: 'Connect AI to your existing tech stack. CRMs, ERPs, databases, and APIs working together with intelligent automation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industry-Specific AI',
          description: 'Solutions built for healthcare, legal, finance, and more. AI that understands your domain and compliance requirements.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Strategy & Consulting',
          description: 'Roadmaps for AI adoption and implementation. Identify opportunities, assess feasibility, and plan your AI journey.',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '15000-50000',
          priceCurrency: 'USD',
        },
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes your AI solutions different from off-the-shelf tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Off-the-shelf AI doesn't know your business. We build solutions trained on your data, designed for your workflows, and integrated with your systems. The result is AI that actually understands context and delivers accurate, relevant results.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a custom AI project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple chatbots can be deployed in 4-6 weeks. RAG implementations typically take 8-12 weeks. Enterprise solutions with custom training and integrations can take 4-6 months. We provide detailed timelines after discovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What about data privacy and security?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your data stays yours. We can deploy on your infrastructure, use private cloud instances, and implement enterprise-grade security. For regulated industries, we build compliance into the architecture from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle the ongoing maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI systems need monitoring, updates, and continuous improvement. We offer support packages that include performance monitoring, model updates, and regular optimization based on usage patterns.',
      },
    },
    {
      '@type': 'Question',
      name: "What if we're not sure AI is right for our use case?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "That's exactly what our strategy and consulting services are for. We'll assess your needs, identify the highest-impact opportunities, and give you an honest recommendation on whether AI makes sense for your situation.",
      },
    },
  ],
};

export default function CustomAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}

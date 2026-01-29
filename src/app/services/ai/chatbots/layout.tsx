import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Chatbots & Assistants | 24/7 Lead Capture & Support | BKND Development',
  description: 'AI chatbots that convert visitors into customers. 24/7 intelligent engagement that qualifies leads, answers questions, and books meetings—while you focus on closing deals.',
  keywords: [
    'AI chatbots',
    'chatbot development',
    'conversational AI',
    'lead capture bot',
    'customer service automation',
    'sales qualification bot',
    'AI assistants',
    'chatbot integration',
    'Elizabeth NJ AI development',
    'New Jersey chatbot agency',
  ],
  alternates: {
    canonical: '/services/ai/chatbots',
  },
  openGraph: {
    title: 'AI Chatbots & Assistants | BKND Development',
    description: 'AI chatbots that convert visitors into customers. 24/7 intelligent engagement that qualifies leads, answers questions, and books meetings.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BKND Development',
    url: 'https://bknddevelopment.com/services/ai/chatbots',
    images: [
      {
        url: '/images/bknd-logo-new.png',
        width: 1536,
        height: 1024,
        alt: 'BKND Development AI Chatbot Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbots & Assistants | BKND Development',
    description: 'AI chatbots that convert visitors into customers. 24/7 intelligent engagement that qualifies leads and books meetings.',
    images: ['/images/bknd-logo-new.png'],
  },
};

// JSON-LD Schema Markup for AI Chatbots Services Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Service Schema
    {
      '@type': 'Service',
      '@id': 'https://bknddevelopment.com/services/ai/chatbots#service',
      name: 'AI Chatbot Development Services',
      description: 'Custom AI chatbot development for customer service, sales qualification, lead capture, and multi-channel deployment. 24/7 intelligent engagement that converts visitors into customers.',
      provider: {
        '@id': 'https://bknddevelopment.com/#organization',
      },
      serviceType: 'AI Chatbot Development',
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
        name: 'AI Chatbot Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Customer Service Chatbots',
              description: 'Handle FAQs, troubleshoot issues, and reduce support ticket volume with intelligent automation.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sales Qualification Bots',
              description: 'Qualify leads in real-time, book demos automatically, and capture contact information.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Lead Capture Assistants',
              description: 'Engage visitors with personalized conversations and route hot leads to sales teams.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Multi-Channel Deployment',
              description: 'Deploy chatbots across website, SMS, Facebook Messenger, WhatsApp, and more.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom AI Assistants',
              description: 'AI trained on your data, speaking in your voice, following your processes.',
            },
          },
        ],
      },
    },
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://bknddevelopment.com/services/ai/chatbots#webpage',
      url: 'https://bknddevelopment.com/services/ai/chatbots',
      name: 'AI Chatbots & Assistants | 24/7 Lead Capture & Support | BKND Development',
      description: 'AI chatbots that convert visitors into customers. 24/7 intelligent engagement that qualifies leads, answers questions, and books meetings.',
      isPartOf: {
        '@id': 'https://bknddevelopment.com/#website',
      },
      about: {
        '@id': 'https://bknddevelopment.com/services/ai/chatbots#service',
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
          item: 'https://bknddevelopment.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://bknddevelopment.com/services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'AI',
          item: 'https://bknddevelopment.com/services/ai',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Chatbots',
          item: 'https://bknddevelopment.com/services/ai/chatbots',
        },
      ],
    },
    // FAQPage Schema
    {
      '@type': 'FAQPage',
      '@id': 'https://bknddevelopment.com/services/ai/chatbots#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to build and deploy a chatbot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A basic FAQ chatbot can be deployed in 2-3 weeks. More complex chatbots with integrations, custom training, and multi-channel deployment typically take 4-8 weeks. We prioritize getting value quickly while building toward your full vision.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will the chatbot sound robotic or generic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely not. We train your AI on your actual content, brand voice, and communication style. The result is a chatbot that sounds like an extension of your team, not a generic script reader.',
          },
        },
        {
          '@type': 'Question',
          name: "What happens when the chatbot can't answer a question?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We build intelligent escalation paths. When your chatbot encounters something it can't handle, it seamlessly hands off to a human agent with full conversation context—no repetition required for the customer.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can the chatbot integrate with our existing tools?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We integrate with CRMs (Salesforce, HubSpot), help desks (Zendesk, Intercom), calendars (Calendly, Google), and most platforms with APIs. Your chatbot becomes part of your existing workflow, not a siloed tool.',
          },
        },
      ],
    },
  ],
};

export default function AIChatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="ai-chatbots-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

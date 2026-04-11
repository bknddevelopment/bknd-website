const BASE_URL = "https://bknddevelopment.com";
const ORG_NAME = "BKND Development";
const ORG_LOGO = `${BASE_URL}/images/bknd-logo.png`;

/**
 * Article / BlogPosting schema for blog posts and content pages.
 */
export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  modifiedDate: string;
  author: string;
  image?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.publishDate,
    dateModified: params.modifiedDate,
    author: {
      "@type": "Person",
      name: params.author,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      logo: {
        "@type": "ImageObject",
        url: ORG_LOGO,
      },
    },
    ...(params.image ? { image: params.image } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

/**
 * FAQPage schema for pages with question/answer sections.
 */
export function generateFAQSchema(
  faq: { question: string; answer: string }[],
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * LocalBusiness schema for city/location landing pages.
 */
export function generateLocalBusinessSchema(params: {
  city: string;
  state: string;
  description: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: ORG_NAME,
    description: params.description,
    url: BASE_URL,
    logo: ORG_LOGO,
    address: {
      "@type": "PostalAddress",
      addressLocality: params.city,
      addressRegion: params.state,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: params.city,
    },
  };
}

/**
 * BreadcrumbList schema for page breadcrumb navigation.
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * DefinedTerm schema for glossary/definition pages.
 */
export function generateDefinedTermSchema(params: {
  term: string;
  definition: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: params.term,
    description: params.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${ORG_NAME} Marketing Glossary`,
      url: `${BASE_URL}/glossary`,
    },
  };
}

/**
 * Organization schema for BKND Development — used in root layout.
 */
export function generateOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: BASE_URL,
    logo: ORG_LOGO,
    description: "Web design, SEO, and digital marketing agency",
    sameAs: [
      "https://www.linkedin.com/company/bknd-development",
      "https://twitter.com/bknddevelopment",
      "https://www.instagram.com/bknddevelopment",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${BASE_URL}/contact`,
    },
  };
}

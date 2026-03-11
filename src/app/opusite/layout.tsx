import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Opusite — All-in-One Business Platform | CRM, Projects, E-Sign, Chat",
  description:
    "Replace Salesforce, Jira, DocuSign, and Slack with one platform. Opusite combines CRM, project management, e-signatures, team chat, and invoicing — built by BKND Development.",
  keywords: [
    "all-in-one business platform",
    "crm project management",
    "business operating system",
    "replace salesforce",
    "replace jira",
    "team chat crm invoicing",
    "opusite",
    "saas platform",
  ],
  alternates: {
    canonical: "/opusite",
  },
  openGraph: {
    title: "Opusite — All-in-One Business Platform | CRM, Projects, E-Sign, Chat",
    description:
      "Replace Salesforce, Jira, DocuSign, and Slack with one platform. Opusite combines CRM, project management, e-signatures, team chat, and invoicing.",
    url: "https://bknddevelopment.com/opusite",
  },
  twitter: {
    title: "Opusite — All-in-One Business Platform | CRM, Projects, E-Sign, Chat",
    description:
      "Replace Salesforce, Jira, DocuSign, and Slack with one platform. Opusite combines CRM, project management, e-signatures, team chat, and invoicing.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/opusite#webpage",
      url: "https://bknddevelopment.com/opusite",
      name: "Opusite — All-in-One Business Platform",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Opusite", item: "https://bknddevelopment.com/opusite" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Opusite",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "All-in-one business platform combining CRM, project management, e-signatures, team chat, invoicing, file storage, and analytics.",
      url: "https://opusite.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Contact for pricing",
      },
      creator: {
        "@type": "Organization",
        name: "BKND Development",
        url: "https://bknddevelopment.com",
      },
      featureList: [
        "Team Chat",
        "CRM",
        "Project Management",
        "Workbench",
        "Invoicing",
        "File Storage",
        "Analytics",
        "E-Signatures",
      ],
    },
  ],
};

export default function OpusiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="opusite-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

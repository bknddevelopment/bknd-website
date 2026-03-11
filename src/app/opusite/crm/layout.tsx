import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Opusite CRM — Simple, Powerful CRM for Growing Businesses",
  description:
    "Stop overpaying for CRM. Opusite CRM is built into an all-in-one platform with project management, e-signatures, and team chat. No per-seat fees. No integration headaches.",
  keywords: [
    "crm for small business",
    "simple crm",
    "crm with project management",
    "affordable crm",
    "crm invoicing integration",
    "all-in-one crm",
    "opusite crm",
    "small business crm software",
  ],
  alternates: {
    canonical: "/opusite/crm",
  },
  openGraph: {
    title: "Opusite CRM — Simple, Powerful CRM for Growing Businesses",
    description:
      "Stop overpaying for CRM. Opusite CRM is built into an all-in-one platform with project management, e-signatures, and team chat. No per-seat fees. No integration headaches.",
    url: "https://bknddevelopment.com/opusite/crm",
  },
  twitter: {
    title: "Opusite CRM — Simple, Powerful CRM for Growing Businesses",
    description:
      "Stop overpaying for CRM. Opusite CRM is built into an all-in-one platform with project management, e-signatures, and team chat. No per-seat fees. No integration headaches.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/opusite/crm#webpage",
      url: "https://bknddevelopment.com/opusite/crm",
      name: "Opusite CRM — Simple, Powerful CRM for Growing Businesses",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Opusite", item: "https://bknddevelopment.com/opusite" },
        { "@type": "ListItem", position: 3, name: "CRM", item: "https://bknddevelopment.com/opusite/crm" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Opusite CRM",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Customer Relationship Management",
      operatingSystem: "Web",
      description:
        "Simple, powerful CRM built into the Opusite all-in-one business platform. Contact management, deal pipeline, activity tracking, email integration, reporting, and team collaboration — no per-seat fees, no integration headaches.",
      url: "https://opusite.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Included with Opusite platform — contact for pricing",
      },
      creator: {
        "@type": "Organization",
        name: "BKND Development",
        url: "https://bknddevelopment.com",
      },
      featureList: [
        "Contact Management",
        "Deal Pipeline",
        "Activity Tracking",
        "Email Integration",
        "Reporting & Analytics",
        "Team Collaboration",
        "Project Management Integration",
        "Invoicing Integration",
        "E-Signature Integration",
        "Team Chat Integration",
      ],
    },
  ],
};

export default function OpusiteCrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="opusite-crm-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

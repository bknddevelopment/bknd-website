import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Opusite Project Management — Powerful PM Without the Complexity",
  description:
    "Tired of Jira's complexity? Opusite project management is built into an all-in-one platform with CRM, team chat, and e-signatures. Simple, powerful, affordable.",
  keywords: [
    "project management tool",
    "jira alternative",
    "simple project management software",
    "project management for small business",
    "kanban board software",
    "task management tool",
    "opusite projects",
    "project management with crm",
  ],
  alternates: {
    canonical: "/opusite/project-management",
  },
  openGraph: {
    title: "Opusite Project Management — Powerful PM Without the Complexity",
    description:
      "Tired of Jira's complexity? Opusite project management is built into an all-in-one platform with CRM, team chat, and e-signatures. Simple, powerful, affordable.",
    url: "https://bknddevelopment.com/opusite/project-management",
  },
  twitter: {
    title: "Opusite Project Management — Powerful PM Without the Complexity",
    description:
      "Tired of Jira's complexity? Opusite project management is built into an all-in-one platform with CRM, team chat, and e-signatures. Simple, powerful, affordable.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/opusite/project-management#webpage",
      url: "https://bknddevelopment.com/opusite/project-management",
      name: "Opusite Project Management — Powerful PM Without the Complexity",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Opusite", item: "https://bknddevelopment.com/opusite" },
        { "@type": "ListItem", position: 3, name: "Project Management", item: "https://bknddevelopment.com/opusite/project-management" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Opusite Project Management",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Project Management",
      operatingSystem: "Web",
      description:
        "Simple, powerful project management built into the Opusite all-in-one business platform. Kanban boards, task assignments, time tracking, sprint planning, file attachments, and progress dashboards — no per-seat fees, no steep learning curve.",
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
        "Kanban Boards",
        "Task Assignments",
        "Time Tracking",
        "Sprint Planning",
        "File Attachments",
        "Progress Dashboards",
        "CRM Integration",
        "Team Chat Integration",
        "E-Signature Integration",
        "Invoicing Integration",
      ],
    },
  ],
};

export default function OpusiteProjectManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="opusite-project-management-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

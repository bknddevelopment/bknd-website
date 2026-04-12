import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Opusite E-Signatures — Sign Documents Without the Per-Envelope Fees",
  description:
    "DocuSign charges per envelope. Opusite includes unlimited e-signatures in an all-in-one business platform with CRM, projects, and invoicing. No extra cost.",
  keywords: [
    "e-signature software",
    "docusign alternative free",
    "electronic signature tool",
    "unlimited e-signatures",
    "e-signature crm integration",
    "free electronic signature",
    "opusite e-signatures",
    "document signing software",
  ],
  alternates: {
    canonical: "/opusite/e-signatures",
  },
  openGraph: {
    title: "Opusite E-Signatures — Sign Documents Without the Per-Envelope Fees",
    description:
      "DocuSign charges per envelope. Opusite includes unlimited e-signatures in an all-in-one business platform with CRM, projects, and invoicing. No extra cost.",
    url: "https://bknddevelopment.com/opusite/e-signatures",
  },
  twitter: {
    title: "Opusite E-Signatures — Sign Documents Without the Per-Envelope Fees",
    description:
      "DocuSign charges per envelope. Opusite includes unlimited e-signatures in an all-in-one business platform with CRM, projects, and invoicing. No extra cost.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/opusite/e-signatures#webpage",
      url: "https://bknddevelopment.com/opusite/e-signatures",
      name: "Opusite E-Signatures — Sign Documents Without the Per-Envelope Fees",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Opusite", item: "https://bknddevelopment.com/opusite" },
        { "@type": "ListItem", position: 3, name: "E-Signatures", item: "https://bknddevelopment.com/opusite/e-signatures" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Opusite E-Signatures",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Electronic Signature Software",
      operatingSystem: "Web",
      description:
        "Unlimited e-signatures built into the Opusite all-in-one business platform. Document templates, drag-and-drop signature fields, audit trail, legally binding signatures, multi-signer workflows, and mobile signing — no per-envelope fees.",
      url: "https://opusite.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Included with Opusite platform — no per-envelope fees",
      },
      creator: {
        "@type": "Organization",
        name: "BKND Development",
        url: "https://bknddevelopment.com",
      },
      featureList: [
        "Document Templates",
        "Drag-and-Drop Signature Fields",
        "Full Audit Trail",
        "Legally Binding Signatures",
        "Multi-Signer Workflows",
        "Mobile Signing",
        "CRM Integration",
        "Project Management Integration",
        "Invoicing Integration",
      ],
    },
  ],
};

export default function OpusiteESignaturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="opusite-e-signatures-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

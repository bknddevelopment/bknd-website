import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Opusite Team Chat — Business Messaging Without Per-User Fees",
  description:
    "Slack charges per user. Opusite includes team chat in an all-in-one business platform with CRM, projects, and e-signatures. No message limits. No extra cost.",
  keywords: [
    "slack alternative",
    "team chat software",
    "business messaging app",
    "slack alternative for small business",
    "team communication tool",
    "business chat platform",
    "opusite team chat",
    "free team messaging",
  ],
  alternates: {
    canonical: "/opusite/team-chat",
  },
  openGraph: {
    title: "Opusite Team Chat — Business Messaging Without Per-User Fees",
    description:
      "Slack charges per user. Opusite includes team chat in an all-in-one business platform with CRM, projects, and e-signatures. No message limits. No extra cost.",
    url: "https://bknddevelopment.com/opusite/team-chat",
  },
  twitter: {
    title: "Opusite Team Chat — Business Messaging Without Per-User Fees",
    description:
      "Slack charges per user. Opusite includes team chat in an all-in-one business platform with CRM, projects, and e-signatures. No message limits. No extra cost.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/opusite/team-chat#webpage",
      url: "https://bknddevelopment.com/opusite/team-chat",
      name: "Opusite Team Chat — Business Messaging Without Per-User Fees",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      about: { "@id": "https://bknddevelopment.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bknddevelopment.com/" },
        { "@type": "ListItem", position: 2, name: "Opusite", item: "https://bknddevelopment.com/opusite" },
        { "@type": "ListItem", position: 3, name: "Team Chat", item: "https://bknddevelopment.com/opusite/team-chat" },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Opusite Team Chat",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Team Communication",
      operatingSystem: "Web",
      description:
        "Real-time team messaging built into the Opusite all-in-one business platform. Channels, direct messages, threads, file sharing, search, and notifications — no per-user fees, no message limits.",
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
        "Channels",
        "Direct Messages",
        "Threaded Conversations",
        "File Sharing",
        "Full Message Search",
        "Real-Time Notifications",
        "@Mentions",
        "CRM Integration",
        "Project Management Integration",
        "File Storage Integration",
      ],
    },
  ],
};

export default function OpusiteTeamChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="opusite-team-chat-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

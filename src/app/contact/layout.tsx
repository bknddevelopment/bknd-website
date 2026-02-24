import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | BKND Development",
  description:
    "Get in touch with BKND Development. Call (973) 518-5600, email info@bknddevelopment.com, or visit us at 30 Union St, Elizabeth, NJ 07202.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | BKND Development",
    description:
      "Get in touch with BKND Development. Call (973) 518-5600, email info@bknddevelopment.com, or visit us in Elizabeth, NJ.",
    type: "website",
    url: "https://bknddevelopment.com/contact",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | BKND Development",
    description:
      "Get in touch with BKND Development. Call (973) 518-5600, email info@bknddevelopment.com, or visit us in Elizabeth, NJ.",
    images: ["/images/bknd-logo-new.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://bknddevelopment.com/contact#webpage",
      url: "https://bknddevelopment.com/contact",
      name: "Contact Us | BKND Development",
      description:
        "Get in touch with BKND Development. Call (973) 518-5600, email info@bknddevelopment.com, or visit us at 30 Union St, Elizabeth, NJ 07202.",
      isPartOf: { "@id": "https://bknddevelopment.com/#website" },
      datePublished: "2026-01-26",
      dateModified: "2026-02-23",
    },
    {
      "@type": "Organization",
      "@id": "https://bknddevelopment.com/#organization",
      name: "BKND Development",
      url: "https://bknddevelopment.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-973-518-5600",
        email: "info@bknddevelopment.com",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 Union St, Unit 13",
        addressLocality: "Elizabeth",
        addressRegion: "NJ",
        postalCode: "07202",
        addressCountry: "US",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://bknddevelopment.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "https://bknddevelopment.com/contact",
        },
      ],
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BKND Development | Marketing Built Like Software",
  description:
    "Developer-built campaigns. Data-driven decisions. Revenue you can measure. BKND Development is the marketing agency for measurable results.",
  keywords: [
    "digital marketing agency",
    "developer marketing",
    "growth marketing",
    "paid advertising",
    "SEO",
    "performance marketing",
  ],
  authors: [{ name: "BKND Development" }],
  verification: {
    google: "c9auD4d1EqN--1_vKGCVADAt-HXid2ua0LFJYTd7O70",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://bknddevelopment.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BKND Development | Marketing Built Like Software",
    description:
      "Developer-built campaigns. Data-driven decisions. Revenue you can measure.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/",
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
    title: "BKND Development | Marketing Built Like Software",
    description:
      "Developer-built campaigns. Data-driven decisions. Revenue you can measure.",
    images: ["/images/bknd-logo-new.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Schema Markup
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://bknddevelopment.com/#organization",
      name: "BKND Development",
      url: "https://bknddevelopment.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://bknddevelopment.com/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
      },
      email: "info@bknddevelopment.com",
      telephone: "+19735185600",
      founder: {
        "@type": "Person",
        name: "Charwin Vanryck deGroot",
        jobTitle: "CEO & Founder",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "30 Union St, Unit 13",
        addressLocality: "Elizabeth",
        addressRegion: "NJ",
        postalCode: "07202",
        addressCountry: "US",
      },
      sameAs: ["https://www.linkedin.com/company/bknddevelopment"],
    },
    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://bknddevelopment.com/#website",
      url: "https://bknddevelopment.com/",
      name: "BKND Development",
      description:
        "Marketing Built Like Software - Developer-built campaigns with data-driven decisions.",
      publisher: {
        "@id": "https://bknddevelopment.com/#organization",
      },
    },
    // WebPage Schema
    {
      "@type": "WebPage",
      "@id": "https://bknddevelopment.com/#webpage",
      url: "https://bknddevelopment.com/",
      name: "BKND Development | Marketing Built Like Software",
      description:
        "Developer-built campaigns. Data-driven decisions. Revenue you can measure.",
      isPartOf: {
        "@id": "https://bknddevelopment.com/#website",
      },
      about: {
        "@id": "https://bknddevelopment.com/#organization",
      },
      datePublished: "2026-01-26",
      dateModified: "2026-01-26",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        {/* Global Cinematic Noise Texture */}
        <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.035] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}></div>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G6C4G1SQ44"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G6C4G1SQ44');
          `}
        </Script>
      </body>
    </html>
  );
}

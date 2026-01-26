import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BKND Development | Marketing Built Like Software',
  description: 'Developer-built campaigns. Data-driven decisions. Revenue you can measure. BKND Development is the marketing agency for companies that demand speed, transparency, and measurable results.',
  keywords: ['digital marketing agency', 'developer marketing', 'growth marketing', 'paid advertising', 'SEO', 'performance marketing', 'Elizabeth NJ', 'New Jersey marketing agency'],
  authors: [{ name: 'BKND Development' }],
  icons: {
    icon: '/bknd-website/images/bknd-logo.png',
    apple: '/bknd-website/images/bknd-logo.png',
  },
  metadataBase: new URL('https://charwinvanryckdegroot.github.io/bknd-website'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BKND Development | Marketing Built Like Software',
    description: 'Developer-built campaigns. Data-driven decisions. Revenue you can measure.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BKND Development',
    url: 'https://charwinvanryckdegroot.github.io/bknd-website/',
    images: [
      {
        url: '/images/bknd-logo.png',
        width: 1536,
        height: 1024,
        alt: 'BKND Development Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BKND Development | Marketing Built Like Software',
    description: 'Developer-built campaigns. Data-driven decisions. Revenue you can measure.',
    images: ['/images/bknd-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Schema Markup
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Organization Schema
    {
      '@type': 'Organization',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#organization',
      name: 'BKND Development',
      url: 'https://charwinvanryckdegroot.github.io/bknd-website/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://charwinvanryckdegroot.github.io/bknd-website/images/bknd-logo.png',
        width: 1536,
        height: 1024,
      },
      email: 'info@bknddevelopment.com',
      telephone: '+19735185600',
      founder: {
        '@type': 'Person',
        name: 'Charwin Vanryck deGroot',
        jobTitle: 'CEO & Founder',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '30 Union Street',
        addressLocality: 'Elizabeth',
        addressRegion: 'NJ',
        postalCode: '07208',
        addressCountry: 'US',
      },
      sameAs: [],
    },
    // LocalBusiness Schema
    {
      '@type': 'LocalBusiness',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#localbusiness',
      name: 'BKND Development',
      description: 'Developer-built marketing campaigns with data-driven decisions and measurable revenue results.',
      url: 'https://charwinvanryckdegroot.github.io/bknd-website/',
      logo: 'https://charwinvanryckdegroot.github.io/bknd-website/images/bknd-logo.png',
      image: 'https://charwinvanryckdegroot.github.io/bknd-website/images/bknd-logo.png',
      email: 'info@bknddevelopment.com',
      telephone: '+19735185600',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '30 Union Street',
        addressLocality: 'Elizabeth',
        addressRegion: 'NJ',
        postalCode: '07208',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.6639,
        longitude: -74.2107,
      },
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
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Credit Card, Invoice',
    },
    // WebSite Schema with SearchAction
    {
      '@type': 'WebSite',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#website',
      url: 'https://charwinvanryckdegroot.github.io/bknd-website/',
      name: 'BKND Development',
      description: 'Marketing Built Like Software - Developer-built campaigns with data-driven decisions.',
      publisher: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://charwinvanryckdegroot.github.io/bknd-website/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#webpage',
      url: 'https://charwinvanryckdegroot.github.io/bknd-website/',
      name: 'BKND Development | Marketing Built Like Software',
      description: 'Developer-built campaigns. Data-driven decisions. Revenue you can measure.',
      isPartOf: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#website',
      },
      about: {
        '@id': 'https://charwinvanryckdegroot.github.io/bknd-website/#organization',
      },
      datePublished: '2026-01-26',
      dateModified: '2026-01-26',
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

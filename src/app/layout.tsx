import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BKND Development | Marketing Built Like Software',
  description: 'Developer-built campaigns. Data-driven decisions. Revenue you can measure. BKND Development is the marketing agency for companies that demand speed, transparency, and measurable results.',
  keywords: ['digital marketing agency', 'developer marketing', 'growth marketing', 'paid advertising', 'SEO', 'performance marketing'],
  authors: [{ name: 'BKND Development' }],
  icons: {
    icon: '/images/bknd-logo.png',
    apple: '/images/bknd-logo.png',
  },
  openGraph: {
    title: 'BKND Development | Marketing Built Like Software',
    description: 'Developer-built campaigns. Data-driven decisions. Revenue you can measure.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BKND Development',
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

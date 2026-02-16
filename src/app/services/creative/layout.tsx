import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Performance Creative Services | Ad Creative & Landing Pages | BKND Development",
  description:
    "Data-driven creative services that convert. We design ad creative, landing pages, video ads, and social content engineered for performance. A/B tested, conversion-focused design.",
  keywords: [
    "performance creative",
    "ad creative agency",
    "landing page design",
    "video ads",
    "social media creative",
    "A/B testing",
    "conversion optimization",
    "creative testing",
    "ad design",
    "digital advertising creative",
  ],
  openGraph: {
    title: "Performance Creative Services | BKND Development",
    description:
      "Data-driven creative services that convert. Ad creative, landing pages, and video content engineered for performance.",
    type: "website",
    locale: "en_US",
    siteName: "BKND Development",
    url: "https://bknddevelopment.com/services/creative",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Creative Services | BKND Development",
    description:
      "Data-driven creative services that convert. Ad creative, landing pages, and video content engineered for performance.",
  },
  alternates: {
    canonical: "/services/creative",
  },
};

export default function CreativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

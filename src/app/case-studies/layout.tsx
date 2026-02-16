import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Results | BKND Development",
  description:
    "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth through SEO and digital marketing.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Client Results | BKND Development",
    description:
      "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth.",
    type: "website",
    url: "https://bknddevelopment.com/case-studies",
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
    title: "Client Results | BKND Development",
    description:
      "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

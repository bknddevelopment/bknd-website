import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BKND Development",
  description:
    "BKND Development is a marketing agency built by developers. We combine technical expertise with data-driven strategy to deliver measurable growth for businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | BKND Development",
    description:
      "Marketing agency built by developers. Technical expertise meets data-driven strategy.",
    type: "website",
    url: "https://bknddevelopment.com/about",
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
    title: "About Us | BKND Development",
    description:
      "Marketing agency built by developers. Technical expertise meets data-driven strategy.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

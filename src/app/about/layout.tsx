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
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

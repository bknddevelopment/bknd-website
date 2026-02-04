import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | BKND Development",
  description:
    "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
  openGraph: {
    title: "Insights | BKND Development",
    description:
      "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

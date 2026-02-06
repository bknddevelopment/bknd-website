import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | BKND Development",
  description:
    "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Insights | BKND Development",
    description:
      "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
    type: "website",
    url: "https://bknddevelopment.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

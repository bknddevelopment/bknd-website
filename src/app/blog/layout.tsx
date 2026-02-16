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
    title: "Insights | BKND Development",
    description:
      "Thoughts on data-driven marketing, growth strategy, and building marketing systems that actually work.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

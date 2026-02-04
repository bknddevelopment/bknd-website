import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing Services | BKND Development",
  description:
    "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers. Blog content, case studies, whitepapers, and email sequences.",
  keywords: [
    "content marketing",
    "blog writing",
    "case studies",
    "content strategy",
    "SEO content",
    "thought leadership",
    "content creation agency",
  ],
  openGraph: {
    title: "Content Marketing Services | BKND Development",
    description:
      "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services | BKND Development",
    description:
      "Strategy-first content marketing that builds authority, drives organic traffic, and converts readers into customers.",
  },
};

export default function ContentMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

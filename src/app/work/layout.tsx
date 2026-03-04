import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | BKND Development",
  description:
    "Real businesses. Real results. See what we've built — from 919-page SEO engines to full website launches covering 50+ towns.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work | BKND Development",
    description:
      "Real businesses. Real results. See what we've built.",
    type: "website",
    url: "https://bknddevelopment.com/work",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development Logo",
      },
    ],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

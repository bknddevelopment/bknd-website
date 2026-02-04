import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Results | BKND Development",
  description:
    "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth through SEO and digital marketing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Results | BKND Development",
  description:
    "Real results for real businesses. See how BKND Development has helped companies achieve breakthrough growth through SEO and digital marketing.",
  alternates: {
    canonical: "https://bknddevelopment.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

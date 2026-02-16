import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BKND Development",
  description:
    "Terms and conditions governing your use of BKND Development services. Read our service agreement, payment terms, and legal policies.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | BKND Development",
    description:
      "Terms and conditions governing your use of BKND Development services.",
    type: "website",
    url: "https://bknddevelopment.com/terms",
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
    title: "Terms of Service | BKND Development",
    description:
      "Terms and conditions governing your use of BKND Development services.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

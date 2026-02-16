import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BKND Development",
  description:
    "Learn how BKND Development collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | BKND Development",
    description:
      "Learn how BKND Development collects, uses, and protects your personal information.",
    type: "website",
    url: "https://bknddevelopment.com/privacy",
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
    title: "Privacy Policy | BKND Development",
    description:
      "Learn how BKND Development collects, uses, and protects your personal information.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | BKND Development",
  description:
    "BKND Development is committed to digital accessibility. Learn about our WCAG 2.1 compliance efforts and how to contact us with accessibility concerns.",
  alternates: {
    canonical: "/accessibility",
  },
  openGraph: {
    title: "Accessibility Statement | BKND Development",
    description:
      "BKND Development is committed to digital accessibility. Learn about our WCAG 2.1 compliance efforts.",
    type: "website",
    url: "https://bknddevelopment.com/accessibility",
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
    title: "Accessibility Statement | BKND Development",
    description:
      "BKND Development is committed to digital accessibility. Learn about our WCAG 2.1 compliance efforts.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

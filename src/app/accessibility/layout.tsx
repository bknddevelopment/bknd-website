import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | BKND Development",
  description:
    "BKND Development is committed to digital accessibility. Learn about our WCAG 2.1 compliance efforts and how to contact us with accessibility concerns.",
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

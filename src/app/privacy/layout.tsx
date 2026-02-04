import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BKND Development",
  description:
    "Learn how BKND Development collects, uses, and protects your personal information. Our commitment to your privacy and data security.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

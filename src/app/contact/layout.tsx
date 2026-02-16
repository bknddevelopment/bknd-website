import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BKND Development",
  description:
    "Get in touch with BKND Development. Call (973) 518-5600, email info@bknddevelopment.com, or visit us at 30 Union St, Elizabeth, NJ 07202.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | BKND Development",
    description:
      "Get in touch with BKND Development. Call (973) 518-5600, email info@bknddevelopment.com, or visit us in Elizabeth, NJ.",
    type: "website",
    url: "https://bknddevelopment.com/contact",
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
    title: "Contact Us | BKND Development",
    description:
      "Get in touch with BKND Development. Call (973) 518-5600, email info@bknddevelopment.com, or visit us in Elizabeth, NJ.",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

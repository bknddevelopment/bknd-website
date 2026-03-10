import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    siteName: "BKND Development",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/bknd-logo-new.png",
        width: 1536,
        height: 1024,
        alt: "BKND Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/bknd-logo-new.png"],
  },
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

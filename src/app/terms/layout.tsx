import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | BKND Development',
  description: 'Terms and conditions governing your use of BKND Development services. Read our service agreement, payment terms, and legal policies.',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

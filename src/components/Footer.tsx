'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AnimateOnScroll } from './AnimateOnScroll';

const footerLinks = {
  Services: [
    { label: 'Paid Advertising', href: '/services/paid-advertising' },
    { label: 'SEO Services', href: '/services/seo' },
    { label: 'Content Marketing', href: '/services/content' },
    { label: 'Performance Creative', href: '/services/creative' },
    { label: 'CRO', href: '/services/cro' },
    { label: 'Data & Analytics', href: '/services/analytics' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ],
  Contact: [
    { label: 'info@bknddevelopment.com', href: 'mailto:info@bknddevelopment.com' },
    { label: '(973) 518-5600', href: 'tel:+19735185600' },
    { label: '30 Union St, Unit 13', href: '#' },
    { label: 'Elizabeth, NJ 07202', href: '#' },
  ],
};

// LinkedIn social link
const linkedInLink = {
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/company/bknddevelopment',
  icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F]">
      {/* Main Footer Content */}
      <div className="max-w-[980px] mx-auto px-6 lg:px-4 py-12 lg:py-16">
        {/* Top Section: Logo and Social */}
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-8 border-b border-[#424245]">
            {/* Logo - inverted/white for dark background */}
            <div className="mb-6 md:mb-0">
              <Image
                src="/bknd-website/images/bknd-logo-new.png"
                alt="BKND Development"
                width={210}
                height={60}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>

            {/* Social Icon */}
            <a
              href={linkedInLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86868B] hover:text-[#00D4FF] transition-colors duration-200"
              aria-label={linkedInLink.label}
            >
              {linkedInLink.icon}
            </a>
          </div>
        </AnimateOnScroll>

        {/* Link Columns */}
        <AnimateOnScroll delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 border-b border-[#424245]">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                {/* Column Header - Apple style: white, semibold, small */}
                <h4 className="text-white font-semibold text-xs tracking-wide mb-4">
                  {title}
                </h4>

                {/* Links List */}
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[#86868B] text-xs hover:text-[#00D4FF] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Bottom Bar */}
        <AnimateOnScroll delay={0.2}>
          <div className="pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Copyright */}
              <p className="text-[#86868B] text-[11px]">
                Copyright &copy; {new Date().getFullYear()} BKND Development. All rights reserved.
              </p>

              {/* Legal Links - Apple style: small text with subtle dividers */}
              <div className="flex flex-wrap items-center gap-x-1 text-[11px]">
                {legalLinks.map((link, index) => (
                  <span key={link.label} className="flex items-center">
                    <Link
                      href={link.href}
                      className="text-[#86868B] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                    {index < legalLinks.length - 1 && (
                      <span className="text-[#424245] mx-2">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}

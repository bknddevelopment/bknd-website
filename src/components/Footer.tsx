"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "AI Solutions", href: "/services/ai" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "Content Marketing", href: "/services/content" },
    { label: "Performance Creative", href: "/services/creative" },
    { label: "CRO", href: "/services/cro" },
    { label: "Data & Analytics", href: "/services/analytics" },
    { label: "Paid Advertising", href: "/services/paid-advertising" },
  ],
  Resources: [
    { label: "AI Corner", href: "/ai" },
    { label: "Marketing Hub", href: "/marketing" },
    { label: "SEO Insights", href: "/seo-insights" },
    { label: "Industry News", href: "/industry-news" },
    { label: "All Articles", href: "/blog" },
  ],
  Industries: [
    { label: "All Industries", href: "/industries" },
    { label: "HVAC Marketing", href: "/industries/hvac-marketing" },
    { label: "Dental Marketing", href: "/industries/dental-marketing" },
    { label: "Roofing Marketing", href: "/industries/roofing-marketing" },
    { label: "Plumbing Marketing", href: "/industries/plumbing-marketing" },
    { label: "Restaurant Marketing", href: "/industries/restaurant-marketing" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Contact: [
    {
      label: "info@bknddevelopment.com",
      href: "mailto:info@bknddevelopment.com",
    },
    { label: "(973) 518-5600", href: "tel:+19735185600" },
    { label: "30 Union St, Unit 13", href: "#" },
    { label: "Elizabeth, NJ 07202", href: "#" },
  ],
};

// LinkedIn social link
const linkedInLink = {
  label: "LinkedIn",
  href: "https://www.linkedin.com/company/bknddevelopment",
  icon: (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] relative overflow-hidden">
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #00D4FF 50%, transparent 100%)",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Footer Content */}
      <div className="max-w-[980px] mx-auto px-6 lg:px-4 py-14 lg:py-20 relative">
        {/* Top Section: Logo and Social */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pb-10 border-b border-[#424245]">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <Image
                src="/images/bknd-logo-new.png"
                alt="BKND Development"
                width={210}
                height={60}
                className="h-16 w-auto brightness-0 invert"
              />
            </div>

            {/* Social Icon with glow on hover */}
            <a
              href={linkedInLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#86868B] hover:text-[#00D4FF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]"
              aria-label={linkedInLink.label}
            >
              {linkedInLink.icon}
            </a>
          </div>
        </div>

        {/* Link Columns */}
        <div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-[#424245]">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                {/* Column Header */}
                <h4 className="text-white font-semibold text-xs tracking-wide mb-5">
                  {title}
                </h4>

                {/* Links List */}
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group relative text-[#86868B] text-xs hover:text-[#00D4FF] transition-colors duration-200 inline-block"
                      >
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div>
          <div className="pt-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Copyright */}
              <p className="text-[#86868B] text-[11px]">
                Copyright &copy; {new Date().getFullYear()} BKND Development.
                All rights reserved.
              </p>

              {/* Legal Links */}
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
        </div>
      </div>
    </footer>
  );
}

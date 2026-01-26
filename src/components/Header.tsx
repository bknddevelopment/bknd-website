'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Industries', href: '#industries', hasDropdown: true },
  { label: 'About Us', href: '/about', hasDropdown: false },
  { label: 'Contact', href: '/contact', hasDropdown: false },
];

// Chevron down icon
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// Arrow right icon
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-xl border-b border-black/5 sticky top-0 z-50">
      <div className="container-sg">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/bknd-website/images/bknd-logo-new.png"
              alt="BKND Development"
              width={192}
              height={128}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav - centered items with dropdown chevrons */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#1D1D1F] text-base font-normal hover:text-[#1D1D1F]/60 transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-4 h-4" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Cyan with white text */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-base font-medium bg-[#00D4FF] hover:bg-[#00B8E0] transition-all group shadow-sm"
          >
            Work With Us
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1D1D1F] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-black/5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[#1D1D1F] hover:text-[#1D1D1F]/60 transition-colors py-2 flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4" />
                  )}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-4 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-base font-medium bg-[#00D4FF] hover:bg-[#00B8E0] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work With Us
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

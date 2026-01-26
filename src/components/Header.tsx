'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Industries', href: '#industries', hasDropdown: true },
  { label: 'About Us', href: '#about', hasDropdown: true },
  { label: 'Learn', href: '#learn', hasDropdown: true },
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
    <header className="w-full bg-[#34394D]">
      <div className="container-sg">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/bknd-logo.png"
              alt="BKND Development"
              width={192}
              height={128}
              className="h-16 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
          </Link>

          {/* Desktop Nav - centered items with dropdown chevrons */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white text-base font-normal hover:text-white/80 transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-4 h-4" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - White outlined with arrow */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 border border-white rounded-[5px] text-white text-base font-normal bg-transparent hover:bg-white/10 transition-all group"
          >
            Work With Us
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
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
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-white/80 transition-colors py-2 flex items-center gap-1"
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
                className="mt-4 flex items-center justify-center gap-2 px-5 py-2.5 border border-white rounded-[5px] text-white text-base font-normal bg-transparent hover:bg-white/10 transition-all"
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

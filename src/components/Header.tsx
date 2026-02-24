"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "AI Solutions", href: "/services/ai" },
  { label: "SEO", href: "/services/seo" },
  { label: "Content", href: "/services/content" },
  { label: "Creative", href: "/services/creative" },
  { label: "CRO", href: "/services/cro" },
  { label: "Analytics", href: "/services/analytics" },
  { label: "Paid Advertising", href: "/services/paid-advertising" },
];

const resourceLinks = [
  { label: "AI Corner", href: "/ai" },
  { label: "Marketing Hub", href: "/marketing" },
  { label: "SEO Insights", href: "/seo-insights" },
  { label: "Industry News", href: "/industry-news" },
  { label: "All Articles", href: "/blog" },
];

const navItems = [
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "Resources", href: "/#resources", hasDropdown: true },
  { label: "Industries", href: "/#industries", hasDropdown: true },
  { label: "About Us", href: "/about", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

// Chevron down icon
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

// Arrow right icon
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -4,
    transition: { duration: 0.15, ease: [0.4, 0, 1, 1] as const },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.2, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const getDropdownLinks = (label: string) => {
    if (label === "Services") return serviceLinks;
    if (label === "Resources") return resourceLinks;
    return null;
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 pt-4 px-6 ${scrolled
          ? "transform translate-y-0"
          : "transform translate-y-2"
        }`}
    >
      <div className="container-sg">
        <div className={`flex items-center justify-between h-[70px] px-8 rounded-full border transition-all duration-500 ${scrolled ? 'bg-[#050A14]/70 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_15px_rgba(0,212,255,0.05)]' : 'bg-[#050A14]/40 backdrop-blur-xl border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-white text-xl font-bold tracking-tight group-hover:text-[#00D4FF] transition-colors duration-500">BKND.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="text-white/80 text-[14px] font-medium tracking-wide hover:text-white transition-colors duration-300 flex items-center gap-1.5"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180 text-[#00D4FF]" : "text-white/40"
                        }`}
                    />
                  )}
                </Link>
                {/* Animated Dropdown */}
                {item.hasDropdown && getDropdownLinks(item.label) && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 pt-2"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        <div className="bg-[#050A14]/90 backdrop-blur-2xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/10 py-3 min-w-[220px] overflow-hidden relative">
                          {/* Inner glow */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#00D4FF]/20 blur-md rounded-full" />
                          {getDropdownLinks(item.label)!.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block px-5 py-2.5 text-[14px] text-white/70 hover:bg-white/5 hover:text-[#00D4FF] hover:translate-x-1 transition-all duration-300"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Magnetic CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[#050A14] text-[14px] font-semibold bg-white hover:bg-[#00D4FF] transition-all duration-500 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Work With Us
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:text-[#00D4FF] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-black/5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#1D1D1F] hover:text-[#1D1D1F]/60 transition-colors py-2 flex items-center gap-1"
                      onClick={() =>
                        item.label !== "Services" &&
                        item.label !== "Resources" &&
                        setMobileMenuOpen(false)
                      }
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                    </Link>
                    {/* Mobile Services Sub-menu */}
                    {item.label === "Services" && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#00D4FF]/30">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block text-sm text-[#86868B] hover:text-[#00D4FF] transition-colors py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    {/* Mobile Resources Sub-menu */}
                    {item.label === "Resources" && (
                      <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#00D4FF]/30">
                        {resourceLinks.map((resource) => (
                          <Link
                            key={resource.label}
                            href={resource.href}
                            className="block text-sm text-[#86868B] hover:text-[#00D4FF] transition-colors py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {resource.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-base font-medium bg-[#00D4FF] hover:bg-[#00B8E0] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Work With Us
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

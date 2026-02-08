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
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-2xl border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_0_8px_rgba(0,212,255,0.03)]"
          : "bg-white/80 backdrop-blur-xl border-b border-black/5"
      }`}
    >
      <div className="container-sg">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/bknd-logo-new.png"
              alt="BKND Development"
              width={288}
              height={192}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
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
                  className="text-[#1D1D1F] text-[15px] font-normal hover:text-[#1D1D1F]/60 transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDownIcon
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
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
                        <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-black/5 py-2 min-w-[200px]">
                          {getDropdownLinks(item.label)!.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block px-4 py-2.5 text-sm text-[#1D1D1F] hover:bg-[#F5F5F7] hover:text-[#00D4FF] transition-colors"
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

          {/* CTA Button with glow on hover */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-[15px] font-medium bg-[#00D4FF] hover:bg-[#00B8E0] transition-all group shadow-sm hover:shadow-[0_4px_15px_rgba(0,212,255,0.35)]"
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

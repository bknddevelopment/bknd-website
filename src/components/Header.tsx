"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const buildLinks = [
  { label: "Overview", href: "/#pillars" },
  { label: "Websites", href: "/build/websites" },
  { label: "Marketing", href: "/build/marketing" },
  { label: "Platforms", href: "/build/platforms" },
  { label: "Opusite", href: "/opusite" },
];

const resourceLinks = [
  { label: "All Resources", href: "/blog" },
  { label: "AI Corner", href: "/ai" },
  { label: "Marketing Hub", href: "/marketing" },
  { label: "SEO Insights", href: "/seo-insights" },
  { label: "Industry News", href: "/industry-news" },
];

const industryLinks = [
  { label: "All Industries", href: "/industries" },
  { label: "HVAC Marketing", href: "/industries/hvac-marketing" },
  { label: "Dental Marketing", href: "/industries/dental-marketing" },
  { label: "Roofing Marketing", href: "/industries/roofing-marketing" },
  { label: "Plumbing Marketing", href: "/industries/plumbing-marketing" },
  { label: "Restaurant Marketing", href: "/industries/restaurant-marketing" },
];

const navItems = [
  { label: "Build", href: "/#pillars", hasDropdown: true },
  { label: "Work", href: "/case-studies", hasDropdown: false },
  { label: "Resources", href: "/blog", hasDropdown: true },
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "About", href: "/about", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
  {
    label: "Client Portal",
    href: "https://www.opusite.com/request/bknd-development/bknd-development-website-update-ijitr",
    hasDropdown: false,
    external: true,
  },
];

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
    scale: 0.96,
    y: -6,
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
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileMenuOpen(false);
      setOpenDropdown(null);
      setOpenMobileGroup(null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setOpenMobileGroup(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  const getDropdownLinks = (label: string) => {
    if (label === "Build") return buildLinks;
    if (label === "Resources") return resourceLinks;
    if (label === "Industries") return industryLinks;
    return null;
  };

  return (
    <>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-[#02050b]/72 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 z-50 w-full px-4 pt-3 sm:px-5 lg:px-6 transition-all duration-500 ${
          scrolled ? "translate-y-0" : "translate-y-1"
        }`}
      >
        <div className="container-sg">
          <div
            className={`relative flex items-center justify-between rounded-[26px] border px-4 py-3 sm:px-5 lg:rounded-full lg:px-8 ${
              scrolled
                ? "bg-[#050A14]/78 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_18px_rgba(0,212,255,0.06)] backdrop-blur-2xl"
                : "bg-[#050A14]/52 border-white/6 shadow-[0_4px_22px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            }`}
          >
            <Link
              href="/"
              className="flex items-center group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-lg font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-[#00D4FF] sm:text-xl">
                BKND.
              </span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[14px] font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 text-[14px] font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDownIcon
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            openDropdown === item.label
                              ? "rotate-180 text-[#00D4FF]"
                              : "text-white/40"
                          }`}
                        />
                      )}
                    </Link>
                  )}

                  {item.hasDropdown && getDropdownLinks(item.label) && (
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          className="absolute left-0 top-full pt-3"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={dropdownVariants}
                        >
                          <div className="relative min-w-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#050A14]/92 py-3 shadow-[0_12px_36px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                            <div className="absolute left-1/2 top-0 h-1 w-1/2 -translate-x-1/2 rounded-full bg-[#00D4FF]/20 blur-md" />
                            {getDropdownLinks(item.label)!.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="block px-5 py-2.5 text-[14px] text-white/72 transition-all duration-300 hover:translate-x-1 hover:bg-white/5 hover:text-[#00D4FF]"
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

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="group hidden items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-[14px] font-semibold text-[#050A14] transition-all duration-500 hover:bg-[#00D4FF] lg:flex"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Work With Us
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </Link>

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white transition-colors hover:text-[#00D4FF] lg:hidden"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
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
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="relative z-50 mt-3 overflow-hidden rounded-[28px] border border-white/10 bg-[#050A14]/95 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:hidden"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <nav className="max-h-[calc(100vh-7.5rem)] overflow-y-auto pr-1">
                  <div className="space-y-2">
                    {navItems.map((item) => {
                      const links = item.hasDropdown
                        ? getDropdownLinks(item.label)
                        : null;
                      const isOpen = openMobileGroup === item.label;

                      if (item.external) {
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between rounded-2xl border border-white/6 px-4 py-3 text-[15px] font-medium text-white/88 transition-colors hover:border-white/10 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                            <ArrowRightIcon className="h-4 w-4 text-white/40" />
                          </a>
                        );
                      }

                      if (!links) {
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between rounded-2xl border border-white/6 px-4 py-3 text-[15px] font-medium text-white/88 transition-colors hover:border-white/10 hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                            <ArrowRightIcon className="h-4 w-4 text-white/40" />
                          </Link>
                        );
                      }

                      return (
                        <div
                          key={item.label}
                          className="rounded-[24px] border border-white/6 bg-white/[0.02] px-3 py-2"
                        >
                          <button
                            type="button"
                            className="flex w-full items-center justify-between px-1 py-2 text-left text-[15px] font-medium text-white"
                            onClick={() =>
                              setOpenMobileGroup((value) =>
                                value === item.label ? null : item.label,
                              )
                            }
                            aria-expanded={isOpen}
                          >
                            <span>{item.label}</span>
                            <ChevronDownIcon
                              className={`h-4 w-4 text-white/50 transition-transform duration-300 ${
                                isOpen ? "rotate-180 text-[#00D4FF]" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.18 }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-1 pb-2 pt-2">
                                  {links.map((link) => (
                                    <Link
                                      key={link.label}
                                      href={link.href}
                                      className="block rounded-2xl px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[#00D4FF]"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {link.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#00D4FF] px-5 py-3 text-base font-semibold text-[#04101d] transition-colors hover:bg-[#00b8e0]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Work With Us
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { OpusiteFormTrigger } from "@/components/OpusiteFormPopup";

export function StickyCtaBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed && pathname !== "/contact") {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, pathname]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.8,
          }}
          className="fixed bottom-3 left-3 right-3 z-40 rounded-2xl border border-white/20 bg-[#ffffffeb] shadow-[0_16px_48px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:bottom-auto md:left-0 md:right-0 md:top-20 md:rounded-none md:border-x-0 md:border-b md:border-t-0 md:border-neutral-200/40"
          style={{
            boxShadow:
              "0 12px 34px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.04)",
          }}
        >
          <div className="container-sg">
            <div className="flex items-center justify-between gap-3 py-3">
              {/* Logo/Brand */}
              <div className="hidden items-center sm:flex">
                <Image
                  src="/images/bknd-logo-new.png"
                  alt="BKND Development"
                  width={120}
                  height={39}
                  className="h-10 w-auto"
                />
              </div>

              {/* Value Prop + CTA */}
              <div className="flex min-w-0 flex-1 items-center justify-end gap-3 sm:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-neutral-900">
                    Start your next build
                  </p>
                  <p className="hidden text-sm text-neutral-500 md:block">
                    Websites, marketing systems, and custom software.
                  </p>
                </div>
                <OpusiteFormTrigger
                  className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-[#00D4FF] px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#00D4FF]/90 hover:shadow-md md:px-5 cursor-pointer"
                  style={{
                    boxShadow: "0 0 16px rgba(0, 212, 255, 0.3)",
                    animation: "stickyCtaPulse 3s ease-in-out infinite",
                  }}
                >
                  Get Started
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </OpusiteFormTrigger>

                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="rounded-full p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
                  aria-label="Dismiss"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyCtaBar;

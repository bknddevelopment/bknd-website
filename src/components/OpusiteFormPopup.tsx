"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORM_URL =
  "https://www.opusite.com/portal/bknd-development/form?f=web-development-agency-intake-form";

interface OpusiteFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OpusiteFormPopup({
  isOpen,
  onClose,
}: OpusiteFormPopupProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              duration: 0.4,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[calc(100%-2rem)] max-w-[500px]"
          >
            <div
              className="relative bg-white rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] transition-colors duration-200"
                aria-label="Close form"
              >
                <svg
                  className="w-4 h-4 text-[#86868B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Iframe */}
              <iframe
                src={FORM_URL}
                title="BKND Development Contact Form"
                className="w-full border-0"
                style={{ height: "650px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * Convenience trigger that wraps children in a button and manages popup state.
 *
 * Usage:
 *   <OpusiteFormTrigger className="...">Get Started</OpusiteFormTrigger>
 */
export function OpusiteFormTrigger({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>
      <OpusiteFormPopup isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

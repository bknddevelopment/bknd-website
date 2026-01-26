'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Only run on desktop (mouse-based devices)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from the top of the viewport
      if (e.clientY < 10 && !sessionStorage.getItem('exitModalShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitModalShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Close modal after success message
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg mx-4"
          >
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F27038]/20 via-[#EFB438]/20 to-[#F27038]/20 rounded-2xl blur-xl -z-10" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-[#E9EFF4]/60 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {!isSubmitted ? (
                <>
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/bknd-logo.png"
                      alt="BKND Logo"
                      width={160}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F27038]/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#F27038]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  {/* Headline */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-3">
                    Wait! Get Your{' '}
                    <span className="text-gradient">Free Growth Audit</span>
                  </h2>

                  {/* Subheadline */}
                  <p className="text-[#E9EFF4]/70 text-center mb-6">
                    Discover untapped opportunities to scale your business. Our experts will analyze your marketing and provide actionable insights.
                  </p>

                  {/* Value props */}
                  <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-[#E9EFF4]/60">
                      <span className="text-[#F27038]">✓</span>
                      <span>100% Free</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#E9EFF4]/60">
                      <span className="text-[#F27038]">✓</span>
                      <span>No Commitment</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#E9EFF4]/60">
                      <span className="text-[#F27038]">✓</span>
                      <span>Delivered in 48h</span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your work email"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-[#E9EFF4]/30 focus:outline-none focus:border-[#F27038]/50 transition-colors"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <>
                          Get My Free Audit
                          <span className="btn-arrow">↗</span>
                        </>
                      )}
                    </button>
                  </form>

                  <p className="text-center text-[#E9EFF4]/40 text-xs mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    You&apos;re All Set!
                  </h3>
                  <p className="text-[#E9EFF4]/70">
                    Check your inbox for your free growth audit details.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

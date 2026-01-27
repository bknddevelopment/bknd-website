// TODO: Replace YOUR_FORM_ID with actual Formspree form ID
'use client';

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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
    setSubmitError(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'Free Growth Audit Request - BKND Development',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Close modal after success message
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Apple-style lower opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[100]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            onClick={handleClose}
          />

          {/* Modal - Apple-style clean white */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              duration: 0.4,
              ease: [0.32, 0.72, 0, 1]
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-[480px] mx-4"
          >
            <div
              className="relative bg-white rounded-[24px] p-10 md:p-12"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Close button - subtle gray */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F7] hover:bg-[#E8E8ED] transition-colors duration-200"
                aria-label="Close modal"
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

              {!isSubmitted ? (
                <>
                  {/* Logo */}
                  <div className="flex justify-center mb-8">
                    <Image
                      src="/bknd-website/images/bknd-logo-new.png"
                      alt="BKND Logo"
                      width={210}
                      height={63}
                      className="h-16 w-auto"
                    />
                  </div>

                  {/* Headline - Apple style black */}
                  <h2
                    className="text-[28px] md:text-[32px] font-semibold text-center mb-3 leading-tight tracking-tight"
                    style={{ color: '#1D1D1F' }}
                  >
                    Get Your Free Growth Audit
                  </h2>

                  {/* Subheadline - Apple gray */}
                  <p
                    className="text-center mb-8 text-[17px] leading-relaxed"
                    style={{ color: '#86868B' }}
                  >
                    Discover untapped opportunities to scale your business with actionable insights from our experts.
                  </p>

                  {/* Value props - clean Apple style */}
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
                    {['100% Free', 'No Commitment', 'Delivered in 48h'].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[15px]"
                        style={{ color: '#86868B' }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#00D4FF"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your work email"
                        className="w-full rounded-xl px-4 py-4 text-[17px] transition-all duration-200 outline-none disabled:opacity-50"
                        style={{
                          backgroundColor: '#F5F5F7',
                          border: '1px solid transparent',
                          color: '#1D1D1F',
                        }}
                        onFocus={(e) => {
                          e.target.style.backgroundColor = '#FFFFFF';
                          e.target.style.border = '1px solid #00D4FF';
                          e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.backgroundColor = '#F5F5F7';
                          e.target.style.border = '1px solid transparent';
                          e.target.style.boxShadow = 'none';
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {submitError && (
                      <p
                        className="text-center text-[13px]"
                        style={{ color: '#EF4444' }}
                      >
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl px-6 py-4 text-[17px] font-semibold text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: '#00D4FF',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor = '#00BFEA';
                          e.currentTarget.style.transform = 'scale(1.01)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#00D4FF';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {isSubmitting ? (
                        <>
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
                          <span>Submitting...</span>
                        </>
                      ) : (
                        'Get My Free Audit'
                      )}
                    </button>
                  </form>

                  <p
                    className="text-center text-[13px] mt-5"
                    style={{ color: '#86868B' }}
                  >
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                /* Success State - Apple style */
                <div className="text-center py-4">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#00D4FF"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-[24px] font-semibold mb-2"
                    style={{ color: '#1D1D1F' }}
                  >
                    You&apos;re All Set!
                  </h3>
                  <p
                    className="text-[17px]"
                    style={{ color: '#86868B' }}
                  >
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

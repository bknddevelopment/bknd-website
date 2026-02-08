// TODO: Replace YOUR_FORM_ID with actual Formspree form ID
"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import NetworkBackground from "./NetworkBackground";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New Lead from Hero Section - BKND Development",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0 bg-[#0a1628]">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0a1628]/40 to-[#0a1628]/30" />
      </div>
      <div className="relative z-10 max-w-[1148px] mx-auto px-6 lg:px-20">
        {/* Two-column asymmetric layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start pt-8 lg:pt-16">
          {/* Left Column - 60% */}
          <div>
            {/* Urgency Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
              </span>
              <span className="text-white text-sm font-medium">
                Limited slots available
              </span>
              <span className="text-white/60 mx-1">|</span>
              <a
                href="#contact"
                className="text-white/60 hover:text-white text-sm transition-colors underline underline-offset-2"
              >
                Check capacity
              </a>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              className="text-[36px] sm:text-[44px] lg:text-[60px] font-semibold text-white mb-6 leading-[1.05] tracking-[-0.03em]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
              style={{
                fontFamily:
                  "SF Pro Display, -apple-system, BlinkMacSystemFont, Inter, sans-serif",
              }}
            >
              We are the{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #00D4FF 0%, #0088CC 50%, #00D4FF 100%)",
                  backgroundSize: "200% 200%",
                }}
              >
                marketing + AI
              </span>{" "}
              partner that companies never outgrow.
            </motion.h1>

            {/* Stats Line */}
            <motion.p
              className="text-[#00D4FF] text-base font-medium mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <span className="underline decoration-[#00D4FF] decoration-1 underline-offset-4">
                ROI-focused approach
              </span>
              <span className="mx-3 text-white/50">&mdash;</span>
              <span className="text-white">Results that compound</span>
            </motion.p>

            {/* Subheadline */}
            <motion.p
              className="text-white/70 text-[17px] leading-[1.65] mb-10 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                fontFamily:
                  "SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif",
              }}
            >
              Developer-built campaigns. AI-powered optimization. Revenue you
              can measure. We deliver marketing that actually works.
            </motion.p>

            {/* Email Form - Side by Side */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 bg-white/8 backdrop-blur-md text-white text-[15px] px-5 py-4 h-[52px] border border-white/15 rounded-xl placeholder:text-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] focus:bg-white/12 transition-all disabled:opacity-50"
                style={{
                  fontFamily:
                    "SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif",
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00D4FF] hover:bg-[#00B8E0] text-white text-[15px] font-medium px-7 py-4 h-[52px] rounded-xl inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-sm hover:shadow-[0_4px_20px_rgba(0,212,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily:
                    "SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif",
                }}
              >
                {isSubmitting ? "Sending..." : "Work With Us"}
                {!isSubmitting && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M1 13L13 1M13 1H3M13 1V11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </motion.form>

            {/* Form Status Messages */}
            {submitStatus === "success" && (
              <motion.p
                className="text-green-400 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thanks! We&apos;ll be in touch soon.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                className="text-red-400 text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Something went wrong. Please try again.
              </motion.p>
            )}

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 text-sm">
              {["ROI-focused", "AI-powered", "Developer-built"].map(
                (badge, i) => (
                  <motion.span
                    key={i}
                    className="flex items-center gap-2 text-white"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="9"
                        fill="#00D4FF"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M13 6L7.5 11.5L5 9"
                        stroke="#00D4FF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {badge}
                  </motion.span>
                ),
              )}
            </div>
          </div>

          {/* Right Column - 40% - Floating Cards */}
          <div className="hidden lg:block relative">
            {/* Quote Card - Glassmorphism with float animation */}
            <motion.div
              className="relative mb-[-60px] z-10 rounded-2xl p-6"
              initial={{ opacity: 0, x: 40, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 60,
                damping: 16,
              }}
              style={{
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)",
                animation: "floatCard1 6s ease-in-out infinite",
              }}
            >
              {/* Cyan Quote Marks */}
              <svg
                className="absolute top-4 left-4 w-8 h-8 text-[#00D4FF] opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p
                className="text-[#1D1D1F] text-[15px] leading-relaxed pt-8 pr-4"
                style={{
                  fontFamily:
                    "SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif",
                }}
              >
                &quot;We build marketing systems the way we build software—with
                clean architecture, measurable outcomes, and zero
                guesswork.&quot;
              </p>
              <p className="text-[#86868B] text-sm mt-4">
                — Charwin Vanryck deGroot, Founder &amp; CEO
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

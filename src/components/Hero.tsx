"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OPUSITE_WEBHOOK =
  "https://www.opusite.com/api/forms/webhook/cd52152b-ae9c-4171-a67f-a3d62e32e268";

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
      const response = await fetch(OPUSITE_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: "",
          consent: true,
          fields: {
            subject: "New Lead from Hero Section - BKND Development",
            message: "",
          },
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
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Premium Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-[#050A14] overflow-hidden">
        {/* Hero Image - Right Side */}
        <div className="absolute inset-0 lg:left-[30%]">
          <Image
            src="/images/hero/hero-bg.webp"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-40 lg:opacity-50"
            sizes="100vw"
          />
          {/* Gradient masks for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-[#050A14]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050A14] pointer-events-none" />
        </div>
        {/* Deep mesh glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-[#00D4FF]/10 blur-[130px] rounded-full mix-blend-screen animate-mesh-float" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[#8A2BE2]/10 blur-[160px] rounded-full mix-blend-screen animate-mesh-float" style={{ animationDelay: "4s", animationDuration: "25s" }} />
        <div className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] bg-[#0088CC]/10 blur-[100px] rounded-full mix-blend-screen animate-mesh-float" style={{ animationDelay: "8s", animationDuration: "18s" }} />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050A14]/50 to-[#050A14] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-[1100px]">
          {/* Subtle Tagline */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
            </span>
            <span className="text-[#00D4FF] text-sm md:text-base font-medium tracking-widest uppercase">
              The Engine Behind Market Leaders
            </span>
          </motion.div>

          {/* Epic Typography Block */}
          <motion.h1
            className="text-white font-bold leading-[0.95] tracking-tight mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}
          >
            Marketing built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
              like software.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <div className="mb-16">
            <motion.p
              className="text-[#86868B] text-xl md:text-2xl leading-[1.4] max-w-[600px] font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              We engineer revenue systems with clean architecture, measurable outcomes, and <span className="text-white">zero guesswork</span>.
            </motion.p>
          </div>

          {/* Form & Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 to-[#8A2BE2]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="relative w-full bg-[#050A14]/80 backdrop-blur-xl text-white text-[16px] px-6 py-4 h-[60px] border border-white/10 rounded-xl placeholder:text-white/30 focus:outline-none focus:border-[#00D4FF]/50 transition-all shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)]"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative h-[60px] px-8 rounded-xl bg-white text-[#050A14] font-semibold text-[16px] overflow-hidden group hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-500 disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0088CC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500">
                  {isSubmitting ? "Initiating..." : "Start Scaling"}
                  {!isSubmitting && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-500 group-hover:translate-x-1">
                      <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Form Status Messages */}
          <div className="mt-4 min-h-[24px]">
            {submitStatus === "success" && (
              <motion.p className="text-[#00D4FF] text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                System request received. We&apos;ll be in touch.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p className="text-red-400 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Failed to initialize connection. Please try again.
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

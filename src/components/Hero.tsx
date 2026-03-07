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
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-[calc(var(--header-offset)+2rem)] md:pb-20">
      {/* Premium Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-[#050A14] overflow-hidden">
        {/* Hero Image - Right Side */}
        <div className="absolute inset-0 md:left-[18%] lg:left-[32%]">
          <Image
            src="/images/hero/hero-bg.webp"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-30 md:opacity-40 lg:opacity-50"
            sizes="100vw"
          />
          {/* Gradient masks for seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-[#050A14]/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050A14] pointer-events-none" />
        </div>
        {/* Deep mesh glows */}
        <div className="absolute left-[-20%] top-[-6%] h-[72vw] w-[72vw] max-h-[520px] max-w-[520px] rounded-full bg-[#00D4FF]/10 blur-[100px] mix-blend-screen animate-mesh-float" />
        <div
          className="absolute bottom-[-18%] right-[-12%] h-[78vw] w-[78vw] max-h-[580px] max-w-[580px] rounded-full bg-[#8A2BE2]/10 blur-[120px] mix-blend-screen animate-mesh-float"
          style={{ animationDelay: "4s", animationDuration: "25s" }}
        />
        <div
          className="absolute right-[10%] top-[34%] hidden h-[40vw] w-[40vw] max-h-[360px] max-w-[360px] rounded-full bg-[#0088CC]/10 blur-[100px] mix-blend-screen md:block animate-mesh-float"
          style={{ animationDelay: "8s", animationDuration: "18s" }}
        />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('/noise.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050A14]/50 to-[#050A14] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full">
        <div className="container-sg">
          <div className="max-w-[760px] lg:max-w-[860px]">
          {/* Subtle Tagline */}
          <motion.div
            className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4FF]"></span>
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.24em] text-[#00D4FF] md:text-base">
              Websites. Marketing. Platforms.
            </span>
          </motion.div>

          {/* Epic Typography Block */}
          <motion.h1
            className="mb-6 text-white font-bold leading-[0.95] tracking-tight sm:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: "clamp(2.8rem, 10vw, 6.875rem)" }}
          >
            We build through <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
              software.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <div className="mb-10 sm:mb-14 md:mb-16">
            <motion.p
              className="max-w-[620px] text-lg font-light leading-[1.5] text-[#86868B] sm:text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Websites. Marketing. Platforms. Everything we create is built in code and powered by <span className="text-white">AI</span>.
            </motion.p>
          </div>

          {/* Form & Actions */}
          <motion.div
            className="max-w-[640px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
            >
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
                  className="relative h-[58px] w-full rounded-xl border border-white/10 bg-[#050A14]/80 px-5 py-4 text-[16px] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.02)] backdrop-blur-xl transition-all placeholder:text-white/30 focus:border-[#00D4FF]/50 focus:outline-none sm:h-[60px] sm:px-6"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative h-[58px] w-full overflow-hidden rounded-xl bg-white px-6 text-[16px] font-semibold text-[#050A14] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] disabled:opacity-50 sm:h-[60px] sm:w-auto sm:px-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0088CC] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-500">
                  {isSubmitting ? "Initiating..." : "See What We Build"}
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
      </div>
    </section>
  );
}

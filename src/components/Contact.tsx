"use client";

import { useState, FormEvent } from "react";

const OPUSITE_WEBHOOK =
  "https://www.opusite.com/api/forms/webhook/cd52152b-ae9c-4171-a67f-a3d62e32e268";

export default function Contact() {
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
            subject: "New Contact Request - BKND Development",
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
    <section id="contact" className="relative">
      {/* Full-width dark background with gradient mesh */}
      <div className="relative overflow-hidden bg-[#1D1D1F] py-20 lg:py-28">
        {/* Gradient mesh background effects */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[88vw] max-h-[600px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.05) 0%, transparent 70%)",
          }}
        />
        {/* Floating decorative orbs */}
        <div
          className="pointer-events-none absolute left-[8%] top-16 hidden h-[260px] w-[260px] rounded-full md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-12 right-[4%] hidden h-[320px] w-[320px] rounded-full md:block"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 70%)",
          }}
        />

        <div className="container-sg relative">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              {/* Overline */}
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                Get Started
              </p>

              {/* Main headline */}
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Let&apos;s build something
                <br />
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #00D4FF, #06B6D4, #00D4FF)",
                    backgroundSize: "200% 100%",
                    animation: "gradientShift 4s ease infinite",
                  }}
                >
                  extraordinary.
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mx-auto mb-10 max-w-xl text-lg font-normal text-gray-400 sm:text-xl lg:mb-12 lg:text-2xl">
                Share your vision with us and discover what&apos;s possible.
              </p>
            </div>

            <div>
              {/* Clean email form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white backdrop-blur-sm transition-all placeholder:text-gray-500 focus:border-[#06B6D4]/60 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#06B6D4]/30 disabled:opacity-50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative rounded-xl bg-[#06B6D4] px-8 py-4 font-semibold whitespace-nowrap text-white transition-all duration-200 hover:bg-[#0891B2] disabled:cursor-not-allowed disabled:opacity-50"
                    style={{
                      boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
                      animation: "ctaPulse 3s ease-in-out infinite",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Get in Touch"}
                  </button>
                </div>

                {/* Form Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm mt-4">
                    Thanks for reaching out! We&apos;ll be in touch soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm mt-4">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Simple reassurance */}
                {submitStatus === "idle" && (
                  <p className="text-gray-500 text-sm mt-6">
                    We typically respond within 24 hours.
                  </p>
                )}
              </form>
            </div>

            {/* Alternative contact option */}
            <div>
              <div className="mt-14 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12">
                <p className="text-gray-400 text-base mb-4">
                  Prefer to talk directly?
                </p>
                <a
                  href="mailto:info@bknddevelopment.com"
                  className="group inline-flex items-center gap-2 text-white text-lg font-medium transition-colors hover:text-[#06B6D4]"
                >
                  <span className="relative">
                    info@bknddevelopment.com
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#06B6D4] transition-all duration-300 group-hover:w-full" />
                  </span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Mail, MapPin, Clock, Send, ArrowRight, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://www.opusite.com/api/forms/webhook/cd52152b-ae9c-4171-a67f-a3d62e32e268",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            consent: true,
            fields: {
              subject: "Contact Form Submission - BKND Development",
              message: `Company: ${formData.company || "N/A"}\n\n${formData.message}`,
            },
          }),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch {
      // Fall through — show success state anyway to not block UX,
      // user can also email directly
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <div className="max-w-3xl">
              <AnimateOnScroll>
                <p className="text-[#00D4FF] text-sm font-medium tracking-wide uppercase mb-4">
                  Contact Us
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em]">
                  Let&apos;s talk about{" "}
                  <span className="text-[#00D4FF]">growth.</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <p className="text-[#86868B] text-lg lg:text-xl leading-relaxed max-w-2xl">
                  Whether you&apos;re ready to start a project or just want to
                  explore what&apos;s possible, we&apos;d love to hear from you.
                  No pressure, no sales pitch. Just a conversation.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Contact Form + Info Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-sg">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
              {/* Contact Form */}
              <div>
                <AnimateOnScroll>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-8">
                    Send us a message
                  </h2>
                </AnimateOnScroll>

                {isSubmitted ? (
                  <AnimateOnScroll>
                    <div className="bg-[#F5F5F7] rounded-2xl p-8 lg:p-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8 text-[#00D4FF]" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">
                        Message received!
                      </h3>
                      <p className="text-[#86868B] text-lg mb-6">
                        Thanks for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            message: "",
                          });
                        }}
                        className="text-[#00D4FF] font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  </AnimateOnScroll>
                ) : (
                  <AnimateOnScroll delay={0.1}>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-[#1D1D1F] mb-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#F5F5F7] text-[#1D1D1F] text-base px-5 py-4 border border-transparent rounded-xl placeholder:text-[#86868B] focus:outline-none focus:border-[#00D4FF] focus:bg-white transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#1D1D1F] mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#F5F5F7] text-[#1D1D1F] text-base px-5 py-4 border border-transparent rounded-xl placeholder:text-[#86868B] focus:outline-none focus:border-[#00D4FF] focus:bg-white transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-[#1D1D1F] mb-2"
                        >
                          Company{" "}
                          <span className="text-[#86868B]">(optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-[#F5F5F7] text-[#1D1D1F] text-base px-5 py-4 border border-transparent rounded-xl placeholder:text-[#86868B] focus:outline-none focus:border-[#00D4FF] focus:bg-white transition-all"
                          placeholder="Your company"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-[#1D1D1F] mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full bg-[#F5F5F7] text-[#1D1D1F] text-base px-5 py-4 border border-transparent rounded-xl placeholder:text-[#86868B] focus:outline-none focus:border-[#00D4FF] focus:bg-white transition-all resize-none"
                          placeholder="Tell us about your project or goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </form>
                  </AnimateOnScroll>
                )}
              </div>

              {/* Contact Info Sidebar */}
              <div>
                <AnimateOnScroll direction="right">
                  <div className="bg-[#1D1D1F] rounded-2xl p-8 lg:p-10 mb-6">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Contact Information
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div>
                          <p className="text-[#86868B] text-sm mb-1">Email</p>
                          <a
                            href="mailto:info@bknddevelopment.com"
                            className="text-white hover:text-[#00D4FF] transition-colors"
                          >
                            info@bknddevelopment.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div>
                          <p className="text-[#86868B] text-sm mb-1">Phone</p>
                          <a
                            href="tel:+19735185600"
                            className="text-white hover:text-[#00D4FF] transition-colors"
                          >
                            (973) 518-5600
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div>
                          <p className="text-[#86868B] text-sm mb-1">Address</p>
                          <p className="text-white">
                            30 Union St, Unit 13
                            <br />
                            Elizabeth, NJ 07202
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#00D4FF]" />
                        </div>
                        <div>
                          <p className="text-[#86868B] text-sm mb-1">
                            Response Time
                          </p>
                          <p className="text-white">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll direction="right" delay={0.1}>
                  <div className="bg-[#F5F5F7] rounded-2xl p-8 border border-gray-200/80">
                    <h3 className="text-lg font-semibold text-[#1D1D1F] mb-3">
                      Prefer to email directly?
                    </h3>
                    <p className="text-[#86868B] mb-4">
                      No forms needed. Just drop us a line and we&apos;ll get
                      back to you.
                    </p>
                    <a
                      href="mailto:info@bknddevelopment.com"
                      className="group inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:underline"
                    >
                      info@bknddevelopment.com
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Map / Location Section */}
        <section className="py-16 lg:py-24 bg-[#F5F5F7]">
          <div className="container-sg">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <p className="text-[#6E6E73] text-sm font-medium tracking-wide uppercase mb-4">
                  Our Location
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">
                  Based in Elizabeth, NJ
                </h2>
                <p className="text-[#86868B] text-lg max-w-xl mx-auto">
                  Serving clients across the United States and beyond with
                  remote-first collaboration.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80">
                {/* Map Placeholder */}
                <div className="relative h-[300px] lg:h-[400px] bg-gradient-to-br from-[#F5F5F7] to-[#E8E8ED] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-[#00D4FF]" />
                    </div>
                    <p className="text-[#1D1D1F] font-semibold text-lg mb-2">
                      30 Union St, Unit 13
                    </p>
                    <p className="text-[#86868B]">Elizabeth, NJ 07202</p>
                    <a
                      href="https://maps.google.com/?q=30+Union+St+Unit+13+Elizabeth+NJ+07202"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#00D4FF] font-medium mt-4 hover:underline"
                    >
                      Open in Google Maps
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D1D1F] py-24 lg:py-32">
          <div className="container-sg">
            <div className="max-w-3xl mx-auto text-center">
              <AnimateOnScroll>
                <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                  Ready to Start?
                </p>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                  Let&apos;s build something
                  <br />
                  <span className="text-[#00D4FF]">extraordinary.</span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                  Every great partnership starts with a conversation.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <a
                  href="mailto:info@bknddevelopment.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] hover:bg-[#00B8E0] text-white font-medium rounded-full transition-all duration-300"
                >
                  Email Us Directly
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

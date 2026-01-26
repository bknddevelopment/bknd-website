// TODO: Replace YOUR_FORM_ID with actual Formspree form ID
'use client';

import { useState, FormEvent } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          _subject: 'New Contact Request - BKND Development',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Full-width dark charcoal background - Apple style */}
      <div className="bg-[#1D1D1F] py-24 lg:py-32">
        <div className="container-sg">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              {/* Overline */}
              <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-6">
                Get Started
              </p>

              {/* Main headline - Apple typography style */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white tracking-tight mb-6">
                Let&apos;s build something
                <br />
                <span className="text-[#06B6D4]">extraordinary.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-gray-400 font-normal mb-12 max-w-xl mx-auto">
                Share your vision with us and discover what&apos;s possible.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              {/* Clean email form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#06B6D4]/50 focus:bg-white/10 transition-all text-base disabled:opacity-50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#06B6D4] hover:bg-[#0891B2] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get in Touch'}
                  </button>
                </div>

                {/* Form Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-sm mt-4">
                    Thanks for reaching out! We&apos;ll be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm mt-4">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Simple reassurance */}
                {submitStatus === 'idle' && (
                  <p className="text-gray-500 text-sm mt-6">
                    We typically respond within 24 hours.
                  </p>
                )}
              </form>
            </AnimateOnScroll>

            {/* Alternative contact option */}
            <AnimateOnScroll>
              <div className="mt-16 pt-12 border-t border-white/10">
                <p className="text-gray-400 text-base mb-4">
                  Prefer to talk directly?
                </p>
                <a
                  href="mailto:hello@bknd.dev"
                  className="inline-flex items-center gap-2 text-white hover:text-[#06B6D4] transition-colors text-lg font-medium"
                >
                  hello@bknd.dev
                  <svg
                    className="w-5 h-5"
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
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

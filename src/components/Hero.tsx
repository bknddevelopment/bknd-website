// TODO: Replace YOUR_FORM_ID with actual Formspree form ID
'use client';

import { useEffect, useState, FormEvent } from 'react';
import Image from 'next/image';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setMounted(true);
  }, []);

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
          _subject: 'New Lead from Hero Section - BKND Development',
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
    <section
      className="relative min-h-screen pt-24 pb-16 overflow-hidden bg-[#F5F5F7]"
    >
      <div className="max-w-[1148px] mx-auto px-6 lg:px-20">
        {/* Two-column asymmetric layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start pt-8 lg:pt-16">

          {/* Left Column - 60% */}
          <div>
            {/* Urgency Badge */}
            <div
              className={`inline-flex items-center gap-2 mb-8 transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
              </span>
              <span className="text-[#1D1D1F] text-sm font-medium">Limited slots available</span>
              <span className="text-[#86868B] mx-1">|</span>
              <a
                href="#contact"
                className="text-[#86868B] hover:text-[#1D1D1F] text-sm transition-colors underline underline-offset-2"
              >
                Check capacity
              </a>
            </div>

            {/* Large Headline */}
            <h1
              className={`text-[32px] sm:text-[40px] lg:text-[52px] font-semibold text-[#1D1D1F] mb-6 leading-[1.1] tracking-[-0.02em] transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              We are the marketing partner that companies never outgrow.
            </h1>

            {/* Stats Line */}
            <p
              className={`text-[#00D4FF] text-base font-medium mb-4 transition-all duration-500 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="underline decoration-[#00D4FF] decoration-1 underline-offset-4">ROI-focused approach</span>
              <span className="mx-3 text-[#86868B]">—</span>
              <span className="text-[#1D1D1F]">Results that compound</span>
            </p>

            {/* Subheadline */}
            <p
              className={`text-[#86868B] text-[17px] leading-[1.65] mb-10 max-w-lg transition-all duration-500 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
            >
              Developer-built campaigns. Data-driven decisions. Revenue you can measure. We deliver marketing that actually works.
            </p>

            {/* Email Form - Side by Side */}
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col sm:flex-row gap-3 mb-4 transition-all duration-500 delay-250 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 bg-white text-[#1D1D1F] text-[15px] px-5 py-4 h-[52px] border border-[#D2D2D7] rounded-xl placeholder:text-[#86868B] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all disabled:opacity-50"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#00D4FF] hover:bg-[#00B8E0] text-white text-[15px] font-medium px-7 py-4 h-[52px] rounded-xl inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif' }}
              >
                {isSubmitting ? 'Sending...' : 'Work With Us'}
                {!isSubmitting && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>

            {/* Form Status Messages */}
            {submitStatus === 'success' && (
              <p className={`text-green-600 text-sm mb-4 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                Thanks! We&apos;ll be in touch soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className={`text-red-600 text-sm mb-4 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                Something went wrong. Please try again.
              </p>
            )}

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap gap-8 text-sm transition-all duration-500 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {['ROI-focused', 'Expert-led', 'AI-forward'].map((badge, i) => (
                <span key={i} className="flex items-center gap-2 text-[#1D1D1F]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#00D4FF" fillOpacity="0.1"/>
                    <path d="M13 6L7.5 11.5L5 9" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - 40% - Floating Cards */}
          <div className={`hidden lg:block relative transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Quote Card - Slightly Rotated */}
            <div
              className="bg-white rounded-2xl p-6 relative mb-[-60px] z-10"
              style={{
                transform: 'rotate(-2deg)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 10px 15px rgba(0,0,0,0.03)'
              }}
            >
              {/* Cyan Quote Marks */}
              <svg
                className="absolute top-4 left-4 w-8 h-8 text-[#00D4FF] opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-[#1D1D1F] text-[15px] leading-relaxed pt-8 pr-4" style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, Inter, sans-serif' }}>
                &quot;We build marketing systems the way developers build software—clean, scalable, and measurable.&quot;
              </p>
              <p className="text-[#86868B] text-sm mt-4">
                — Charwin Vanryck deGroot, Founder
              </p>
            </div>

            {/* Video/Founder Card - Overlapping */}
            <div
              className="bg-white rounded-2xl overflow-hidden relative z-20"
              style={{
                transform: 'rotate(1deg)',
                marginLeft: '30px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.04), 0 10px 15px rgba(0,0,0,0.03), 0 20px 25px rgba(0,0,0,0.02)'
              }}
            >
              {/* Video Thumbnail */}
              <div className="relative h-[180px] flex items-center justify-center">
                <Image
                  src="/bknd-website/images/team/hero-video.jpg"
                  alt="BKND Development team presenting growth strategies"
                  fill
                  className="object-cover"
                  sizes="380px"
                />
                {/* Play Button */}
                <div className="absolute w-14 h-14 rounded-full bg-[#00D4FF] flex items-center justify-center cursor-pointer hover:bg-[#00B8E0] transition-all shadow-lg hover:scale-105 z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L16 10L6 16V4Z" fill="white"/>
                  </svg>
                </div>
                {/* Company Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs text-[#1D1D1F] font-medium z-10 shadow-sm">
                  BKND Development
                </div>
              </div>
              {/* Founder Info */}
              <div className="p-5 flex items-center gap-3 border-t border-[#F5F5F7]">
                <div className="w-10 h-10 rounded-full overflow-hidden relative ring-2 ring-[#F5F5F7]">
                  <Image
                    src="/bknd-website/images/team/founder-avatar.jpg"
                    alt="Charwin Vanryck deGroot, Founder of BKND Development"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-[#1D1D1F] text-sm font-medium">Charwin Vanryck deGroot</p>
                  <p className="text-[#86868B] text-xs">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

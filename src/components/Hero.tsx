'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-screen pt-24 pb-16 overflow-hidden"
      style={{ background: 'linear-gradient(257.07deg, #2F343A 0%, #232020 100%)' }}
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27038] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27038]"></span>
              </span>
              <span className="text-[#F27038] text-sm font-normal">Limited slots available</span>
              <span className="text-[#ADADAD] mx-1">|</span>
              <a
                href="#contact"
                className="text-[#ADADAD] hover:text-white text-sm transition-colors underline"
              >
                Check capacity
              </a>
            </div>

            {/* Large Headline */}
            <h1
              className={`text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-[#E9EFF4] mb-5 leading-[1.41] tracking-tight transition-all duration-500 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              We are the marketing partner that companies never outgrow. <span className="inline-block">&#10024;</span>
            </h1>

            {/* Stats Line */}
            <p
              className={`text-[#EFB438] text-base mb-4 transition-all duration-500 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="underline decoration-[#EFB438] decoration-1 underline-offset-4">ROI-focused approach</span>
              <span className="mx-2">-</span>
              <span>Results that compound</span>
            </p>

            {/* Subheadline */}
            <p
              className={`text-[#ADADAD] text-[15px] leading-[28px] mb-8 max-w-lg transition-all duration-500 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Developer-built campaigns. Data-driven decisions. Revenue you can measure. We deliver marketing that actually works.
            </p>

            {/* Email Form - Side by Side */}
            <form
              className={`flex flex-col sm:flex-row gap-3 mb-6 transition-all duration-500 delay-250 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <input
                type="email"
                placeholder="Enter your work email address"
                className="flex-1 bg-white text-[#333333] text-base px-[18px] py-[14px] h-[55px] border border-[#DDDDDD] rounded-[2px] placeholder:text-[#999999] focus:outline-none focus:border-[#F27038] transition-colors"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              />
              <button
                type="submit"
                className="bg-[#F27038] hover:bg-[#E5612A] text-white text-base font-normal px-[30px] py-[17px] h-[55px] rounded-[2px] border border-[#F27038] inline-flex items-center gap-2 whitespace-nowrap transition-colors"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Work With Us
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap gap-6 text-sm transition-all duration-500 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {['ROI-focused', 'Expert-led', 'AI-forward'].map((badge, i) => (
                <span key={i} className="flex items-center gap-2 text-[#ADADAD]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#F27038" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              className="bg-[#34394D] rounded-lg p-6 relative mb-[-60px] z-10 shadow-lg"
              style={{ transform: 'rotate(-2deg)' }}
            >
              {/* Orange Quote Marks */}
              <svg
                className="absolute top-4 left-4 w-10 h-10 text-[#F27038] opacity-80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-[#E9EFF4] text-base leading-relaxed pt-8 pr-4">
                &quot;Best conference we&apos;ve attended. The insights from SingleGrain transformed how we approach growth marketing.&quot;
              </p>
              <p className="text-[#ADADAD] text-sm mt-4">
                - HubSpot Marketing Conference
              </p>
            </div>

            {/* Video/Founder Card - Overlapping */}
            <div
              className="bg-[#2F343A] rounded-lg overflow-hidden shadow-xl relative z-20 border border-white/10"
              style={{ transform: 'rotate(1deg)', marginLeft: '30px' }}
            >
              {/* Video Thumbnail */}
              <div className="relative h-[180px] flex items-center justify-center">
                <Image
                  src="/images/team/hero-video.jpg"
                  alt="Single Grain marketing team presenting growth strategies"
                  fill
                  className="object-cover"
                  sizes="380px"
                />
                {/* Play Button */}
                <div className="absolute w-14 h-14 rounded-full bg-[#F27038] flex items-center justify-center cursor-pointer hover:bg-[#E5612A] transition-colors shadow-lg z-10">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L16 10L6 16V4Z" fill="white"/>
                  </svg>
                </div>
                {/* Company Badge */}
                <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm px-3 py-1 rounded text-xs text-white z-10">
                  Single Grain
                </div>
              </div>
              {/* Founder Info */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image
                    src="/images/team/founder-avatar.jpg"
                    alt="Eric Siu, Founder and CEO of Single Grain"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-[#E9EFF4] text-sm font-medium">Eric Siu</p>
                  <p className="text-[#ADADAD] text-xs">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

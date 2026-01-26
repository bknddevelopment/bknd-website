'use client';

import { useState } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

export default function Contact() {
  const [email, setEmail] = useState('');

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* White background section with headline */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container-sg">
          <AnimateOnScroll>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center max-w-3xl mx-auto">
              Discover How Our Innovations Can{' '}
              <span className="text-sg-orange">Grow Your Business</span>
            </h2>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Dark card section */}
      <div className="bg-white pb-20 lg:pb-28">
        <div className="container-sg">
          <AnimateOnScroll>
            <div className="max-w-4xl mx-auto relative">
              {/* Orange decorative pixels on left edge */}
              <div className="absolute left-0 top-8 hidden lg:flex flex-col gap-1">
                <div className="w-2 h-2 bg-sg-orange" />
                <div className="w-2 h-2 bg-sg-orange" />
                <div className="w-2 h-2 bg-sg-orange" />
                <div className="w-2 h-6 bg-sg-orange" />
                <div className="w-2 h-2 bg-sg-orange" />
              </div>

              <div className="bg-sg-dark rounded-2xl p-8 lg:p-12 ml-0 lg:ml-6">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  {/* Left content - spans 3 columns */}
                  <div className="lg:col-span-3">
                    {/* Quick response badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-sg-orange/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-sg-orange" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sg-light/80 text-sm">
                        Quick response - usually within the same day!
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                      Drop your work email, and our team will get back to you.
                    </h3>

                    {/* Email form */}
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your work email address"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-sg-light/40 focus:outline-none focus:border-sg-orange/50 transition-colors text-base"
                        style={{ height: '54px' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <button type="submit" className="btn-primary w-full justify-center">
                        Work With Us
                        <span className="btn-arrow">&#8599;</span>
                      </button>
                    </form>

                    {/* Trust text */}
                    <p className="text-gray-400 text-sm text-center mt-4">
                      No hard selling - No commitment
                    </p>

                    {/* Soft availability note (replaces fake scarcity) */}
                    <p className="text-gray-500 text-xs text-center mt-6">
                      Limited availability - we take on select clients to ensure quality
                    </p>
                  </div>

                  {/* Right - decorative/visual element */}
                  <div className="lg:col-span-2 hidden lg:flex items-center justify-center">
                    {/* Abstract decorative element */}
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 bg-gradient-to-br from-sg-orange/20 to-sg-gold/10 rounded-full blur-xl" />
                      <div className="absolute inset-4 bg-gradient-to-br from-sg-orange/30 to-sg-gold/20 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-sg-orange/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orange decorative pixels on right edge */}
              <div className="absolute right-0 bottom-8 hidden lg:flex flex-col gap-1">
                <div className="w-2 h-2 bg-sg-orange" />
                <div className="w-2 h-6 bg-sg-orange" />
                <div className="w-2 h-2 bg-sg-orange" />
                <div className="w-2 h-2 bg-sg-orange" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

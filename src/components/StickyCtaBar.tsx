'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:bottom-auto md:top-20 bg-white/80 backdrop-blur-xl border-t border-neutral-200/60 md:border-t-0 md:border-b shadow-sm"
        >
          <div className="container-sg">
            <div className="flex items-center justify-between gap-4 py-3">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <Image
                  src="/bknd-website/images/bknd-logo-new.png"
                  alt="BKND Development"
                  width={80}
                  height={26}
                  className="h-6 w-auto"
                />
              </div>

              {/* Value Prop + CTA */}
              <div className="flex items-center gap-4">
                <span className="text-neutral-500 text-sm hidden md:block">
                  Ready to grow?
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 bg-[#00D4FF] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#00D4FF]/90 transition-all hover:shadow-md"
                >
                  Get Started
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="text-neutral-400 hover:text-neutral-600 transition-colors p-1 rounded-full hover:bg-neutral-100"
                  aria-label="Dismiss"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyCtaBar

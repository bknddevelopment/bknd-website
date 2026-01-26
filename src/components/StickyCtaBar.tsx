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
          className="fixed bottom-0 left-0 right-0 z-40 md:bottom-auto md:top-20 bg-[#2F333B]/90 backdrop-blur-md border-t border-white/10 md:border-t-0 md:border-b"
        >
          <div className="container-sg">
            <div className="flex items-center justify-between gap-4 py-3">
              {/* Logo/Brand - Small */}
              <div className="flex items-center">
                <Image
                  src="/images/bknd-logo.png"
                  alt="BKND Development"
                  width={80}
                  height={26}
                  className="h-7 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>

              {/* Value Prop + CTA */}
              <div className="flex items-center gap-4">
                <span className="text-[#E9EFF4]/70 text-sm hidden md:block">
                  Ready to grow?
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#F27038] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#F27038]/90 transition-colors"
                >
                  Get Started
                  <span className="transition-transform group-hover:-rotate-45">→</span>
                </Link>

                {/* Close Button */}
                <button
                  onClick={handleDismiss}
                  className="text-white/50 hover:text-white transition-colors p-1"
                  aria-label="Dismiss"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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

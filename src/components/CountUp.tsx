'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  end: string // e.g., "2.4x", "$1.2M", "189%", "Growing"
  duration?: number
  className?: string
}

export function CountUp({ end, duration = 2, className = '' }: CountUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('')

  useEffect(() => {
    if (!isInView) return

    // Parse the value
    const numMatch = end.match(/([0-9.]+)/)
    if (!numMatch) {
      // Non-numeric value, just display it
      setDisplay(end)
      return
    }

    const numValue = parseFloat(numMatch[1])
    const prefix = end.slice(0, end.indexOf(numMatch[1]))
    const suffix = end.slice(end.indexOf(numMatch[1]) + numMatch[1].length)

    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (duration * 1000), 1)

      // Easing function (ease out)
      const eased = 1 - Math.pow(1 - progress, 3)

      const current = numValue * eased

      // Format based on original format
      let formatted: string
      if (numMatch[1].includes('.')) {
        formatted = current.toFixed(1)
      } else {
        formatted = Math.floor(current).toString()
      }

      setDisplay(prefix + formatted + suffix)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplay(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {display || end}
    </span>
  )
}

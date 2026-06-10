"use client"

import React, { useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number // in seconds
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView || !ref.current) return

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`
        }
      },
    })

    return () => controls.stop()
  }, [value, duration, isInView, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}

export default AnimatedCounter

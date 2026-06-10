"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { fadeIn, fadeUp, slideLeft, slideRight, scaleIn } from "@/lib/animations"

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

const variantMap = {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration,
  className = "",
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-100px 0px" })

  const selectedVariant = variantMap[variant]

  // Allow custom duration override
  const customVariant = {
    ...selectedVariant,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(selectedVariant.visible as any)?.transition,
        ...(duration ? { duration } : {}),
        delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={customVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal

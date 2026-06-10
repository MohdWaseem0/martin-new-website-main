"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  variant?: "primary" | "outline" | "ghost"
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-full select-none transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
  
  const variantClasses = {
    primary: "gradient-btn text-white shadow-[0_4px_20px_rgba(0,180,255,0.25)] hover:shadow-[0_4px_25px_rgba(0,180,255,0.45)]",
    outline: "outline-btn text-white border border-[var(--electric-blue)]",
    ghost: "text-slate-300 hover:text-white hover:bg-[rgba(0,180,255,0.06)]",
  }

  const classes = cn(baseClasses, variantClasses[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick as any}>
        {children}
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export default GradientButton

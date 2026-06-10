"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  onClick?: () => void
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverEffect = true,
  onClick,
}) => {
  const CardComponent = onClick ? motion.button : motion.div

  return (
    <CardComponent
      onClick={onClick}
      className={cn(
        "glass-card overflow-hidden p-6 md:p-8 flex flex-col text-left",
        onClick && "cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00B4FF]",
        !hoverEffect && "hover:transform-none hover:border-[var(--border-default)] hover:shadow-none",
        className
      )}
      {...(onClick ? { whileTap: { scale: 0.98 } } : {})}
    >
      {children}
    </CardComponent>
  )
}

export default GlassCard

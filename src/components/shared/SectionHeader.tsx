import React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  overline?: string
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
  titleClassName?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  overline,
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16 flex flex-col",
        align === "center" && "mx-auto text-center items-center",
        align === "left" && "text-left items-start",
        align === "right" && "text-right items-end",
        className
      )}
    >
      {overline && (
        <span className="text-xs md:text-sm font-semibold text-[#00B4FF] uppercase tracking-widest mb-3 bg-[rgba(0,180,255,0.06)] border border-[rgba(0,180,255,0.15)] px-3 py-1 rounded-full w-fit">
          {overline}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-400 mt-4 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader

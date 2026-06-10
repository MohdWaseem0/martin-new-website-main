"use client"

import React from "react"
import { STATS } from "@/lib/constants"
import { AnimatedCounter } from "../shared/AnimatedCounter"
import { GlassCard } from "../shared/GlassCard"
import { ScrollReveal } from "../shared/ScrollReveal"

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A1128] border-y border-[rgba(0,180,255,0.08)] relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[rgba(0,180,255,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={index}
              variant="scaleIn"
              delay={index * 0.05}
            >
              <GlassCard className="flex flex-col items-center text-center p-6 bg-[rgba(5,10,26,0.5)] border-[rgba(0,180,255,0.1)] hover:border-[rgba(0,180,255,0.25)] hover:transform-none">
                <div className="flex items-baseline mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="stat-number font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#00B4FF] to-white"
                  />
                </div>
                <span className="text-xs md:text-sm font-semibold text-slate-400 tracking-wider uppercase">
                  {stat.label}
                </span>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

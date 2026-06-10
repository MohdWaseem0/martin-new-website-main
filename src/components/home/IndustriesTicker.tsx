"use client"

import React from "react"
import { INDUSTRIES } from "@/lib/constants"
import { SectionHeader } from "../shared/SectionHeader"
import { IndustryCard } from "../shared/IndustryCard"
import { ScrollReveal } from "../shared/ScrollReveal"

export const IndustriesTicker: React.FC = () => {
  // Duplicate array to make seamless marquee rows
  const marqueeItems = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES]

  return (
    <section id="industries" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 mb-12">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Sectors We Serve"
            title="Tailored Solutions for Diverse Industries"
            subtitle="Providing custom technology frameworks, operations automation, and high-performance applications designed for specific market vectors."
          />
        </ScrollReveal>
      </div>

      {/* Marquee Ticker Rows */}
      <div className="w-full overflow-hidden flex flex-col gap-4 mb-20 select-none pointer-events-none opacity-80">
        {/* Row 1: Left scrolling */}
        <div className="ticker-wrap flex w-full relative">
          <div className="flex gap-4 ticker-left whitespace-nowrap">
            {marqueeItems.map((item, idx) => (
              <div
                key={`row1-${idx}`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[rgba(13,22,55,0.4)] border border-[rgba(0,180,255,0.15)] text-sm font-semibold text-white tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-[#00B4FF]" />
                {item.title}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right scrolling */}
        <div className="ticker-wrap flex w-full relative">
          <div className="flex gap-4 ticker-right whitespace-nowrap">
            {marqueeItems.map((item, idx) => (
              <div
                key={`row2-${idx}`}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[rgba(13,22,55,0.4)] border border-[rgba(0,180,255,0.15)] text-sm font-semibold text-white tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-[#1565C0]" />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <ScrollReveal
              key={industry.title}
              variant="fadeUp"
              delay={index * 0.05}
              className="h-full"
            >
              <IndustryCard industry={industry} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesTicker

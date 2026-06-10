"use client"

import React from "react"
import { Search, ClipboardList, Palette, Code2, CheckCircle, Rocket } from "lucide-react"
import { PROCESS_STEPS } from "@/lib/constants"
import { SectionHeader } from "../shared/SectionHeader"
import { ScrollReveal } from "../shared/ScrollReveal"
import { GlassCard } from "../shared/GlassCard"

const iconMap: Record<string, React.ComponentType<any>> = {
  Search,
  ClipboardList,
  Palette,
  Code2,
  CheckCircle,
  Rocket
}

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 relative overflow-hidden bg-[#0A1128] border-y border-[rgba(0,180,255,0.08)]">
      {/* Decorative Blob */}
      <div className="bg-blob bg-blob-animated w-[450px] h-[450px] bg-[rgba(0,180,255,0.03)] top-[20%] left-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Our Methodology"
            title="The Step-by-Step Delivery Process"
            subtitle="We adhere to a highly structured engineering lifecycle to guarantee transparency, timely delivery, and unmatched quality standards."
          />
        </ScrollReveal>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative mt-12">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#1565C0] via-[#00B4FF] to-[#1565C0] opacity-20 -translate-y-1/2 pointer-events-none z-0" />

          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Search
            return (
              <ScrollReveal
                key={step.step}
                variant="fadeUp"
                delay={index * 0.08}
                className="relative z-10"
              >
                <GlassCard className="h-full bg-[rgba(5,10,26,0.65)] hover:border-[rgba(0,180,255,0.25)] flex flex-col p-6">
                  {/* Step bubble and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] flex items-center justify-center text-[#00B4FF]">
                      <IconComponent size={22} />
                    </div>
                    <span className="font-display font-extrabold text-3xl text-[rgba(0,180,255,0.2)] tracking-wider">
                      {step.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 text-left">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed text-left">
                    {step.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection

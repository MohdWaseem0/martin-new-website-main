"use client"

import React from "react"
import { TECH_STACK } from "@/lib/constants"
import { SectionHeader } from "../shared/SectionHeader"
import { GlassCard } from "../shared/GlassCard"
import { ScrollReveal } from "../shared/ScrollReveal"

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#050A1A] relative overflow-hidden">
      {/* Background Blobs */}
      <div className="bg-blob bg-blob-animated w-[300px] h-[300px] bg-[rgba(0,180,255,0.03)] top-[20%] right-[-5%]" />
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] bottom-[10%] left-[-5%] float-animation-delayed" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Technology Stack"
            title="Cutting-Edge Technologies We Leverage"
            subtitle="We utilize modern, industry-standard languages, frameworks, databases, and cloud platforms to build secure, robust software ecosystems."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(TECH_STACK).map(([category, techList], index) => (
            <ScrollReveal
              key={category}
              variant="fadeUp"
              delay={index * 0.05}
              className="h-full"
            >
              <GlassCard className="h-full bg-[rgba(13,22,55,0.3)] hover:border-[rgba(0,180,255,0.3)]">
                {/* Header Category */}
                <h3 className="text-lg font-bold text-white mb-6 border-b border-[rgba(0,180,255,0.15)] pb-3 text-left">
                  {category}
                </h3>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {techList.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,180,255,0.3)] hover:bg-[rgba(0,180,255,0.05)] text-slate-300 hover:text-white transition-all duration-300 select-none cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection

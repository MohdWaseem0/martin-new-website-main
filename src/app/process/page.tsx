"use client"

import React from "react"
import { Search, ClipboardList, Palette, Code2, CheckCircle, Rocket } from "lucide-react"
import { PROCESS_STEPS } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { GlassCard } from "@/components/shared/GlassCard"

const iconMap: Record<string, React.ComponentType<any>> = {
  Search,
  ClipboardList,
  Palette,
  Code2,
  CheckCircle,
  Rocket
}

export default function ProcessPage() {
  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="How We Work"
            title="Our Engineering Workflow"
            subtitle="An end-to-end overview of our development lifecycle. We combine planning clarity, agile sprints, and strict QA standards to deliver quality software."
          />
        </ScrollReveal>

        {/* Vertical Timeline for Process page */}
        <div className="max-w-4xl mx-auto relative mt-16 flex flex-col gap-10">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1565C0] via-[#00B4FF] to-transparent opacity-20 pointer-events-none" />

          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Search
            const isEven = index % 2 === 0

            return (
              <div
                key={step.step}
                className={`flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } relative`}
              >
                {/* Marker dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-[11px] top-6 w-6 h-6 rounded-full bg-[#050A1A] border-2 border-[#00B4FF] flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,180,255,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-[#00B4FF]" />
                </div>

                {/* Left/Right Container */}
                <div className="w-full md:w-[45%] pl-16 md:pl-0">
                  <ScrollReveal variant={isEven ? "slideLeft" : "slideRight"}>
                    <GlassCard className="bg-[rgba(13,22,55,0.4)] border-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.3)] p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                          <IconComponent size={18} />
                        </div>
                        <span className="font-display font-extrabold text-2xl text-[rgba(0,180,255,0.15)]">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 text-left">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed text-left">
                        {step.description}
                      </p>
                    </GlassCard>
                  </ScrollReveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

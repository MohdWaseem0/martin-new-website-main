"use client"

import React from "react"
import { TEAM } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { TeamCard } from "@/components/shared/TeamCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function TeamPage() {
  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Who We Are"
            title="Our Executive Board & Leaders"
            subtitle="Synthesizing operations strategy, brand architecture, and software engineering standards to direct Martin Global Technologies."
          />
        </ScrollReveal>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {TEAM.map((member, index) => (
            <ScrollReveal
              key={member.name}
              variant="fadeUp"
              delay={index * 0.1}
              className="h-full"
            >
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  )
}

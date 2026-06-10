"use client"

import React from "react"
import { INDUSTRIES } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { IndustryCard } from "@/components/shared/IndustryCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function IndustriesPage() {
  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Sectors We Empower"
            title="Industry-Specific IT Solutions"
            subtitle="Discover how we leverage operations automation, secure data integrations, and scalable client systems for specific industry vectors."
          />
        </ScrollReveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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
    </main>
  )
}

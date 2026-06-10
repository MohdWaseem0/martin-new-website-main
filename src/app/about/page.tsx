"use client"

import React from "react"
import { Shield, Target, Eye, Sparkles } from "lucide-react"
import { COMPANY, TEAM } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { TeamCard } from "@/components/shared/TeamCard"
import { GlassCard } from "@/components/shared/GlassCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      desc: "To deliver premium software frameworks and robust digital transformations that optimize operational output and scale globally.",
    },
    {
      icon: Eye,
      title: "Vision",
      desc: "To be the premium IT solution standard in Northern India, serving international enterprise clients with absolute transparency.",
    },
    {
      icon: Shield,
      title: "Core Values",
      desc: "Engineering craftsmanship, transparency in code, ISO quality guidelines, and unwavering commitment to client success.",
    },
  ]

  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Decorative background grids/blobs */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%] float-animation-delayed" />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 mb-16 md:mb-24">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-4xl text-left flex flex-col gap-6">
            <span className="text-xs md:text-sm font-semibold text-[#00B4FF] uppercase tracking-widest bg-[rgba(0,180,255,0.06)] border border-[rgba(0,180,255,0.15)] px-3.5 py-1.5 rounded-full w-fit">
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
              Crafting Premium <span className="gradient-text">IT Frameworks</span> For Modern Enterprises
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed">
              Martin Global Technologies Pvt. Ltd. is an ISO 9001:2015 certified IT solutions studio based in Aligarh, India. We construct enterprise CRM, CRM, ERP, mobile apps, and robust cloud web systems.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Story & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="slideLeft" className="text-left flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
              Our Journey & Dedication
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Established with a core directive to solve complex enterprise problems, Martin Global Technologies has evolved into a premier IT partner. From our corporate headquarters in Aligarh, we deliver digital solutions that enable business scaling, cost reductions, and operational clarity.
            </p>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Whether building bespoke software, launching native mobile apps, or migrating legacy workloads to the cloud, our teams approach every challenge with strict engineering standards and dedicated leadership oversight.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="slideRight" className="grid grid-cols-1 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <GlassCard key={idx} className="bg-[rgba(13,22,55,0.3)] border-[rgba(0,180,255,0.15)] flex flex-row gap-5 p-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="text-base font-bold text-white mb-1">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </GlassCard>
              )
            })}
          </ScrollReveal>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Executive Leadership"
            title="Driven by Experienced Architects"
            subtitle="Meet the executive directors steering our technology roadmaps, partner relationships, and strategic quality deliveries."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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

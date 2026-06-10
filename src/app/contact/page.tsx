"use client"

import React from "react"
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { ContactForm } from "@/components/forms/ContactForm"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function ContactPage() {
  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-animated w-[450px] h-[450px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Consultation Request"
            title="Start Your Digital Transformation"
            subtitle="Let's align on your project roadmap. Complete the secure WhatsApp brief below or reach out to our corporate headquarters."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Column: Cards + Map placeholder */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <ScrollReveal variant="fadeUp" delay={0.05}>
              <GlassCard className="bg-[rgba(5,10,26,0.6)] border-[rgba(0,180,255,0.15)] flex gap-4 p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Direct Call
                  </span>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-base font-bold text-white hover:text-[#00B4FF] transition-colors mt-1"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <GlassCard className="bg-[rgba(5,10,26,0.6)] border-[rgba(0,180,255,0.15)] flex gap-4 p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-base font-bold text-white hover:text-[#00B4FF] transition-colors mt-1 break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <GlassCard className="bg-[rgba(5,10,26,0.6)] border-[rgba(0,180,255,0.15)] flex gap-4 p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Location HQ
                  </span>
                  <span className="text-sm font-semibold text-slate-200 mt-1 leading-relaxed">
                    {COMPANY.address}
                  </span>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Office Map Placeholder */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <GlassCard className="bg-[rgba(5,10,26,0.60)] border-[rgba(0,180,255,0.15)] p-5 flex flex-col gap-4 overflow-hidden relative min-h-[200px] justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] to-[#0D1637] opacity-60 z-0" />
                
                {/* Visual grid representing coordinates */}
                <div className="absolute inset-0 grid-overlay opacity-30 z-0" />
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[rgba(0,180,255,0.1)] border border-[#00B4FF] flex items-center justify-center text-[#00B4FF] shadow-[0_0_15px_rgba(0,180,255,0.3)] glow-pulse">
                    <MapPin size={16} />
                  </div>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    Habitat Centre
                  </span>
                  <span className="text-xs text-slate-400 text-center max-w-[200px]">
                    Aligarh 202001, Uttar Pradesh, India
                  </span>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Full Form */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="scaleIn">
              <GlassCard className="bg-[rgba(5,10,26,0.75)] border-[rgba(0,180,255,0.2)] p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6 text-[#00B4FF]">
                  <ShieldCheck size={18} />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Zero Spam Security Briefing
                  </span>
                </div>
                <ContactForm />
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  )
}

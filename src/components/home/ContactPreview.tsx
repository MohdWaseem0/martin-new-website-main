"use client"

import React from "react"
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { SectionHeader } from "../shared/SectionHeader"
import { GlassCard } from "../shared/GlassCard"
import { ContactForm } from "../forms/ContactForm"
import { ScrollReveal } from "../shared/ScrollReveal"

export const ContactPreview: React.FC = () => {
  return (
    <section id="contact-preview" className="py-20 md:py-28 bg-[#0A1128] border-y border-[rgba(0,180,255,0.08)] relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.04)] bottom-[10%] left-[-5%] float-animation-delayed" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Contact Us"
            title="Initiate Your Project Roadmap"
            subtitle="Fill out the digital briefing, or reach out to our office directly. We normally reply to all inquiries within 12 business hours."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <ScrollReveal variant="fadeUp" delay={0.05}>
              <GlassCard className="bg-[rgba(5,10,26,0.6)] border-[rgba(0,180,255,0.15)] flex gap-4 p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Call Center
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
                    Email Support
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
                    Corporate Office
                  </span>
                  <span className="text-sm font-semibold text-slate-200 mt-1 leading-relaxed">
                    {COMPANY.address}
                  </span>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.2}>
              <GlassCard className="bg-[rgba(5,10,26,0.6)] border-[rgba(0,180,255,0.15)] flex gap-4 p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                  <Clock size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Operating Hours
                  </span>
                  <span className="text-sm font-semibold text-slate-200 mt-1">
                    Monday – Saturday: 9:00 AM – 6:00 PM IST
                  </span>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="scaleIn">
              <GlassCard className="bg-[rgba(5,10,26,0.75)] border-[rgba(0,180,255,0.2)] p-6 md:p-8">
                <ContactForm compact />
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview

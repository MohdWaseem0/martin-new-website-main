"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"
import { ParticleField } from "../three/ParticleField"
import { ScrollReveal } from "../shared/ScrollReveal"

export const CTABanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#050A1A]">
      {/* Container with background gradient and border */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="scaleIn">
          <div className="relative rounded-3xl overflow-hidden border border-[rgba(0,180,255,0.25)] bg-gradient-to-br from-[#0A1128] via-[#0D1637] to-[#1565C0] p-8 md:p-16 text-center shadow-[0_20px_50px_rgba(0,180,255,0.15)]">
            
            {/* Particle Field background overlay */}
            <div className="absolute inset-0 z-0">
              <ParticleField />
            </div>

            {/* Glowing Accent Blobs */}
            <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-[rgba(0,180,255,0.25)] blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-[rgba(21,101,192,0.25)] blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
              <span className="text-xs md:text-sm font-bold text-[#00B4FF] uppercase tracking-widest bg-[rgba(255,255,255,0.06)] px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)]">
                Ready to transform?
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                Let's Build Something Extraordinary Together
              </h2>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                Connect with our engineering architects today. We design, construct, and launch custom software frameworks engineered for exponential scale.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white gradient-btn shadow-[0_4px_20px_rgba(0,180,255,0.3)] hover:scale-105 transition-transform"
                >
                  Consult An Expert
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/918868863355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white outline-btn"
                >
                  <MessageSquare size={18} className="text-[#00B4FF]" />
                  Chat On WhatsApp
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTABanner

"use client"

import React from "react"
import { Send, BookOpen } from "lucide-react"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

export default function BlogPage() {
  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative min-h-[80vh] flex items-center justify-center">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%]" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center gap-6">
        <ScrollReveal variant="scaleIn">
          <GlassCard className="bg-[rgba(13,22,55,0.4)] border-[rgba(0,180,255,0.25)] p-12 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.2)] flex items-center justify-center text-[#00B4FF] glow-pulse">
              <BookOpen size={28} />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-display text-white">
              Cosmos Log & Insights
            </h1>

            <p className="text-base text-slate-400 leading-relaxed max-w-md">
              We are drafting detailed analyses on software architectures, ERP scaling, NextJS optimization, and cloud configurations. Launching very soon!
            </p>

            {/* Newsletter form */}
            <div className="w-full max-w-md mt-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter email for log updates"
                  className="form-input text-sm"
                />
                <button
                  type="button"
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white gradient-btn flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                >
                  Notify Me
                  <Send size={14} />
                </button>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </main>
  )
}

"use client"

import React from "react"
import { Shield, Sparkles, Zap } from "lucide-react"
import { ScrollReveal } from "../shared/ScrollReveal"

export const CompanyStrip: React.FC = () => {
  return (
    <section className="py-12 bg-[#0A1128] border-y border-[rgba(0,180,255,0.1)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Large Highlight block */}
        <div className="lg:col-span-4 flex items-center gap-6">
          <div className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00B4FF] to-white font-display leading-none">
            10+
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base font-bold text-white uppercase tracking-wider">
              Years of
            </span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest mt-1">
              Technology Excellence
            </span>
          </div>
        </div>

        {/* Detailed text */}
        <div className="lg:col-span-5 text-left text-sm md:text-base text-slate-400 leading-relaxed">
          <ScrollReveal variant="fadeIn">
            Martin Global Technologies Pvt. Ltd. represents premium digital engineering and IT craftsmanship. We synthesize complex tech stacks into streamlined business ecosystems that scale efficiently and maximize ROI.
          </ScrollReveal>
        </div>

        {/* Micro highlights */}
        <div className="lg:col-span-3 flex justify-between gap-4 border-t lg:border-t-0 lg:border-l border-[rgba(255,255,255,0.06)] pt-6 lg:pt-0 lg:pl-8">
          <div className="flex flex-col items-center text-center gap-2">
            <Zap size={18} className="text-[#00B4FF]" />
            <span className="text-xs font-bold text-white uppercase">Rapid Dev</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Shield size={18} className="text-[#00B4FF]" />
            <span className="text-xs font-bold text-white uppercase">ISO Standard</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <Sparkles size={18} className="text-[#00B4FF]" />
            <span className="text-xs font-bold text-white uppercase">AI Optimized</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStrip

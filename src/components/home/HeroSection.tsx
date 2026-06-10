"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Play, Shield, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { GlobeScene } from "../three/GlobeScene"
import { ScrollReveal } from "../shared/ScrollReveal"
import { COMPANY } from "@/lib/constants"

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden grid-overlay">
      {/* Decorative Blur Blobs */}
      <div className="bg-blob bg-blob-animated w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[rgba(0,180,255,0.06)] top-[-10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[rgba(21,101,192,0.06)] bottom-[10%] right-[-10%] float-animation-delayed" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(0,180,255,0.25)] bg-[rgba(0,180,255,0.06)] text-xs md:text-sm font-semibold text-[#00B4FF] uppercase tracking-wider w-fit glow-pulse">
              <Shield size={14} className="text-[#00B4FF]" />
              Premium IT Partner & Digital Studio
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight text-white">
              Empowering Businesses Through{" "}
              <span className="gradient-text">Technology</span> &{" "}
              <span className="gradient-text">Innovation</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.3}>
            <p className="text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-xl">
              Martin Global Technologies Pvt. Ltd. builds elite web apps, custom software, ERP/CRM systems, and cloud solutions from Habitat Centre, Aligarh.
            </p>
          </ScrollReveal>

          {/* Action Buttons */}
          <ScrollReveal variant="fadeUp" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white gradient-btn shadow-[0_4px_20px_rgba(0,180,255,0.3)]"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white outline-btn"
              >
                <Play size={16} className="fill-[#00B4FF] text-[#00B4FF]" />
                Explore Services
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust strip */}
          <ScrollReveal variant="fadeUp" delay={0.5}>
            <div className="mt-8 pt-8 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">1,250+</span>
                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                  Successful Deliveries
                </span>
              </div>
              <div className="w-[1px] h-8 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">ISO 9001:2015</span>
                <span className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                  Certified Standards
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Globe / 3D Scene */}
        <div className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[550px] relative flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <GlobeScene />
          </div>

          {/* Floating Orbiting Glass Cards */}
          <div className="absolute top-[10%] left-[-5%] sm:left-[5%] z-10 float-animation">
            <div className="glass-card bg-[rgba(5,10,26,0.8)] backdrop-blur-md border border-[rgba(0,180,255,0.2)] p-4 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="w-8 h-8 rounded-lg bg-[rgba(0,180,255,0.1)] flex items-center justify-center text-[#00B4FF]">
                <Globe size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Global Scale
                </span>
                <span className="text-sm font-bold text-white">
                  Cross-Border Solutions
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[15%] right-[-5%] sm:right-[5%] z-10 float-animation-delayed">
            <div className="glass-card bg-[rgba(5,10,26,0.8)] backdrop-blur-md border border-[rgba(0,180,255,0.2)] p-4 rounded-2xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="w-8 h-8 rounded-lg bg-[rgba(21,101,192,0.1)] flex items-center justify-center text-[#1565C0]">
                <Shield size={16} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Reliability
                </span>
                <span className="text-sm font-bold text-white">
                  98% Client Retention
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10">
        <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="w-5 h-9 rounded-full border border-slate-600 flex justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] scroll-indicator" />
        </div>
      </div>
    </section>
  )
}
export default HeroSection

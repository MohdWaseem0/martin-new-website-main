"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft, Compass } from "lucide-react"
import { ParticleField } from "@/components/three/ParticleField"
import { GlassCard } from "@/components/shared/GlassCard"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050A1A] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Star Field backdrop */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Decorative Blob */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.06)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-md w-full text-center">
        <GlassCard className="bg-[rgba(13,22,55,0.55)] border-[rgba(0,180,255,0.25)] p-8 md:p-12 flex flex-col items-center gap-6 shadow-[0_20px_50px_rgba(0,180,255,0.1)]">
          <div className="w-16 h-16 rounded-full bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.2)] flex items-center justify-center text-[#00B4FF] glow-pulse mb-2">
            <Compass size={28} className="animate-spin" style={{ animationDuration: "12s" }} />
          </div>

          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00B4FF] to-white font-display leading-none">
            404
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-white">
            Lost In The Cosmos?
          </h2>

          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            The page you are looking for has drifted into deep space. Let's guide you back to the home coordinate.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-btn shadow-[0_4px_15px_rgba(0,180,255,0.2)] mt-4"
          >
            <ArrowLeft size={16} />
            Back Coordinate Home
          </Link>
        </GlassCard>
      </div>
    </main>
  )
}

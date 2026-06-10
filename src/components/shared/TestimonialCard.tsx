"use client"

import React from "react"
import { Star, Quote } from "lucide-react"
import { Testimonial } from "@/types"
import { GlassCard } from "./GlassCard"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <GlassCard className="relative flex flex-col justify-between h-full hover:border-[rgba(0,180,255,0.25)]">
      {/* Quote Icon Background decoration */}
      <div className="absolute top-6 right-8 text-[rgba(0,180,255,0.06)] pointer-events-none">
        <Quote size={56} className="rotate-180" />
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        {/* Rating Stars */}
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={16} className="fill-[#00B4FF] text-[#00B4FF]" />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium italic">
          "{testimonial.text}"
        </p>
      </div>

      {/* Role Badge */}
      <div className="mt-8 pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
            Client Review
          </span>
          <span className="text-sm font-bold text-white mt-1">
            Verified Partner
          </span>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] text-[#00B4FF]">
          {testimonial.role}
        </span>
      </div>
    </GlassCard>
  )
}

export default TestimonialCard

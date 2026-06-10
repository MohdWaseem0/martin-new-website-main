"use client"

import React from "react"
import { GraduationCap, Heart, Building2, ShoppingCart, Factory, ShoppingBag, Rocket, Headphones, ArrowUpRight } from "lucide-react"
import { Industry } from "@/types"
import { GlassCard } from "./GlassCard"

const iconMap: Record<string, React.ComponentType<any>> = {
  GraduationCap,
  Heart,
  Building2,
  ShoppingCart,
  Factory,
  ShoppingBag,
  Rocket,
  Headphones,
}

interface IndustryCardProps {
  industry: Industry
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
  const IconComponent = iconMap[industry.icon] || Rocket

  return (
    <GlassCard className="group flex flex-col justify-between h-full hover:border-[rgba(0,180,255,0.3)]">
      <div>
        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[rgba(0,180,255,0.2)] bg-[rgba(0,180,255,0.06)] text-[#00B4FF] group-hover:bg-[#00B4FF] group-hover:text-white transition-all duration-300">
            <IconComponent size={22} />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-[#00B4FF] transition-colors duration-300">
            {industry.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          {industry.description}
        </p>
      </div>

      {/* Detail trigger decorator */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00B4FF] mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        Industry Solutions
        <ArrowUpRight size={14} />
      </div>
    </GlassCard>
  )
}

export default IndustryCard

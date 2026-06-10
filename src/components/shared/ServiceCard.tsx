"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, Monitor, Code2, Smartphone, Cpu, TrendingUp, Cloud, Lightbulb, Workflow } from "lucide-react"
import { Service } from "@/types"
import { GlassCard } from "./GlassCard"

const iconMap: Record<string, React.ComponentType<any>> = {
  Monitor,
  Code2,
  Smartphone,
  Cpu,
  TrendingUp,
  Cloud,
  Lightbulb,
  Workflow
}

interface ServiceCardProps {
  service: Service
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Monitor

  return (
    <GlassCard className="group flex flex-col justify-between h-full hover:border-[rgba(0,180,255,0.3)]">
      <div>
        {/* Icon Container */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(0,180,255,0.05)]"
          style={{
            borderColor: `${service.color}33`,
            backgroundColor: `${service.color}10`,
            color: service.color,
          }}
        >
          <IconComponent size={24} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00B4FF] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Link */}
      <Link
        href={service.href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B4FF] hover:text-white transition-colors mt-auto group/link"
      >
        Learn More
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover/link:translate-x-1"
        />
      </Link>
    </GlassCard>
  )
}

export default ServiceCard

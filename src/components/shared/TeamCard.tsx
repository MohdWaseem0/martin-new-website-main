"use client"

import React, { useState } from "react"
import Image from "next/image"
import { TeamMember } from "@/types"
import { GlassCard } from "./GlassCard"

// Custom Linkedin brand SVG
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

interface TeamCardProps {
  member: TeamMember
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false)

  // Generate initials for gradient placeholder
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)

  return (
    <GlassCard className="group relative flex flex-col items-center text-center p-6 hover:border-[rgba(0,180,255,0.3)]">
      {/* Photo Container */}
      <div className="relative w-28 h-28 rounded-full overflow-hidden mb-6 border-2 border-[rgba(0,180,255,0.15)] group-hover:border-[#00B4FF] transition-colors duration-300 shadow-[0_0_20px_rgba(0,180,255,0.1)]">
        {imageError || !member.image ? (
          <div className="w-full h-full bg-gradient-to-br from-[#0A1128] via-[#0D1637] to-[#1565C0] flex items-center justify-center">
            <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00B4FF] to-white">
              {initials}
            </span>
          </div>
        ) : (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
            sizes="(max-width: 120px) 100vw"
          />
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00B4FF] transition-colors duration-300">
        {member.name}
      </h3>

      {/* Role */}
      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] text-[#00B4FF] mb-4">
        {member.role}
      </span>

      {/* Bio */}
      <p className="text-sm text-slate-400 leading-relaxed mb-6">
        {member.bio}
      </p>

      {/* LinkedIn Link */}
      <a
        href={member.linkedin}
        aria-label={`${member.name} LinkedIn Profile`}
        className="w-9 h-9 rounded-full bg-[rgba(0,180,255,0.05)] border border-[rgba(0,180,255,0.15)] flex items-center justify-center text-slate-400 hover:text-[#00B4FF] hover:border-[#00B4FF] hover:bg-[rgba(0,180,255,0.08)] transition-all duration-300 mt-auto"
      >
        <LinkedinIcon />
      </a>
    </GlassCard>
  )
}

export default TeamCard

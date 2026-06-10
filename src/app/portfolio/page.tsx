"use client"

import React, { useState } from "react"
import { ExternalLink, Layers, Monitor, Smartphone, Cpu, Workflow } from "lucide-react"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

interface Project {
  title: string
  category: "Web" | "Mobile" | "Software" | "Automation"
  description: string
  tech: string[]
  metrics: string
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<"All" | "Web" | "Mobile" | "Software" | "Automation">("All")

  const projects: Project[] = [
    {
      title: "LogiFlow Enterprise ERP",
      category: "Software",
      description: "A comprehensive supply chain and inventory management platform supporting 12 active warehouse hubs.",
      tech: ["Laravel", "React", "MySQL", "Docker"],
      metrics: "34% operational speedup",
    },
    {
      title: "CareFast Telehealth App",
      category: "Mobile",
      description: "A HIPAA-compliant patient-doctor portal supporting high-fidelity video consults and prescriptions.",
      tech: ["React Native", "NodeJS", "WebRTC", "MongoDB"],
      metrics: "12k+ active monthly patients",
    },
    {
      title: "EduNode E-Learning Portal",
      category: "Web",
      description: "A modern virtual classroom platform supporting quiz pipelines, video classrooms, and course tracks.",
      tech: ["NextJS", "TailwindCSS", "Firebase", "Mux Video"],
      metrics: "50k+ students enrolled",
    },
    {
      title: "SmartPOS Billing System",
      category: "Automation",
      description: "An automated billing, POS, and HRMS platform syncing transactions to ledger in real-time.",
      tech: ["React", "Express", "SQLite", "Electron"],
      metrics: "99.98% inventory tracking accuracy",
    },
    {
      title: "GlobalTrade CRM Engine",
      category: "Software",
      description: "Enterprise CRM supporting workflow automations, custom lead staging, and automated emailing.",
      tech: ["PHP", "Symfony", "PostgreSQL", "AWS"],
      metrics: "45% lead qualification lift",
    },
    {
      title: "AutoFlow Invoice Automation",
      category: "Automation",
      description: "Background processing utility reading bank feeds to automatically match, create, and send invoices.",
      tech: ["Python", "NodeJS", "OCR Engine", "Zapier APIs"],
      metrics: "Save 30 hrs manual entry/week",
    },
  ]

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const filters: ("All" | "Web" | "Mobile" | "Software" | "Automation")[] = [
    "All",
    "Web",
    "Mobile",
    "Software",
    "Automation",
  ]

  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Our Portfolio"
            title="Sleek Deliveries & Case Studies"
            subtitle="Explore a selection of high-performance custom ERPs, mobile applications, e-learning environments, and workflow automations."
          />
        </ScrollReveal>

        {/* Filter Navigation */}
        <ScrollReveal variant="fadeUp" className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#00B4FF] text-white border-[#00B4FF] shadow-[0_0_15px_rgba(0,180,255,0.25)]"
                  : "bg-[rgba(13,22,55,0.4)] text-slate-400 border-[rgba(0,180,255,0.15)] hover:text-white hover:border-[#00B4FF]"
              }`}
            >
              {filter}
            </button>
          ))}
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              variant="fadeUp"
              delay={index * 0.05}
              className="h-full"
            >
              <GlassCard className="h-full bg-[rgba(13,22,55,0.3)] hover:border-[rgba(0,180,255,0.25)] flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] text-[#00B4FF]">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold text-[#00B4FF] bg-[rgba(0,180,255,0.04)] px-2 py-0.5 rounded">
                      {project.metrics}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 text-left">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6 text-left">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto border-t border-[rgba(255,255,255,0.05)] pt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold px-2 py-1 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ExternalLink size={16} className="text-slate-500 hover:text-[#00B4FF] transition-colors cursor-pointer" />
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  )
}

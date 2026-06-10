"use client"

import React from "react"
import { Check, X, Shield, Users, Code, Award } from "lucide-react"
import { SectionHeader } from "../shared/SectionHeader"
import { GlassCard } from "../shared/GlassCard"
import { ScrollReveal } from "../shared/ScrollReveal"

export const WhyUsSection: React.FC = () => {
  const differentiators = [
    {
      icon: Award,
      title: "ISO 9001:2015 Standards",
      desc: "Our engineering and delivery processes are ISO certified, guaranteeing consistent, error-free product execution.",
    },
    {
      icon: Users,
      title: "Direct Leadership Alignment",
      desc: "Work closely with our executive leadership team (CEO Areeb, CMO Waseem) directly involved in your roadmap.",
    },
    {
      icon: Code,
      title: "Advanced Technology Stack",
      desc: "No outdated templating. We build lightweight, ultra-scalable frameworks optimized for speed, performance, and SEO.",
    },
    {
      icon: Shield,
      title: "Strict Security Audits",
      desc: "Every system undergoes comprehensive static analysis, security scans, and strict vulnerability mitigation.",
    },
  ]

  const comparisonRows = [
    { feature: "ISO 9001:2015 Certified", us: true, others: false },
    { feature: "Direct Leadership Involvement", us: true, others: false },
    { feature: "NextJS 15 & React 19 Standards", us: true, others: "Rarely" },
    { feature: "No Hidden Costs or Outsource Leakage", us: true, others: false },
    { feature: "Dedicated Post-Launch Support SLA", us: true, others: "Basic" },
  ]

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Why Partner With Us"
            title="The Martin Global Edge"
            subtitle="Discover the engineering, quality frameworks, and corporate principles that differentiate us from standard IT companies."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          {/* Left Column: Feature List */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon
              return (
                <ScrollReveal
                  key={index}
                  variant="fadeUp"
                  delay={index * 0.05}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-[rgba(0,180,255,0.03)] border border-transparent hover:border-[rgba(0,180,255,0.1)] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] flex items-center justify-center text-[#00B4FF]">
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-white mb-1">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Right Column: Comparison Table */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="scaleIn">
              <GlassCard className="bg-[rgba(13,22,55,0.4)] border-[rgba(0,180,255,0.15)] p-6 md:p-8">
                <h3 className="text-lg font-bold text-white mb-6 text-left">
                  Vendor Head-to-Head Comparison
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[rgba(0,180,255,0.15)] pb-3">
                        <th className="text-xs font-semibold text-slate-400 uppercase py-3">
                          Standard Feature
                        </th>
                        <th className="text-xs font-semibold text-[#00B4FF] uppercase py-3 px-3 text-center">
                          Our Team
                        </th>
                        <th className="text-xs font-semibold text-slate-500 uppercase py-3 text-center">
                          Others
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.01)] transition-colors"
                        >
                          <td className="py-4 text-sm font-semibold text-slate-200">
                            {row.feature}
                          </td>
                          <td className="py-4 px-3 text-center">
                            {row.us === true ? (
                              <Check size={18} className="text-[#00B4FF] mx-auto" />
                            ) : (
                              <span className="text-xs font-bold text-[#00B4FF]">
                                {row.us}
                              </span>
                            )}
                          </td>
                          <td className="py-4 text-center">
                            {row.others === false ? (
                              <X size={18} className="text-slate-600 mx-auto" />
                            ) : (
                              <span className="text-xs font-semibold text-slate-500">
                                {row.others}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection

"use client"

import React from "react"
import { SERVICES } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import Link from "next/link"
import { ArrowRight, MessageSquare } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] top-[10%] left-[-10%]" />
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(21,101,192,0.03)] bottom-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="What We Deliver"
            title="Premium Tech Engineering Services"
            subtitle="We engineer end-to-end digital experiences, operations platforms, mobile products, and scalable cloud systems. Explore our solutions."
          />
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-20">
          {SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.id}
              variant="fadeUp"
              delay={index * 0.05}
              className="h-full"
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Inner Banner */}
        <ScrollReveal variant="scaleIn">
          <div className="rounded-3xl border border-[rgba(0,180,255,0.2)] bg-gradient-to-br from-[#0A1128] to-[#0D1637] p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
              Need a Custom Tailored Software Architecture?
            </h2>
            <p className="text-sm md:text-base text-slate-400 mb-6 max-w-2xl mx-auto">
              Our engineering architects can draft a customized blueprint for your CRM, ERP, API integration, or native app idea. Let's align on a plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-btn"
              >
                Draft A Brief
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/918868863355"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white outline-btn"
              >
                <MessageSquare size={16} className="text-[#00B4FF]" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}

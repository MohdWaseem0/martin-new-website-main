"use client"

import React from "react"
import { SERVICES } from "@/lib/constants"
import { SectionHeader } from "../shared/SectionHeader"
import { ServiceCard } from "../shared/ServiceCard"
import { ScrollReveal } from "../shared/ScrollReveal"

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="bg-blob bg-blob-animated w-[400px] h-[400px] bg-[rgba(0,180,255,0.04)] bottom-[10%] left-[-10%]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Core Capabilities"
            title="Premium IT Solutions & Digital Services"
            subtitle="Explore our comprehensive suite of advanced technology services tailored to scale your enterprise and accelerate digital transformation."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}

export default ServicesSection

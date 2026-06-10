"use client"

import React from "react"
import { HeroSection } from "@/components/home/HeroSection"
import { CompanyStrip } from "@/components/home/CompanyStrip"
import { ServicesSection } from "@/components/home/ServicesSection"
import { StatsSection } from "@/components/home/StatsSection"
import { IndustriesTicker } from "@/components/home/IndustriesTicker"
import { TechStackSection } from "@/components/home/TechStackSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { WhyUsSection } from "@/components/home/WhyUsSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { CTABanner } from "@/components/home/CTABanner"
import { ContactPreview } from "@/components/home/ContactPreview"

export default function Home() {
  return (
    <main className="flex-grow pt-[72px]">
      <HeroSection />
      <CompanyStrip />
      <ServicesSection />
      <StatsSection />
      <IndustriesTicker />
      <TechStackSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactPreview />
    </main>
  )
}

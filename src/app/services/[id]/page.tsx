"use client"

import React, { use } from "react"
import { notFound, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, MessageSquare, Monitor, Code2, Smartphone, Cpu, TrendingUp, Cloud, Lightbulb, Workflow, CheckCircle } from "lucide-react"
import { SERVICES, COMPANY } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { ScrollReveal } from "@/components/shared/ScrollReveal"

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

// Custom details for each service to enrich the individual page
const serviceDetailsMap: Record<
  string,
  {
    features: string[]
    technologies: string[]
    benefits: string[]
  }
> = {
  "web-design": {
    features: [
      "Custom UI/UX Prototyping & Wireframing",
      "Brand Style Guides & Visual Systems",
      "Responsive & High-Fidelity Layout Design",
      "User Research & Usability Auditing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS", "Framer Motion"],
    benefits: [
      "Increased user engagement & dwell time",
      "Stronger brand credibility and identity",
      "Optimized layout conversion funnels",
    ],
  },
  "web-development": {
    features: [
      "NextJS & React Enterprise Applications",
      "SEO-Optimized Static & Dynamic Sites",
      "Fast API Integrations & Core Logic",
      "Headless CMS & Commerce Backends",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind"],
    benefits: [
      "Lightning-fast page loading speeds",
      "Seamless responsiveness across all screens",
      "Robust core security standards",
    ],
  },
  "mobile-app-development": {
    features: [
      "Native iOS App Development (Swift)",
      "Native Android App Development (Kotlin)",
      "Cross-Platform Mobile Apps (React Native/Flutter)",
      "App Store & Google Play Launch Support",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    benefits: [
      "Direct engagement via push notifications",
      "Smooth offline performance capabilities",
      "Hardware integrations (GPS, Camera, Biometrics)",
    ],
  },
  "custom-software": {
    features: [
      "Tailored CRM & Vendor Management Systems",
      "Bespoke ERP & Inventory Trackers",
      "Financial Ledger & Transaction Engines",
      "Workflow & Team Collaboration Portals",
    ],
    technologies: ["Laravel", "PHP", "Node.js", "MySQL", "MongoDB", "Docker"],
    benefits: [
      "Exact alignment with your workflow needs",
      "Reduced manual oversight and spreadsheet chaos",
      "Consolidated multi-department analytics",
    ],
  },
  "digital-marketing": {
    features: [
      "Search Engine Optimization (SEO) Audits",
      "Pay-Per-Click Advertising (Google & Meta)",
      "Content Strategy & Social Media Planning",
      "Conversion Rate Optimization (CRO)",
    ],
    technologies: ["Google Analytics", "Google Ads", "Meta Ads Manager", "SEMrush"],
    benefits: [
      "Higher rankings on Google Search",
      "Lower customer acquisition costs",
      "Increased inbound leads and transactions",
    ],
  },
  "cloud-solutions": {
    features: [
      "Cloud Infrastructure Migration (AWS/GCP)",
      "DevOps Automation & CI/CD Pipelines",
      "Serverless Scaling & Compute Optimization",
      "Database Clustering & Backup Systems",
    ],
    technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
    benefits: [
      "99.9% system availability SLA",
      "Automatic scaling to handle traffic spikes",
      "Reduced overall hosting overhead costs",
    ],
  },
  "it-consulting": {
    features: [
      "Enterprise Architecture Audits",
      "Software & Vendor Selection Analysis",
      "Legacy Codebase Modernization Blueprints",
      "Technical Due Diligence & Feasibility",
    ],
    technologies: ["System UML", "Data Modelling", "Risk Analysis", "Roadmap Drafting"],
    benefits: [
      "Clear strategic roadmap for technology",
      "Mitigated technical debt and platform lock-in",
      "Optimized developer resources and headcount",
    ],
  },
  "software-automation": {
    features: [
      "Automated Billing & Invoicing Systems",
      "HRMS & Attendance Integrations",
      "API Bridges & Data Synchronization",
      "Automated Email & SMS Alerts",
    ],
    technologies: ["Workflow Engine", "Node-RED", "Zapier API", "Python Scripts", "Cron Tasks"],
    benefits: [
      "Elimination of repetitive manual entries",
      "Near-zero data entry mismatch errors",
      "Accelerated invoice processing times",
    ],
  },
}

interface ServicePageProps {
  params: Promise<{ id: string }>
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const router = useRouter()
  const { id } = use(params)

  // Find the service by matching route parameter
  const service = SERVICES.find((s) => s.id === id)
  const details = serviceDetailsMap[id]

  if (!service || !details) {
    notFound()
  }

  const IconComponent = iconMap[service.icon] || Monitor

  return (
    <main className="flex-grow pt-[120px] pb-24 overflow-hidden relative">
      {/* Decorative Blur Blobs */}
      <div
        className="bg-blob bg-blob-animated w-[400px] h-[400px] top-[10%] left-[-10%]"
        style={{ backgroundColor: `${service.color}05` }}
      />
      <div
        className="bg-blob bg-blob-animated w-[350px] h-[350px] bottom-[20%] right-[-10%] float-animation-delayed"
        style={{ backgroundColor: `${service.color}05` }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Back Link */}
        <ScrollReveal variant="fadeUp" className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B4FF] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to All Services
          </Link>
        </ScrollReveal>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <ScrollReveal variant="slideLeft" className="lg:col-span-7 text-left flex flex-col gap-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center border text-2xl shadow-[0_0_20px_rgba(0,180,255,0.05)]"
              style={{
                borderColor: `${service.color}33`,
                backgroundColor: `${service.color}15`,
                color: service.color,
              }}
            >
              <IconComponent size={28} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-none">
              {service.title}
            </h1>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed">
              {service.description} We build secure, efficient frameworks designed to improve user conversions and operational output.
            </p>
          </ScrollReveal>

          {/* Quick Info card */}
          <ScrollReveal variant="slideRight" className="lg:col-span-5">
            <GlassCard className="bg-[rgba(13,22,55,0.35)] border-[rgba(0,180,255,0.15)] p-6 text-left">
              <h3 className="text-base font-bold text-white mb-4">Core Technology Stack</h3>
              <div className="flex flex-wrap gap-2.5">
                {details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Detailed Grid: Features & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Features card */}
          <ScrollReveal variant="fadeUp" className="h-full">
            <GlassCard className="bg-[rgba(5,10,26,0.65)] hover:border-[rgba(0,180,255,0.25)] h-full p-6 text-left">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-[rgba(0,180,255,0.15)] pb-3">
                Key Offerings & Scope
              </h3>
              <ul className="flex flex-col gap-4">
                {details.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300 items-start">
                    <CheckCircle size={16} className="text-[#00B4FF] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          {/* Benefits card */}
          <ScrollReveal variant="fadeUp" delay={0.05} className="h-full">
            <GlassCard className="bg-[rgba(5,10,26,0.65)] hover:border-[rgba(0,180,255,0.25)] h-full p-6 text-left">
              <h3 className="text-lg font-bold text-white mb-6 border-b border-[rgba(0,180,255,0.15)] pb-3">
                Strategic Business Value
              </h3>
              <ul className="flex flex-col gap-4">
                {details.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300 items-start">
                    <CheckCircle size={16} className="text-[#00B4FF] mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Contact Banner Specific to service */}
        <ScrollReveal variant="scaleIn">
          <div className="rounded-3xl border border-[rgba(0,180,255,0.2)] bg-gradient-to-br from-[#0A1128] to-[#0D1637] p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
              Get Started with {service.title}
            </h2>
            <p className="text-sm md:text-base text-slate-400 mb-6 max-w-2xl mx-auto">
              Draft your roadmap today. Click below to submit your details directly via WhatsApp or consult our team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-btn shadow-[0_4px_15px_rgba(0,180,255,0.25)]"
              >
                Inquire Now
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/918868863355?text=Hi,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
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

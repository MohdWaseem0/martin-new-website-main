"use client"

import React from "react"
import Link from "next/link"
import { Monitor, Code2, Smartphone, Cpu, TrendingUp, Cloud, Lightbulb, Workflow, Mail, Phone, MapPin } from "lucide-react"
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/constants"

// Icon mapping helper
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

// Custom brand SVGs matching Lucide stroke style
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export const Footer: React.FC = () => {
  const socialIcons = [
    { icon: LinkedinIcon, href: COMPANY.socials.linkedin, label: "LinkedIn" },
    { icon: FacebookIcon, href: COMPANY.socials.facebook, label: "Facebook" },
    { icon: InstagramIcon, href: COMPANY.socials.instagram, label: "Instagram" },
    { icon: TwitterIcon, href: COMPANY.socials.twitter, label: "Twitter" },
  ]

  // Filter out Services from quick links since it has its own column
  const footerQuickLinks = NAV_LINKS.filter(link => link.label !== "Services" && link.label !== "Home")

  return (
    <footer className="relative bg-[#050A1A] border-t border-[rgba(0,180,255,0.1)] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[rgba(0,180,255,0.03)] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[rgba(21,101,192,0.03)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Identity & Socials */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1565C0] to-[#00B4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,180,255,0.3)]">
                <span className="text-white font-extrabold text-lg tracking-tighter">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base md:text-lg tracking-wide leading-none group-hover:text-[#00B4FF] transition-colors">
                  MARTIN GLOBAL
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-widest mt-0.5 leading-none">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {COMPANY.tagline}. We deliver premium IT solutions, digital transformation services, and custom software development that drive sustainable business growth.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.05)] border border-[rgba(0,180,255,0.15)] flex items-center justify-center text-slate-400 hover:text-[#00B4FF] hover:border-[#00B4FF] hover:bg-[rgba(0,180,255,0.08)] transition-all duration-300"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#00B4FF] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-[#00B4FF] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {service.title}
                  </Link>
                </li>
              ))}
              {SERVICES.length > 5 && (
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-[#00B4FF] font-semibold hover:underline flex items-center"
                  >
                    View All Services &rarr;
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-base uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-slate-400">
                <MapPin className="text-[#00B4FF] flex-shrink-0" size={18} />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="text-[#00B4FF] flex-shrink-0" size={18} />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex gap-3 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="text-[#00B4FF] flex-shrink-0" size={18} />
                  <span className="break-all">{COMPANY.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gradient-divider w-full mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer

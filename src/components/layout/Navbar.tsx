"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ArrowRight, Monitor, Code2, Smartphone, Cpu, TrendingUp, Cloud, Lightbulb, Workflow } from "lucide-react"
import { SERVICES, NAV_LINKS, COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

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

interface NavbarProps {
  onMobileMenuOpen: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onMobileMenuOpen }) => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 h-[72px] transition-all duration-300 flex items-center border-b",
        isScrolled
          ? "bg-var(--surface-glass) backdrop-blur-md border-[rgba(0,180,255,0.15)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo and Wordmark */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Martin Global Technologies Logo"
              fill
              className="object-contain"
              sizes="36px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base md:text-lg tracking-wide leading-none group-hover:text-[#00B4FF] transition-colors duration-300">
              MARTIN GLOBAL
            </span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-widest mt-0.5 leading-none">
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            const isServices = link.label === "Services"

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredLink(link.label)
                  if (isServices) setIsMegaMenuOpen(true)
                }}
                onMouseLeave={() => {
                  setHoveredLink(null)
                  if (isServices) setIsMegaMenuOpen(false)
                }}
              >
                {isServices ? (
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                      isActive ? "text-[#00B4FF]" : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-300",
                        isMegaMenuOpen ? "rotate-180 text-[#00B4FF]" : "text-slate-400"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "relative block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      isActive ? "text-[#00B4FF]" : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#1565C0] to-[#00B4FF] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )}

                {/* Services Mega Menu */}
                {isServices && (
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[680px] z-50 pointer-events-auto"
                      >
                        <div className="glass-card bg-[rgba(5,10,26,0.95)] backdrop-blur-xl border border-[rgba(0,180,255,0.2)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-2 gap-4">
                          {SERVICES.map((service) => {
                            const IconComponent = iconMap[service.icon] || Monitor
                            return (
                              <Link
                                key={service.id}
                                href={service.href}
                                className="flex gap-4 p-3 rounded-xl hover:bg-[rgba(0,180,255,0.06)] border border-transparent hover:border-[rgba(0,180,255,0.15)] transition-all duration-300 group/item"
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] flex items-center justify-center text-[#00B4FF] group-hover/item:bg-[#00B4FF] group-hover/item:text-white transition-all duration-300">
                                  <IconComponent size={20} />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-white group-hover/item:text-[#00B4FF] transition-colors duration-300 flex items-center gap-1">
                                    {service.title}
                                  </span>
                                  <span className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                                    {service.description}
                                  </span>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )
          })}
        </nav>

        {/* Right Action Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white gradient-btn shadow-[0_4px_20px_rgba(0,180,255,0.25)] hover:shadow-[0_4px_25px_rgba(0,180,255,0.45)] transition-all duration-300"
          >
            Get In Touch
            <ArrowRight size={15} />
          </Link>

          <button
            onClick={onMobileMenuOpen}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] transition-all duration-300 cursor-pointer"
            aria-label="Open mobile menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
export default Navbar

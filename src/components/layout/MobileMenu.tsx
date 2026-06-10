"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { X, ChevronDown, ArrowRight, Monitor, Code2, Smartphone, Cpu, TrendingUp, Cloud, Lightbulb, Workflow } from "lucide-react"
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

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname()
  const [isServicesExpanded, setIsServicesExpanded] = useState(false)

  // Stagger variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[rgba(5,10,26,0.98)] backdrop-blur-xl overflow-y-auto lg:hidden flex flex-col"
        >
          {/* Header Bar */}
          <div className="h-[72px] flex items-center justify-between px-4 md:px-8 border-b border-[rgba(0,180,255,0.15)] flex-shrink-0">
            {/* Logo */}
            <Link href="/" onClick={onClose} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1565C0] to-[#00B4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,180,255,0.3)]">
                <span className="text-white font-extrabold text-lg tracking-tighter">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base tracking-wide leading-none">
                  MARTIN GLOBAL
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-widest mt-0.5 leading-none">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[rgba(0,180,255,0.08)] border border-[rgba(0,180,255,0.15)] transition-all duration-300 cursor-pointer"
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow flex flex-col justify-between p-6 md:p-10">
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                const isServices = link.label === "Services"

                return (
                  <motion.div key={link.label} variants={itemVariants}>
                    {isServices ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                          className={cn(
                            "flex items-center justify-between w-full py-2 text-xl font-bold text-left cursor-pointer transition-colors duration-300",
                            isActive || isServicesExpanded ? "text-[#00B4FF]" : "text-slate-300"
                          )}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={20}
                            className={cn(
                              "transition-transform duration-300 text-slate-400",
                              isServicesExpanded && "rotate-180 text-[#00B4FF]"
                            )}
                          />
                        </button>

                        {/* Accordion Content */}
                        <AnimatePresence initial={false}>
                          {isServicesExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 border-l border-[rgba(0,180,255,0.15)] mt-2 space-y-2"
                            >
                              {SERVICES.map((service) => {
                                const IconComponent = iconMap[service.icon] || Monitor
                                return (
                                  <Link
                                    key={service.id}
                                    href={service.href}
                                    onClick={onClose}
                                    className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[rgba(0,180,255,0.06)] transition-all duration-300"
                                  >
                                    <div className="w-8 h-8 rounded-md bg-[rgba(0,180,255,0.08)] flex items-center justify-center text-[#00B4FF]">
                                      <IconComponent size={16} />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-200">
                                      {service.title}
                                    </span>
                                  </Link>
                                )
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          "block py-2 text-xl font-bold transition-colors duration-300",
                          isActive ? "text-[#00B4FF]" : "text-slate-300 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </motion.nav>

            {/* CTA & Contact Details Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10 space-y-6 pt-6 border-t border-[rgba(0,180,255,0.15)]"
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-base font-semibold text-white gradient-btn shadow-[0_4px_20px_rgba(0,180,255,0.25)]"
              >
                Get In Touch
                <ArrowRight size={18} />
              </Link>

              <div className="space-y-2 text-center sm:text-left">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Have a question?
                </p>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="block text-base font-bold text-white hover:text-[#00B4FF] transition-colors"
                >
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default MobileMenu

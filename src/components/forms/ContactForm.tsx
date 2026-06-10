"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { MessageSquare, Send } from "lucide-react"
import { SERVICES, COMPANY } from "@/lib/constants"
import { getWhatsAppLink } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  compact?: boolean
}

export const ContactForm: React.FC<ContactFormProps> = ({ compact = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  })

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true)

    // Construct WhatsApp message content
    const textMsg = `Hello Martin Global Technologies,
I would like to request a consultation. Here are my details:

• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}
${data.company ? `• Company: ${data.company}\n` : ""}• Service Requested: ${data.service}
• Estimated Budget: ${data.budget}

Message:
${data.message}

Please get back to me. Thank you!`

    // Generate WhatsApp link and open it in a new window
    const waLink = getWhatsAppLink(COMPANY.whatsapp, textMsg)
    
    // Tiny delay to look realistic
    setTimeout(() => {
      window.open(waLink, "_blank", "noopener,noreferrer")
      setIsSubmitting(false)
      reset()
    }, 800)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 text-left"
    >
      {/* Name & Email row */}
      <div className={`grid grid-cols-1 ${compact ? "" : "sm:grid-cols-2"} gap-4`}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Areeb Khan"
            {...register("name")}
            className="form-input"
          />
          {errors.name && (
            <span className="text-xs text-rose-500 pl-1">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="areeb@example.com"
            {...register("email")}
            className="form-input"
          />
          {errors.email && (
            <span className="text-xs text-rose-500 pl-1">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Phone & Company row */}
      <div className={`grid grid-cols-1 ${compact ? "" : "sm:grid-cols-2"} gap-4`}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91-8868863355"
            {...register("phone")}
            className="form-input"
          />
          {errors.phone && (
            <span className="text-xs text-rose-500 pl-1">{errors.phone.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            Company Name
          </label>
          <input
            id="company"
            type="text"
            placeholder="Martin Global Tech"
            {...register("company")}
            className="form-input"
          />
        </div>
      </div>

      {/* Service & Budget row */}
      <div className={`grid grid-cols-1 ${compact ? "" : "sm:grid-cols-2"} gap-4`}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            Select Service *
          </label>
          <select
            id="service"
            {...register("service")}
            className="form-input bg-[#0A1128]"
          >
            <option value="">-- Choose Option --</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <span className="text-xs text-rose-500 pl-1">{errors.service.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
            Project Budget *
          </label>
          <select
            id="budget"
            {...register("budget")}
            className="form-input bg-[#0A1128]"
          >
            <option value="">-- Budget Range --</option>
            <option value="Under $5k">Under $5k</option>
            <option value="$5k - $10k">$5k - $10k</option>
            <option value="$10k - $25k">$10k - $25k</option>
            <option value="$25k+">$25k+</option>
          </select>
          {errors.budget && (
            <span className="text-xs text-rose-500 pl-1">{errors.budget.message}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider pl-1">
          Project Details *
        </label>
        <textarea
          id="message"
          rows={compact ? 3 : 5}
          placeholder="Describe your roadmap, goals, requirements..."
          {...register("message")}
          className="form-input resize-none"
        />
        {errors.message && (
          <span className="text-xs text-rose-500 pl-1">{errors.message.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-base font-semibold text-white gradient-btn shadow-[0_4px_20px_rgba(0,180,255,0.25)] mt-2 disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? (
          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
        ) : (
          <>
            <MessageSquare size={18} />
            Submit via WhatsApp
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm

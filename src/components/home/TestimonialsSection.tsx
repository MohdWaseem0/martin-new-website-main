"use client"

import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"
import { SectionHeader } from "../shared/SectionHeader"
import { TestimonialCard } from "../shared/TestimonialCard"
import { ScrollReveal } from "../shared/ScrollReveal"

export const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden bg-[#050A1A]">
      {/* Decorative Blur Blobs */}
      <div className="bg-blob bg-blob-animated w-[350px] h-[350px] bg-[rgba(0,180,255,0.03)] bottom-[-5%] left-[20%] float-animation" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            overline="Client Success"
            title="What Our Partners Say About Us"
            subtitle="Read feedback from client organizations and enterprise operators who transformed their processes with our custom software."
          />
        </ScrollReveal>

        {/* Embla Carousel Viewport */}
        <div className="relative mt-8 max-w-5xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {TESTIMONIALS.map((testimonial, idx) => (
                <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
                  <div className="h-full py-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-[rgba(0,180,255,0.05)] border border-[rgba(0,180,255,0.15)] hover:border-[#00B4FF] hover:text-[#00B4FF] flex items-center justify-center text-slate-400 hover:bg-[rgba(0,180,255,0.08)] transition-all duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === selectedIndex ? "bg-[#00B4FF] w-6" : "bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-[rgba(0,180,255,0.05)] border border-[rgba(0,180,255,0.15)] hover:border-[#00B4FF] hover:text-[#00B4FF] flex items-center justify-center text-slate-400 hover:bg-[rgba(0,180,255,0.08)] transition-all duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

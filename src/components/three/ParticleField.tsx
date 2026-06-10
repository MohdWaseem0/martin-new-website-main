"use client"

import React, { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  fadeSpeed: number
}

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || 400
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create a particle
    const createParticle = (x?: number, y?: number): Particle => {
      const colors = ["#00B4FF", "#1565C0", "#ffffff"]
      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2 - 0.1, // Slight upward drift
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      const density = Math.floor((canvas.width * canvas.height) / 8000)
      const count = Math.min(density, 120) // Cap count for performance
      for (let i = 0; i < count; i++) {
        particles.push(createParticle())
      }
    }

    initParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.speedX
        p.y += p.speedY

        // Bounce/Wrap borders
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0) {
          p.y = canvas.height
          p.opacity = 0
        }

        // Twinkle/Fade effect
        p.opacity += p.fadeSpeed
        if (p.opacity > 0.8 || p.opacity < 0.15) {
          p.fadeSpeed *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity))
        ctx.shadowBlur = p.size * 2
        ctx.shadowColor = p.color
        ctx.fill()
      })

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0 // Reset shadow

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  )
}

export default ParticleField

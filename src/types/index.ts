export interface Service {
  id: string
  title: string
  description: string
  icon: string
  href: string
  color: string
}

export interface Industry {
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  text: string
  role: string
  rating: number
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

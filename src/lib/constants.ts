import type { Service, Industry, TeamMember, ProcessStep, Testimonial, Stat } from "@/types"

export const COMPANY = {
  name: "Martin Global Technologies Pvt. Ltd.",
  short: "Martin Global Technologies",
  tagline: "Empowering Businesses Through Technology & Innovation",
  tagline2: "Building Digital Excellence for Modern Businesses",
  phone: "+91-8868863355",
  whatsapp: "918868863355",
  email: "info@martinglobaltechnologies.tech",
  website: "martinglobaltechnologies.tech",
  address: "Habitat Centre, Aligarh 202001, Uttar Pradesh, India",
  socials: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
}

export const STATS: Stat[] = [
  { value: 1250, suffix: "+", label: "Projects Delivered" },
  { value: 980, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Industries Served" },
  { value: 120, suffix: "+", label: "Team Members" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
]

export const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "Web Design & UI/UX",
    description: "Creative, responsive designs that deliver exceptional user experiences and strengthen your brand identity.",
    icon: "Monitor",
    href: "/services/web-design",
    color: "#0099FF",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, scalable, and secure web solutions built with the latest technologies to drive business growth.",
    icon: "Code2",
    href: "/services/web-development",
    color: "#0066FF",
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description: "High-performance iOS and Android apps that engage users and accelerate your business goals.",
    icon: "Smartphone",
    href: "/services/mobile-app-development",
    color: "#00B4FF",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Tailored software solutions designed to solve unique business challenges and improve operational efficiency.",
    icon: "Cpu",
    href: "/services/custom-software",
    color: "#0080FF",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Strategic digital marketing that increases visibility, drives quality traffic, and boosts conversions.",
    icon: "TrendingUp",
    href: "/services/digital-marketing",
    color: "#0099CC",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to optimize operations, reduce costs, and ensure business continuity.",
    icon: "Cloud",
    href: "/services/cloud-solutions",
    color: "#00AAFF",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description: "Expert IT consulting to help you make smart technology decisions, optimize processes, and achieve goals.",
    icon: "Lightbulb",
    href: "/services/it-consulting",
    color: "#0077DD",
  },
  {
    id: "software-automation",
    title: "Software Dev & Automation",
    description: "Intelligent ERP, CRM, inventory, and HRMS systems that automate workflows and scale with your business.",
    icon: "Workflow",
    href: "/services/software-automation",
    color: "#0088EE",
  },
]

export const INDUSTRIES: Industry[] = [
  { title: "Education", description: "Digital learning platforms, school management systems, and e-learning solutions.", icon: "GraduationCap" },
  { title: "Healthcare", description: "Healthcare apps, telemedicine platforms, patient portals, and hospital management.", icon: "Heart" },
  { title: "Real Estate", description: "Property listings, CRM solutions, real estate portals, and management systems.", icon: "Building2" },
  { title: "Retail", description: "Retail management systems, POS solutions, inventory management, and CRM.", icon: "ShoppingCart" },
  { title: "Manufacturing", description: "Production management, supply chain solutions, and operational automation systems.", icon: "Factory" },
  { title: "E-Commerce", description: "Custom e-commerce platforms, payment gateways, and seamless shopping experiences.", icon: "ShoppingBag" },
  { title: "Startups", description: "MVP development, scalable solutions, and digital products built for rapid growth.", icon: "Rocket" },
  { title: "Service Businesses", description: "Custom software, CRM, and automation tools to streamline business operations.", icon: "Headphones" },
]

export const TEAM: TeamMember[] = [
  {
    name: "Areeb Khan",
    role: "Chief Executive Officer (CEO)",
    bio: "Visionary leader driving Martin Global's technology strategy, client partnerships, and global expansion. Areeb brings deep expertise in digital transformation and building high-performance technology teams.",
    image: "/images/team/areeb-khan.jpg",
    linkedin: "#",
  },
  {
    name: "Mohammad Waseem",
    role: "Chief Marketing Officer (CMO)",
    bio: "Brand strategist and growth architect, Mohammad Waseem leads Martin Global's marketing vision, digital presence, and business development — building the brand that clients trust and competitors respect.",
    image: "/images/team/mohammad-waseem.jpg",
    linkedin: "#",
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Discovery", description: "We understand your business goals, target audience, and project requirements in depth.", icon: "Search" },
  { step: "02", title: "Planning", description: "We define the project scope, create a detailed roadmap, and allocate the right resources.", icon: "ClipboardList" },
  { step: "03", title: "Design", description: "We craft intuitive UI/UX designs that are visually appealing, on-brand, and user-friendly.", icon: "Palette" },
  { step: "04", title: "Development", description: "Our developers build high-quality, scalable, and secure solutions using industry best practices.", icon: "Code2" },
  { step: "05", title: "Testing", description: "Comprehensive QA testing ensures performance, security, cross-device compatibility, and reliability.", icon: "CheckCircle" },
  { step: "06", title: "Deployment", description: "We deploy seamlessly with zero downtime, then provide ongoing support to keep your solution running at its best.", icon: "Rocket" },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "The team delivered a solution that perfectly met our needs. Their professionalism and dedication throughout the project were exceptional.",
    role: "Business Owner",
    rating: 5,
  },
  {
    text: "We are very satisfied with the outcome. The solution is scalable, efficient, and has significantly improved our overall processes and productivity.",
    role: "Operations Manager",
    rating: 5,
  },
  {
    text: "Great experience from start to finish. The team was responsive, knowledgeable, and delivered high-quality results on time and within budget.",
    role: "Founder",
    rating: 5,
  },
]

export const TECH_STACK: Record<string, string[]> = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React"],
  Backend: ["PHP", "Node.js", "Laravel"],
  Database: ["MySQL", "MongoDB"],
  Cloud: ["AWS", "Google Cloud", "Azure"],
  Mobile: ["Kotlin", "Swift", "Flutter", "React Native", "Java", "Firebase"],
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

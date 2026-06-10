import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ClarityProvider from "@/components/shared/ClarityProvider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#050A1A",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Martin Global Technologies | Premium IT Solutions & Digital Transformation",
    template: "%s | Martin Global Technologies",
  },
  description: "Martin Global Technologies Pvt. Ltd. delivers premium IT solutions, software development, cloud services, cyber security, and digital transformation in Aligarh, India.",
  keywords: ["IT Solutions", "Digital Transformation", "Software Development", "Cloud Solutions", "Aligarh IT Company", "Martin Global Technologies"],
  metadataBase: new URL("https://martinglobaltechnologies.tech"),
  openGraph: {
    title: "Martin Global Technologies | Premium IT Solutions",
    description: "Empowering Businesses Through Technology & Innovation. We build state-of-the-art digital experiences.",
    url: "https://martinglobaltechnologies.tech",
    siteName: "Martin Global Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Global Technologies | Premium IT Solutions",
    description: "Empowering Businesses Through Technology & Innovation.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--cosmos-void)] text-[var(--text-primary)] font-sans antialiased overflow-x-hidden flex flex-col">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <ClarityProvider />
      </body>
    </html>
  )
}

"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "./hero-section"
import { HeroSectionMobile } from "./hero-section-mobile"

export function HeroResponsive() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center bg-[rgb(8,8,16)]">
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </section>
    )
  }

  return isMobile ? <HeroSectionMobile /> : <HeroSection />
}

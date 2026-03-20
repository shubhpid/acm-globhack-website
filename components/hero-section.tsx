"use client"

import { HeroSectionMobile } from "@/components/hero-section-mobile"
import { HeroSectionDesktop } from "@/components/hero-section-desktop"

export function HeroSection() {
  return (
    <>
      {/* Mobile version - shown on screens smaller than lg (1024px) */}
      <div className="block lg:hidden">
        <HeroSectionMobile />
      </div>
      
      {/* Desktop version - shown on lg screens and up */}
      <div className="hidden lg:block">
        <HeroSectionDesktop />
      </div>
    </>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/agenda", label: "Timeline" },
  { href: "/logistics", label: "Logistics" },
  { href: "/tracks", label: "Tracks" },
  { href: "/faq", label: "FAQ" },
  { href: "/sponsors", label: "Sponsors" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      if (currentY > lastY && currentY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Always solid dark background — transparent only at very top before scroll
  const navBg = scrolled
    ? 'bg-[rgb(8,8,16)] border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.6)]'
    : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/images/hero-orb.png"
              alt="Globehack Logo"
              width={40}
              height={40}
              priority
              style={{ width: "auto", height: "auto", maxWidth: 40, maxHeight: 40 }}
              className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
            <span className="text-sm font-bold tracking-tight font-zen-dots">
              <span className="text-cyan-400">GLOBEHACK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 relative group hover:bg-white/5"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Discord icon only */}
            <Link href="https://discord.gg/PA3XaxjxVH" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-[#5865F2] hover:bg-[#5865F2]/10 px-3"
                aria-label="Join Discord"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </Button>
            </Link>
            {/* Sun Devil Central */}
            <Link href="https://globehack.devpost.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-yellow-400  hover:bg-[#5865F2]/10 flex items-center gap-1.5 cursor-pointer"
              >
                SDC
              </Button>
            </Link>
            {/* Devpost */}
            <Link href="https://globehack.devpost.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-white hover:bg-white/10 flex items-center gap-1.5 cursor-pointer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
                </svg>
                Devpost
              </Button>
            </Link>
            {/* Register */}
            <Link href="/register">
              <Button
                size="sm"
                className="glass-button text-white rounded-xl cursor-pointer"
              >
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 bg-[rgb(8,8,16)] border border-white/10 rounded-2xl mb-4">
            <div className="flex flex-col gap-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10 mt-2 px-2">
                <Link href="https://discord.gg/PA3XaxjxVH" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-[#5865F2]/40 text-[#5865F2] hover:bg-[#5865F2]/10 rounded-xl cursor-pointer">
                    Join Discord
                  </Button>
                </Link>
                <Link href="https://sundevilcentral.eoss.asu.edu/globalcareernetwork/rsvp_boot?id=401832" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-white/20 text-muted-foreground hover:bg-white/5 rounded-xl cursor-pointer">
                    SDC
                  </Button>
                </Link>
                <Link href="https://globehack.devpost.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-white/20 text-muted-foreground hover:bg-white/5 rounded-xl cursor-pointer">
                    Devpost
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full glass-button text-white rounded-xl">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

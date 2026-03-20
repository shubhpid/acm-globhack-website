"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { id } from "date-fns/locale"

const navLinks = [
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#events", label: "Events", sectionId: "events" },
  { href: "#interests", label: "Interest Areas", sectionId: "interests" },
  { href: "#connect", label: "Connect", sectionId: "connect" },
  { href: "#officers", label: "Our Team", sectionId: "officers"},
  { href: "https://asu.acm.org/category/news/recap/", label: "News", sectionId: "news"},
  
  
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href?.replace("#", ""))
      .filter(Boolean) as string[]


    function onScroll() {
      let current: string | null = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 80 && rect.bottom > 80){
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="https://asu.acm.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            
              
              
              
              <Image
                src="/images/Logo.png"
                alt="ACM at ASU Logo"
                width={44}
                height={44}
                style={{position: "relative", left: "5px"}}
                
                className="group-hover:scale-120 transition-transform"
                
                
              />
            
            <div className="hidden sm:block">
              <span className="font-bold text-foreground">ACM</span>
              <span className="text-muted-foreground ml-1">at ASU</span>
            </div>
            {/*<Image
                src="/images/acm logo with text.png"
                alt="ACM at ASU Logo"
                width={150}
                height={44}
                style={{position: "relative", left: "5px"}}
                
                className="group-hover:scale-120 transition-transform"
                
                
              />*/}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.sectionId && link.sectionId === activeSection
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  
                  className={
                    `text-sm font-medium transition-colors px-3 py-1 rounded-md ` +
                    (isActive
                      ? "bg-blue-500 text-white shadow"
                      : "text-muted-foreground hover:text-foreground")
                  }
                  style={{ boxShadow: isActive ? "0 0 0 2px #3b82f6" : undefined }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://asu.acm.org/dc" target="_self" rel="nofollow noreferrer noopener">Discord</Link>
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="https://asu.acm.org/sd" target="_self" rel="nofollow noreferrer noopener">Join ACM at ASU</Link>
            </Button>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = link.sectionId && link.sectionId === activeSection
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    
                    className={
                      `font-medium transition-colors px-3 py-1 rounded-md ` +
                      (isActive
                        ? "bg-blue-500 text-white shadow"
                        : "text-muted-foreground hover:text-foreground")
                    }
                    style={{ boxShadow: isActive ? "0 0 0 2px #3b82f6" : undefined }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <Link href="#discuss">Discuss</Link>
                </Button>
                <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="https://asu.acm.org/sd" target="_blank" rel="noopener noreferrer">Join ACM</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

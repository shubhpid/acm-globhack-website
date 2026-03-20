"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive background */}
      <div className="absolute inset-0 immersive-bg">
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Animated orbs */}
        <div 
          className="orb orb-blue w-[600px] h-[600px] -top-40 -left-40"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="orb orb-magenta w-[500px] h-[500px] top-1/3 -right-32"
          style={{ animationDelay: '-5s' }}
        />
        <div 
          className="orb orb-cyan w-[400px] h-[400px] bottom-20 left-1/4"
          style={{ animationDelay: '-10s' }}
        />
        <div 
          className="orb orb-gold w-[300px] h-[300px] top-1/4 right-1/3"
          style={{ animationDelay: '-7s' }}
        />

        {/* Grid overlay */}
        <div className="grid-overlay" />
        
        {/* Scan line */}
        <div className="scan-line" />
        
        {/* Flowing lines */}
        <div className="flow-line top-1/4" />
        <div className="flow-line top-1/2" style={{ animationDelay: '-2s' }} />
        <div className="flow-line top-3/4" style={{ animationDelay: '-1s' }} />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Organizer badges */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--cyan)]/20 flex items-center justify-center">
              <span className="text-xs font-bold text-[var(--cyan)]">ACM</span>
            </div>
            <span className="text-sm text-muted-foreground">ACM at ASU</span>
          </div>
          <span className="text-muted-foreground">×</span>
          <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--gold)]/20 flex items-center justify-center">
              <span className="text-xs font-bold text-[var(--gold)]">GCN</span>
            </div>
            <span className="text-sm text-muted-foreground">Global Career Network</span>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">GLOBE</span>
          <span className="text-[var(--gold)] text-glow-gold">HACK</span>
          <span className="text-gradient">&apos;26</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-[var(--cyan)] font-medium mb-6 text-glow">
          Arizona&apos;s First Go-To-Market Hackathon
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          24 hours of innovation, collaboration, and building real-world solutions. 
          Join 150+ developers, designers, and entrepreneurs pushing the boundaries of what&apos;s possible.
        </p>

        {/* Event info pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="glass-card glass-card-hover px-5 py-3 rounded-xl flex items-center gap-3 transition-all duration-300">
            <Calendar className="h-5 w-5 text-[var(--cyan)]" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="text-sm font-medium text-foreground">April 18-19, 2026</p>
            </div>
          </div>
          <div className="glass-card glass-card-hover px-5 py-3 rounded-xl flex items-center gap-3 transition-all duration-300">
            <MapPin className="h-5 w-5 text-[var(--magenta)]" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">Arizona State University</p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/sign-up">
            <Button 
              size="lg" 
              className="bg-[var(--blue)] hover:bg-[var(--blue)]/90 text-white text-lg px-10 py-7 rounded-xl shadow-[0_0_30px_rgba(2,125,194,0.4)] hover:shadow-[0_0_50px_rgba(2,125,194,0.6)] transition-all duration-300 group"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="https://discord.gg/PA3XaxjxVH" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[var(--cyan)]/30 text-[var(--cyan)] hover:bg-[var(--cyan)]/10 hover:border-[var(--cyan)]/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Join Discord
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "24", label: "Hours", accent: "cyan" },
            { value: "150+", label: "Hackers", accent: "gold" },
            { value: "5", label: "Tracks", accent: "blue" },
            { value: "$10K+", label: "In Prizes", accent: "magenta" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-4 text-center"
            >
              <div 
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{ color: `var(--${stat.accent})` }}
              >
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-[var(--cyan)]/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--cyan)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-04-18T09:00:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <div key={index} className="glass-card rounded-2xl p-4 sm:p-5 min-w-[70px] sm:min-w-[90px] text-center">
          <div className="text-2xl sm:text-4xl font-bold text-foreground tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground mt-1">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive liquid glass background */}
      <div className="absolute inset-0 immersive-bg">
        <div className="absolute inset-0 noise-overlay" />
        
        {/* Animated liquid orbs matching the logo colors */}
        <div 
          className="orb orb-red w-[700px] h-[700px] -top-32 -left-32"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="orb orb-blue w-[600px] h-[600px] top-1/4 -right-24"
          style={{ animationDelay: '-5s' }}
        />
        <div 
          className="orb orb-magenta w-[400px] h-[400px] bottom-32 left-1/3"
          style={{ animationDelay: '-10s' }}
        />
        <div 
          className="orb orb-cyan w-[350px] h-[350px] top-1/2 left-1/4"
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
        
        {/* Hero Orb Logo */}
        <div className="relative mx-auto mb-8 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
          <div className="liquid-glow absolute inset-0" />
          <div className="relative w-full h-full float-animation">
            <Image
              src="/images/hero-orb.png"
              alt="Globehacks 2026 - Energy Orb Logo"
              fill
              className="object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Organizer badges with actual logos */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Link 
            href="https://asu.acm.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card glass-card-hover px-5 py-3 rounded-full flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/images/acm-asu-logo.png"
                alt="ACM at ASU"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">ACM at ASU</span>
          </Link>
          <span className="text-muted-foreground text-2xl font-light">x</span>
          <Link 
            href="https://globalcareernetwork.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card glass-card-hover px-5 py-3 rounded-full flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10">
              <Image
                src="/images/gcn-logo.png"
                alt="Global Career Network"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Global Career Network</span>
          </Link>
        </div>

        {/* Main title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">GLOBE</span>
          <span className="text-gradient">HACK</span>
          <span className="text-foreground">&apos;26</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-cyan-400 font-medium mb-6 text-glow">
          Arizona&apos;s First Go-To-Market Hackathon
        </p>

        {/* Event info pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="glass-card px-5 py-3 rounded-2xl flex items-center gap-3">
            <Calendar className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-medium text-foreground">April 18-19, 2026</span>
          </div>
          <div className="glass-card px-5 py-3 rounded-2xl flex items-center gap-3">
            <MapPin className="h-5 w-5 text-pink-400" />
            <span className="text-sm font-medium text-foreground">Arizona State University</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer />
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/sign-up">
            <Button 
              size="lg" 
              className="glass-button text-white text-lg px-10 py-7 rounded-2xl group w-full sm:w-auto"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="https://discord.gg/PA3XaxjxVH" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 text-lg px-10 py-7 rounded-2xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Join Discord
            </Button>
          </Link>
        </div>

        {/* Stats - Similar to innovationhacks.dev */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "8+", label: "Prize Categories", color: "text-cyan-400" },
            { value: "24", label: "Hours of Hacking", color: "text-pink-400" },
            { value: "150+", label: "Participants", color: "text-amber-400" },
            { value: "24/7", label: "Mentor Support", color: "text-blue-400" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-card glass-card-hover rounded-2xl p-5 text-center"
            >
              <div className={`text-3xl sm:text-4xl font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full glass-card flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

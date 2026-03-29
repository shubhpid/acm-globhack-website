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
    <div className="flex gap-3 sm:gap-4">
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Static dark background */}
      <div className="absolute inset-0 bg-[rgb(8,8,16)]" />

      {/* Subtle background color bleed from orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-red-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/4 blur-[140px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* ── ORB: absolutely positioned, peeking from right edge ── */}
      <div
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[640px] sm:h-[640px] lg:w-[760px] lg:h-[760px] float-animation pointer-events-none select-none transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        style={{ transform: "translate(35%, -50%)" }}
        aria-hidden="true"
      >
        {/* Glow layers behind orb */}
        <div className="absolute inset-0 rounded-full bg-red-500/15 blur-[80px]" />
        <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-[100px] -translate-x-6" />

        <Image
          src="/images/hero-orb.png"
          alt=""
          width={760}
          height={760}
          className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(220,38,127,0.25)]"
          priority
          loading="eager"
          sizes="(max-width: 640px) 520px, (max-width: 1024px) 640px, 760px"
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Liquid Glass Container */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-16 border border-white/5 max-w-3xl">

          {/* Organizer badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
            <Link
              href="https://asu.acm.org"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-4 py-2 rounded-full flex items-center gap-2 group hover:bg-white/[0.06] transition-all"
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/images/acm-asu-logo.png" alt="ACM at ASU" fill className="object-contain" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                ACM at ASU
              </span>
            </Link>
            <span className="text-muted-foreground text-lg font-light hidden sm:block">×</span>
            <Link
              href="https://globalcareernetwork.org"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-4 py-2 rounded-full flex items-center gap-2 group hover:bg-white/[0.06] transition-all"
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image src="/images/gcn-logo.png" alt="Global Career Network" fill className="object-contain" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                Global Career Network
              </span>
            </Link>
          </div>

          {/* Main title — Zen Dots via inline style to guarantee font loads */}
          <h1
            className="font-bold mb-5 leading-none tracking-tight"
            style={{ fontFamily: "var(--font-zen-dots), 'Zen Dots', display" }}
          >
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-white leading-none">
              GL<span className="text-cyan-400">O</span>BE
            </span>
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] text-white leading-none">
              HACK<span className="text-cyan-400">&apos;26</span>
            </span>
          </h1>

          {/* Tagline pill — matches the red bar in the reference image */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[3px] w-10 bg-gradient-to-r from-red-500 to-blue-500 rounded-full" />
            <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-foreground/80">
              First Go-To-Market Hackathon in Arizona
            </p>
          </div>

          {/* Date pill — matches the boxed date in reference */}
          <div className="inline-flex items-center gap-3 glass-card border border-white/15 rounded-2xl px-5 py-3 mb-8">
            <Calendar className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <span
              className="text-lg sm:text-xl font-bold text-foreground tracking-wide"
              style={{ fontFamily: "var(--font-zen-dots), 'Zen Dots', display" }}
            >
              APRIL, 18–19, 2026
            </span>
          </div>

          {/* Location pill */}
          <div className="flex items-center gap-2 mb-10">
            <MapPin className="h-4 w-4 text-pink-400" />
            <span className="text-sm font-medium text-muted-foreground">Arizona State University</span>
          </div>

          {/* Countdown Timer */}
          <div className="mb-10">
            <CountdownTimer />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/sign-up">
              <Button
                size="lg"
                className="glass-button text-white text-lg px-8 py-6 rounded-2xl group w-full sm:w-auto"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://discord.gg/PA3XaxjxVH" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="glass-card border-white/15 text-foreground/80 hover:bg-white/[0.06] hover:border-white/25 text-lg px-8 py-6 rounded-2xl transition-all duration-300 w-full sm:w-auto"
              >
                <svg className="h-5 w-5 mr-2 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                Join Discord
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats below the glass container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mt-10">
          {[
            { value: "8+", label: "Prize Categories", color: "text-cyan-400" },
            { value: "24", label: "Hours of Hacking", color: "text-pink-400" },
            { value: "150+", label: "Participants", color: "text-amber-400" },
            { value: "24/7", label: "Mentor Support", color: "text-blue-400" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-5 text-center hover:bg-white/[0.06] transition-all"
            >
              <div className={`text-3xl sm:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full glass-card flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

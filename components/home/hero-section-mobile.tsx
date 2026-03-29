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
    { value: timeLeft.hours, label: "Hrs" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ]

  return (
    <div className="flex gap-1.5 justify-center w-full">
      {timeUnits.map((unit, index) => (
        <div key={index} className="glass-card rounded-lg px-2 py-1.5 flex-1 text-center min-w-0">
          <div className="text-base font-bold text-foreground tabular-nums leading-none mb-0.5">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-[9px] text-muted-foreground">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}

export function HeroSectionMobile() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-8">
      {/* Static dark background */}
      <div className="absolute inset-0 bg-[rgb(8,8,16)]" />

      {/* Subtle background color bleed */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] rounded-full bg-pink-500/5 blur-[60px] pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 w-full px-4 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Glass Container */}
        <div className="glass-panel rounded-2xl p-6 border border-white/5">
          
          {/* Globe orb - centered at top */}
          <div className="relative w-40 h-40 mx-auto mb-6 float-animation">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[40px]" />
            <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-[50px] translate-x-2" />
            <Image
              src="/images/hero-orb.png"
              alt="Globehacks 2026"
              width={160}
              height={160}
              className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              style={{ width: 160, height: 160 }}
              priority
            />
          </div>

          {/* Main title */}
          <h1
            className="text-xl font-bold mb-2 tracking-tight text-center"
            style={{ fontFamily: "var(--font-zen-dots), 'Zen Dots', display" }}
          >
            <span className="text-cyan-400">GLOBEHACK</span>
            <span className="text-foreground">&apos;26</span>
          </h1>

          {/* Tagline */}
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="h-[2px] w-6 bg-gradient-to-r from-red-500 to-blue-500 rounded-full" />
            <p className="text-[10px] font-semibold tracking-widest uppercase text-foreground/80 text-center">
              First Go-To-Market Hackathon in Arizona
            </p>
            <div className="h-[2px] w-6 bg-gradient-to-r from-blue-500 to-red-500 rounded-full" />
          </div>

          {/* Date and Location */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 glass-card border border-white/15 rounded-lg px-3 py-1.5">
              <Calendar className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-sm font-semibold text-foreground">April 18-19, 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 glass-card border border-white/15 rounded-lg px-3 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-pink-400" />
              <span className="text-xs text-muted-foreground">Arizona State University</span>
            </div>
          </div>

          {/* Organizer badges */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Link
              href="https://asu.acm.org"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-2.5 py-1.5 rounded-full flex items-center gap-1.5"
            >
              <Image src="/images/acm-asu-logo.png" alt="ACM at ASU" width={20} height={20} style={{ width: 20, height: 20 }} className="object-contain" />
              <span className="text-[10px] text-muted-foreground">ACM at ASU</span>
            </Link>
            <span className="text-muted-foreground text-xs">×</span>
            <Link
              href="https://globalcareernetwork.org"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-2.5 py-1.5 rounded-full flex items-center gap-1.5"
            >
              <Image src="/images/gcn-logo.png" alt="GCN" width={20} height={20} style={{ width: 20, height: 20 }} className="object-contain" />
              <span className="text-[10px] text-muted-foreground">GCN</span>
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="mb-5">
            <CountdownTimer />
          </div>

          {/* CTA buttons - stacked */}
          <div className="flex flex-col gap-2.5">
            <Link href="/sign-up" className="w-full">
              <Button
                size="lg"
                className="glass-button text-white text-base px-6 py-5 rounded-xl group w-full"
              >
                Register Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <div className="flex gap-2">
              <Link href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="glass-card border-white/15 text-foreground/80 text-sm py-4 rounded-xl w-full"
                >
                  Devpost
                </Button>
              </Link>
              <Link href="https://discord.gg/PA3XaxjxVH" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  size="sm"
                  variant="outline"
                  className="glass-card border-white/15 text-foreground/80 text-sm py-4 rounded-xl w-full"
                >
                  Discord
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats - 2x2 grid */}
        <div className="grid grid-cols-2 gap-2.5 mt-4">
          {[
            { value: "8+", label: "Prize Categories", color: "text-cyan-400" },
            { value: "24", label: "Hours", color: "text-pink-400" },
            { value: "150+", label: "Participants", color: "text-amber-400" },
            { value: "24/7", label: "Mentors", color: "text-blue-400" },
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-xl p-3 text-center">
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const words = ["INNOVATE", "CREATE", "COLLABORATE", "ADVANCE"]

export function HeroSectionMobile() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Overline */}
        <div className="inline-flex items-center gap-2 ">
          <span className="w-2 h-2 " />
          
        </div>

        {/* Main Headline */}
       
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
          <span className="block">THE <span style={{color:"#0084D9"}}>ACM</span> IS</span>
          <span className="block">NOW AT</span>
          <span className="block relative">
          {/*<span className="text-primary">ASU</span>*/}
          <Image src="/images/ASU LOGO BLACK.png" alt="ASU LOGO BLACK" width={300} height={300} style={{margin:"8px auto auto auto", padding:"8px"}}/>
          </span>
        </h1>

        {/* Animated Word */}
        <div className="h-16 sm:h-20 flex items-end justify-center mb-8">
          <span
            className={`text-3xl sm:text-6xl font-bold text-muted-foreground transition-all duration-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {words[currentWord]}
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed text-balance">
          The Association for Computing Machinery Student Chapter at Arizona State University fosters collaboration 
          and community between students through networking, learning, mentoring, 
          and knowledge-sharing opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
            asChild
          >
            <Link href="https://asu.acm.org/sd" target="_self" rel="noopener noreferrer">
              Become a Member
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg border-border text-foreground hover:bg-secondary bg-transparent"
            asChild
          >
            <Link href="https://asu.acm.org/about/" target="_self" rel= "noopener noreferrer">Learn More</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
          {[
            { value: "4500+", label: "Members" },
            { value: "25+", label: "Events/Year" },
            { value: "20+", label: "Guest Speakers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}


"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const words = ["INNOVATE", "CREATE", "COLLABORATE", "ADVANCE"]

/* ============================================== */
/* Background Images - Cycling Slideshow          */
/* To change these images, replace the files at:  */
/* /public/images/asu-campus.jpg                  */
/* /public/images/asu-campus-2.jpg                */
/* /public/images/asu-campus-3.jpg                */
/* /public/images/asu-campus-4.jpg                */
/* /public/images/asu-campus-5.jpg                */
/* ============================================== */
const backgroundImages = [
  "/images/asu1.webp",
  "/images/asu2.jpg",
  "/images/asu3.jpg",
  "/images/asu4.jpg",
  "/images/asu5.jpg",
]

export function HeroSectionDesktop() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [currentImage, setCurrentImage] = useState(0)

  // Word cycling effect
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

  // Image cycling effect - changes every 5 seconds with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* ============================================== */}
      {/* Right Side - Background Images with Fade       */}
      {/* Images cycle automatically every 5 seconds     */}
      {/* ============================================== */}
      <div className="absolute pr-10 inset-y-0 right-0  w-80 lg:w-[70%]">
        {/* Render all images, only show current one with fade */}
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all  duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={"Arizona State University Campus" }
              fill
              className="object-cover object-center pl-1"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Gradient fade overlay - creates the blend effect on the left edge */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent lg:via-background/40" />
        {/* Bottom fade for smooth transition to stats bar */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
      </div>

      {/* Left Side - Text Content */}
      {/* Added more padding top for space above the headline */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 lg:ml-20 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-xl">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-4 mr-60 object-left">
            <span className="block"><span className="text-primary">ACM</span> IS</span>
            <span className="block pb-3">NOW AT</span>
            <Image src={"/images/ASU LOGO BLACK.png"} alt="ASU" width={200} height={300} className="relative "/>
          </h1>

          {/* Animated Word */}
          <div className="h-14 sm:h-16 flex items-center mb-6 mt-6 pt-10">
            <span
              className={`text-2xl sm:text-5xl font-bold text-muted-foreground tracking-wider transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {words[currentWord]}
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground mb-10 pt-8 leading-relaxed max-w-md">
            The Association for Computing Machinery                                          
            Student Chapter at Arizona State University fosters collaboration and community 
            between students through networking, learning, 
            mentoring, and knowledge-sharing opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 text-base font-medium group rounded-lg mt-0.5"
              asChild
            >
              <Link href="https://asu.acm.org/sd">
                Become a Member
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-6 mb-10 text-base font-medium border-border text-foreground hover:bg-secondary bg-transparent rounded-lg"
              asChild
            >
              <Link href="https://asu.acm.org/about/">Learn More</Link>
            </Button>
          </div>
          {/* Stats */}
        <div className="absolute grid grid-cols-3 gap-8 max-w-2xl mx-auto">
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
        <div className="mt-10"> </div>
      </div>
    </div>
  </section>
  )
}

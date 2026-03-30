"use client"

import { Code2, Globe, Lightbulb, Rocket, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Connect with diverse minds and build solutions for real-world challenges that transcend borders.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Push boundaries with cutting-edge technologies and creative problem-solving approaches.",
    gradient: "from-amber-500 to-yellow-500",
    glowColor: "rgba(250, 204, 21, 0.3)",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Team up with talented developers, designers, and entrepreneurs to create something amazing.",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.3)",
  },
  {
    icon: Rocket,
    title: "Go-To-Market Focus",
    description: "Learn to build products that can actually reach users and make an impact in the market.",
    gradient: "from-blue-600 to-indigo-600",
    glowColor: "rgba(79, 70, 229, 0.3)",
  },
  {
    icon: Code2,
    title: "Learn & Grow",
    description: "Attend workshops, get mentorship from industry experts, and level up your skills.",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(34, 211, 238, 0.3)",
  },
  {
    icon: Zap,
    title: "All Skill Levels",
    description: "Whether you're a seasoned developer or just starting out, there's a place for you here.",
    gradient: "from-amber-400 to-orange-500",
    glowColor: "rgba(251, 146, 60, 0.3)",
  },
]

export function AboutSection() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgb(12,12,28)] to-background" />
      
      {/* Floating orbs */}
      <div className="orb orb-blue w-[500px] h-[500px] top-20 -right-48 opacity-25" />
      <div className="orb orb-red w-[400px] h-[400px] bottom-40 -left-40 opacity-25" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-20 px-2">
          <p className="text-xs md:text-sm font-medium text-cyan-400 uppercase tracking-widest mb-3 md:mb-4">
            What is <span className="font-zen-dots">Globehack</span>?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            More Than Just a{' '}
            <span className="text-gradient">Hackathon</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            <span className="mr-1 font-zen-dots text-cyan-400">Globehack</span>   2026 is Arizona&apos;s premier go-to-market hackathon where innovation meets implementation. 
            Over 24 hours, you&apos;ll build, learn, and connect with a community that values turning ideas into reality.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass-card glass-card-hover rounded-xl md:rounded-2xl p-5 md:p-8 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${feature.glowColor}, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div 
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${feature.gradient}`}
                style={{
                  boxShadow: `0 8px 32px ${feature.glowColor}`,
                }}
              >
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent line */}
              <div 
                className={`absolute top-0 right-0 w-20 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

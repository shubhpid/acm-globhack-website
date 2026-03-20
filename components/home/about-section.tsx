"use client"

import { Code2, Globe, Lightbulb, Rocket, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Connect with diverse minds and build solutions for real-world challenges that transcend borders.",
    color: "cyan",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Push boundaries with cutting-edge technologies and creative problem-solving approaches.",
    color: "gold",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Team up with talented developers, designers, and entrepreneurs to create something amazing.",
    color: "magenta",
  },
  {
    icon: Rocket,
    title: "Go-To-Market Focus",
    description: "Learn to build products that can actually reach users and make an impact in the market.",
    color: "blue",
  },
  {
    icon: Code2,
    title: "Learn & Grow",
    description: "Attend workshops, get mentorship from industry experts, and level up your skills.",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "All Skill Levels",
    description: "Whether you're a seasoned developer or just starting out, there's a place for you here.",
    color: "gold",
  },
]

export function AboutSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a12] to-background" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-[var(--cyan)] uppercase tracking-widest mb-4">
            What is Globehacks?
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            More Than Just a{' '}
            <span className="text-gradient">Hackathon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            Globehacks 2026 is Arizona&apos;s premier go-to-market hackathon where innovation meets implementation. 
            Over 24 hours, you&apos;ll build, learn, and connect with a community that values turning ideas into reality.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500"
            >
              {/* Icon */}
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, color-mix(in srgb, var(--${feature.color}) 20%, transparent), transparent)`,
                  border: `1px solid color-mix(in srgb, var(--${feature.color}) 30%, transparent)`,
                }}
              >
                <feature.icon 
                  className="h-7 w-7" 
                  style={{ color: `var(--${feature.color})` }}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, color-mix(in srgb, var(--${feature.color}) 15%, transparent), transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

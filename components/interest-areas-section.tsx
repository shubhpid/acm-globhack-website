"use client"

import { useState } from "react"
import { Database, Code, Server, Network, BookOpen, Cpu, Sparkles, GraduationCap } from "lucide-react"

const interestAreas = [
  {
    id: "data",
    name: "Data",
    icon: Database,
    description: "Data science, machine learning, analytics, and big data technologies.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "code",
    name: "Code",
    icon: Code,
    description: "Software development, programming languages, and software engineering practices.",
    color: "from-primary to-accent",
  },
  {
    id: "system",
    name: "System",
    icon: Server,
    description: "Operating systems, distributed systems, and system architecture.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "network",
    name: "Network",
    icon: Network,
    description: "Computer networks, cybersecurity, and network protocols.",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "theory",
    name: "Theory",
    icon: BookOpen,
    description: "Algorithms, computational theory, and mathematical foundations of computing.",
    color: "from-blue-600 to-indigo-500",
  },
  {
    id: "applied",
    name: "Applied",
    icon: Cpu,
    description: "Human-computer interaction, graphics, and applied computing research.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "emerging",
    name: "Emerging",
    icon: Sparkles,
    description: "Quantum computing, blockchain, AR/VR, and cutting-edge technologies.",
    color: "from-primary to-blue-400",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Computer science education, teaching methodologies, and outreach.",
    color: "from-sky-500 to-blue-500",
  },
]

export function InterestAreasSection() {
  const [activeArea, setActiveArea] = useState<string | null>(null)

  return (
    <section id="interests" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Explore Your Passion
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
            Interest Areas
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            ACM at ASU serves as a hub to help members identify their compatible 
            computing clubs and special-interest groups (SIGs).
          </p>
        </div>

        {/* Interest Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interestAreas.map((area) => (
            <button
              key={area.id}
              className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                activeArea === area.id
                  ? "bg-primary text-primary-foreground scale-105 shadow-xl shadow-primary/20"
                  : "bg-card border border-border hover:border-primary/50 text-card-foreground hover:shadow-lg"
              }`}
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <area.icon
                  className={`mb-4 transition-colors ${
                    activeArea === area.id ? "text-primary-foreground" : "text-primary"
                  }`}
                  size={32}
                />
                <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                <p
                  className={`text-sm leading-relaxed transition-colors ${
                    activeArea === area.id ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {area.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

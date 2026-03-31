import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TracksPageMobile } from "@/components/tracks/tracks-page-mobile"
import { 
  Brain, 
  Heart, 
  Palette, 
  Lightbulb, 
  GraduationCap,
  Lock,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Tracks | Globehack 2026",
  description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
}

const tracks = [
  {
    id: "ai-ml",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-cyan-500 to-blue-500",
    glowColor: "rgba(34, 211, 238, 0.3)",
    textColor: "text-cyan-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Natural language processing tools",
      "Computer vision applications",
      "Predictive analytics dashboards",
      "AI-powered automation",
    ],
    revealed: false,
  },
  {
    id: "social-impact",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.3)",
    textColor: "text-pink-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Accessibility tools",
      "Environmental sustainability apps",
      "Community connection platforms",
      "Health and wellness solutions",
    ],
    revealed: false,
  },
  {
    id: "ui-ux",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-amber-500 to-yellow-500",
    glowColor: "rgba(250, 204, 21, 0.3)",
    textColor: "text-amber-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Beautifully crafted interfaces",
      "Intuitive user flows",
      "Accessible design patterns",
      "Micro-interactions and animations",
    ],
    revealed: false,
  },
  {
    id: "innovation",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.3)",
    textColor: "text-blue-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Unique technology combinations",
      "Novel problem-solving approaches",
      "Unconventional use cases",
      "Creative technical implementations",
    ],
    revealed: false,
  },
  {
    id: "first-time",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-teal-500 to-cyan-500",
    glowColor: "rgba(20, 184, 166, 0.3)",
    textColor: "text-teal-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: [
      "Any project from first-time teams",
      "Learning and growth emphasized",
      "Mentorship encouraged",
      "All skill levels welcome",
    ],
    revealed: false,
  },
  {
    id: "secret",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-purple-400 to-purple-900",
    glowColor: "rgba(107, 114, 128, 0.2)",
    textColor: "text-gray-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: ["???", "???", "???", "???"],
    revealed: false,
  },
  {
    id: "new track",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-gray-400 to-gray-900",
    glowColor: "rgba(107, 114, 128, 0.2)",
    textColor: "text-gray-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: ["???", "???", "???", "???"],
    revealed: false,
  },
  {
    id: "new track 2",
    title: "Secret Track",
    icon: Lock,
    gradient: "from-teal-400 to-green-700",
    glowColor: "rgba(107, 114, 128, 0.2)",
    textColor: "text-gray-400",
    badge: "TBA",
    description: "--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
    examples: ["???", "???", "???", "???"],
    revealed: false,
  },
]

function TracksDesktop() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-blue w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-cyan w-[300px] h-[300px] top-40 -right-20" />
          <div className="orb orb-red w-[250px] h-[250px] bottom-20 left-1/2" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
            Choose Your Challenge
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Competition </span>
            <span className="text-gradient">Tracks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose a track that matches your interests and skills. Each track has its own 
            judging focus, and you can compete in multiple tracks with a single project.
          </p>
        </div>
      </section>

      {/* Tracks grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 overflow-hidden ${
                  track.revealed 
                    ? "glass-card-hover" 
                    : "border-dashed opacity-70"
                }`}
              >
                {/* Glow effect on hover */}
                {track.revealed && (
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${track.glowColor}, transparent 60%)`,
                    }}
                  />
                )}

                {/* Track status badge */}
                <div 
                  className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-bold ${
                    track.revealed 
                      ? `bg-gradient-to-r ${track.gradient} bg-opacity-20 ${track.textColor}` 
                      : "bg-secondary text-muted-foreground"
                  }`}
                  style={{ 
                    background: track.revealed 
                      ? `linear-gradient(135deg, ${track.glowColor}, transparent)`
                      : undefined,
                  }}
                >
                  {track.badge}
                </div>

                {/* Icon */}
                <div 
                  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${track.gradient} ${
                    !track.revealed && "animate-pulse"
                  }`}
                  style={{
                    boxShadow: `0 8px 32px ${track.glowColor}`,
                  }}
                >
                  <track.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-semibold text-foreground mb-3">
                  {track.title}
                </h3>

                {/* Description */}
                <p className={`relative text-sm leading-relaxed mb-6 ${
                  track.revealed ? "text-muted-foreground" : "text-muted-foreground/50 italic"
                }`}>
                  {track.description}
                </p>

                {/* Examples */}
                {track.revealed && (
                  <div className="relative space-y-3">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Example Projects:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {track.examples.map((example, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span 
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-r ${track.gradient}`}
                          />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Unrevealed overlay */}
                {!track.revealed && (
                  <div className="absolute inset-0 glass-panel rounded-2xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                        <Lock className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        Revealed on April 6th
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgb(12,12,24)] to-background" />
        <div className="orb orb-blue w-[300px] h-[300px] top-1/2 -left-32 opacity-30" />
        <div className="orb orb-red w-[250px] h-[250px] top-1/3 -right-24 opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*<div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How Track Judging Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Build Your Project",
                description: "Create your project during the hackathon. One project can qualify for multiple tracks.",
                gradient: "from-cyan-500 to-teal-500",
                glowColor: "rgba(34, 211, 238, 0.3)",
              },
              {
                step: "2",
                title: "Submit & Tag",
                description: "When submitting on Devpost, select all tracks your project applies to.",
                gradient: "from-blue-500 to-indigo-500",
                glowColor: "rgba(59, 130, 246, 0.3)",
              },
              {
                step: "3",
                title: "Get Judged",
                description: "Judges evaluate your project for each track separately based on track-specific criteria.",
                gradient: "from-amber-500 to-yellow-500",
                glowColor: "rgba(250, 204, 21, 0.3)",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${item.gradient}`}
                  style={{ boxShadow: `0 8px 32px ${item.glowColor}` }}
                >
                  <span className="text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>*/}

          <div className="text-center">
            <Link href="/register">
              <Button 
                size="lg" 
                className="glass-button text-white px-10 py-7 rounded-2xl group"
              >
                Register to Compete
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function TracksPage() {
  return (
    <>
      <div className="hidden md:block">
        <TracksDesktop />
      </div>
      <div className="block md:hidden">
        <Navigation />
        <TracksPageMobile />
        <Footer />
      </div>
    </>
  )
}

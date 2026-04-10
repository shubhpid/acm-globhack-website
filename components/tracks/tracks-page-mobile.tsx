import {
  Brain,
  Heart,
  Palette,
  Lightbulb,
  GraduationCap,
  Lock,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const tracks = [
  {
    id: "ai-ml",
    title: "Lofty",
    icon: Lock,
    gradient: "from-[#445dff] to-[#2537a5]",
    glowColor: "rgba(55, 83, 225, 0.5)",
    textColor: "text-[#4cc1fc]",
    badge: "AI/UX B2B SaaS",
    description: "The modern real estate agent doesn't need more admin work; they need an autonomous assistant. Can you build an Al that proactively closes deals?",
    examples: [
      "CS Developers",
      "Business/Marketing Majors",
    ],
    revealed: true,
    logo: "/images/lofty-logo.png",
  },
  {
    id: "social-impact",
    title: "Trucker Path",
    icon: Lock,
    gradient: "from-[#2586ca] to-[#1b6496]",
    glowColor: "rgba(32, 138, 200, 0.3)",
    textColor: "text-[#51abff]",
    badge: "Algorithms/Data",
    description: "1 million truck drivers move the backbone of the American economy. But fleet dispatchers are still running on spreadsheets. Can you build the Al layer that makes logistics smarter?",
    examples: [
      "CS Developers",
      "Supply Chain & Logistics Majors"
    ],
    revealed: true,
    logo: "/images/Trucker-Path-logo.png",
  },
  {
    id: "ui-ux",
    title: "Vector",
    icon: Lock,
    gradient: "from-[#aeaeae] via-[#aeaeae] to-[#3c3c3c]",
    glowColor: "rgba(80, 80, 80, 0.6)",
    textColor: "text-gray-400",
    badge: "Rapid Prototyping",
    description: "Stop wasting 20 hours building login screens. Use Vector's no-code infrastructure to build, ship, and launch a monetizable SaaS. Your only metric: Would a user pay for this today?",
    examples: [
      "CS Developers",
      "Founders & Indie Hackers"
    ],
    revealed: true,
    logo: "/images/go-vector-ai.jpeg",
  },
  {
    id: "innovation",
    title: "Hydrawav3",
    icon: Lock,
    gradient: "from-[#cca57f] to-[#e5b88e]",
    glowColor: "rgba(171, 137, 106, 0.4)",
    textColor: "text-[#ab896a]",
    badge: "AR/Wearable Data",
    description: "Physical therapy shouldn't be a one-time clinic visit. Bridge ancient wellness with modern tech by building an app layer that assesses, personalizes, and learns from a patient's body.",
    examples: [
      "Biomedical Engineering & Pre-Med Students",
      "CS Developers",
      "Business/Sales Majors",
    ],
    revealed: true,
    logo: "/images/hydrawav3_logo.jpeg",
  },
  
]

const sideTracks = [
  {
    id: "side-1",
    title: "Tamagrow",
    icon: Lock,
    gradient: "from-[#ffcc60] to-[#dfac40]",
    glowColor: "rgba(255, 204, 96, 0.4)",
    textColor: "text-[#000000]",
    badge: "Marketing",
    description: "Work done must be work seen. Don't let your commits die in a private repo. Sync your code, automate your Linkedln updates, and go viral before the ACM at ASU Closing Ceremony on 22nd April where sinners will be announced.",
    examples: [
      "EVERYONE. This is a side track anyone can compete in, no matter your background or skillset. If you build something cool, you deserve to be seen.",
    ],
    revealed: true,
    logo: "/images/tamagrow-logo.jpg",
  },
  {
    id: "side-2",
    title: "ElevenLabs",
    icon: Lock,
    gradient: "from-[#ffffff] to-[#ffffff]",
    glowColor: "rgba(255, 255, 255, 0.4)",
    textColor: "text-[#000000]",
    badge: "AI Agents",
    description: "Text on a screen is boring. Give your prototype a human, lifelike voice using the industry leader in generative Voice Al.",
    examples: [
      "CS Developers (API Integration & AI Agents)",
    ],
    revealed: true,
    logo: "/images/eleven-labs-logo.png",
  },

  {
    id: "side-3",
    title: "InsForge",
    icon: Lock,
    gradient: "from-[#585858] to-[#a8a8a8]",
    glowColor: "rgba(128, 128, 128, 0.4)",
    textColor: "text-[#ffffff]",
    badge: "Efficiency",
    description: "Backend development is a half-solved problem. Use an Al-optimized Backend-as-a-Service to bypass the boilerplate and ship your app instantly.",
    examples: [
      "Full Stack Developers (Prompt-to-Production Architecture)",
      
    ],
    revealed: true,
    logo: "/images/insforge-logo.jpeg",
  },
  {
    id: "side-4",
    title: "Vector",
    icon: Lock,
    gradient: "from-[#434344] to-[#15151d]",
    glowColor: "rgba(80, 80, 80, 0.6)",
    textColor: "text-gray-400",
    badge: "Rapid Prototyping",
    description: "Take your prototype and spend 4 hours proving real market demand. Get a signup. Get a payment. Prove they want it.",
    examples: [
      "Marketing Hackers",
      "Sales & Growth Hackers",
    ],
    revealed: true,
    logo: "/images/go-vector-ai.jpeg",
  },
]


export function TracksPageMobile() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(8,8,16)]" />
        <div className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-blue-500/5 blur-[70px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[150px] h-[150px] rounded-full bg-cyan-500/5 blur-[50px] pointer-events-none" />

        <div className="relative z-10 text-center">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-2">
            Choose Your Challenge
          </p>
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-foreground">Competition </span>
            <span className="text-gradient">Tracks</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Choose a track that matches your interests. One project can compete in multiple tracks.
          </p>
        </div>
      </section>

      {/* Tracks list */}
      <section className="px-4 pb-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-foreground mb-8">
                  Main Tracks
                </h2>
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`relative glass-card rounded-xl p-4 overflow-hidden ${
                !track.revealed ? "opacity-70" : ""
              }`}
            >
              {/* Badge */}
              <div
                className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${track.textColor}`}
                style={{
                  background: track.revealed
                    ? `linear-gradient(135deg, ${track.glowColor}, transparent)`
                    : undefined,
                }}
              >
                {track.badge}
              </div>

              <div className="flex items-center gap-3 mb-2">
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${track.gradient}`}
                  style={{ boxShadow: `0 4px 16px ${track.glowColor}` }}
                >
                  <Image
                    src={track.logo}
                    alt={track.title}
                    width={640}
                    height={640}
                    className="rounded-sm"
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground pr-12">{track.title}</h3>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {track.revealed ? track.description : "Revealed on April 6th"}
              </p>
            </div>
          ))}
        </div>
      </section>

      
      {/* Side Tracks */}
            <section className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Side Tracks
                </h2>
      
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sideTracks.map((track) => (
                    <div 
                      key={track.id}
                      className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 overflow-hidden ${
                        track.revealed 
                          ? "glass-card-hover" 
                          : "border-dashed opacity-70"
                      }`}
                    >
                      {/* SAME EXACT CARD CONTENT — just reuse */}
                      
                      {track.revealed && (
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 50% 0%, ${track.glowColor}, transparent 60%)`,
                          }}
                        />
                      )}
      
                      <div 
                        className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-bold ${
                          track.revealed 
                            ? `bg-gradient-to-r ${track.gradient} ${track.textColor}` 
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {track.badge}
                      </div>
      
                      <div 
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${track.gradient}`}
                        style={{ boxShadow: `0 8px 32px ${track.glowColor}` }}
                      >
                        <Image
                          src={track.logo}
                          alt={track.title}
                          width={640}
                          height={640}
                          className="rounded-sm"
                        />
                      </div>
      
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {track.title}
                      </h3>
      
                      <p className="text-sm text-muted-foreground mb-6">
                        {track.description}
                      </p>
                      {/* Examples */}
                      {track.revealed && (
                        <div className="relative space-y-3">
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                            Who this is for:
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
      
                      
                    </div>
                  ))}
                </div>
              </div>
            </section>
            {/* How it works */}
      <section className="px-4 pb-12">
        <div className="glass-panel rounded-2xl p-5 border border-white/5">
          <h2 className="text-base font-bold text-foreground mb-4 text-center">
            How Track Judging Works
          </h2>
          <div className="flex flex-col gap-3">
            {[
              {
                step: "1",
                title: "Build Your Project",
                desc: "One project can qualify for multiple tracks.",
                gradient: "from-cyan-500 to-teal-500",
              },
              {
                step: "2",
                title: "Submit & Tag",
                desc: "Select all applicable tracks on Devpost.",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                step: "3",
                title: "Get Judged",
                desc: "Judges evaluate per track with separate criteria.",
                gradient: "from-amber-500 to-yellow-500",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${item.gradient}`}
                >
                  <span className="text-sm font-bold text-white">{item.step}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/register" className="block mt-5">
            <Button size="sm" className="glass-button text-white rounded-xl w-full py-5 group">
              Register to Compete
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
      
    </main>
  )
}

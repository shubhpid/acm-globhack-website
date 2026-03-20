import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AgendaTimeline } from "@/components/agenda/agenda-timeline"
import Image from "next/image"

export const metadata = {
  title: "Agenda | Globehacks 2026",
  description: "Full schedule for Globehacks 2026 - April 18-19, 2026",
}

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-blue w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-cyan w-[300px] h-[300px] top-40 -right-20" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-[var(--cyan)] uppercase tracking-widest mb-4">
            April 18-19, 2026
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Event </span>
            <span className="text-gradient">Schedule</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            24 hours of hacking, workshops, mentorship, and more. 
            Here&apos;s everything you need to know about the event timeline.
          </p>
        </div>
      </section>

      {/* Official Agenda Image */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animated-border rounded-2xl">
            <div className="glass-card rounded-2xl p-2 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/globehack%20agenda-roTtpmnGR2YAQCpRJbQQmryTY4dHh5.png"
                alt="Globehacks 2026 Official Agenda"
                width={1200}
                height={2400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <AgendaTimeline />
      <Footer />
    </main>
  )
}

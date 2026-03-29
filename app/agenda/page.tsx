import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AgendaTimeline } from "@/components/agenda/agenda-timeline"
import { AgendaPageMobile } from "@/components/agenda/agenda-page-mobile"

export const metadata = {
  title: "Timeline | Globehacks 2026",
  description: "Full schedule for Globehacks 2026 - April 18-19, 2026",
}

function AgendaDesktop() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-blue w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-cyan w-[300px] h-[300px] top-40 -right-20" />
          <div className="orb orb-red w-[250px] h-[250px] bottom-10 left-1/3" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-4">
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

      <AgendaTimeline />
      <Footer />
    </main>
  )
}

export default function AgendaPage() {
  return (
    <>
      <div className="hidden md:block">
        <AgendaDesktop />
      </div>
      <div className="block md:hidden">
        <Navigation />
        <AgendaPageMobile />
        <Footer />
      </div>
    </>
  )
}

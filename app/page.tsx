import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { InterestAreasSection } from "@/components/interest-areas-section"
import { EventsSection } from "@/components/events-section"
import { ConnectSection } from "@/components/connect-section"
import { OfficersSection } from "@/components/officers-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <InterestAreasSection />
      
      <ConnectSection />
      <OfficersSection />
      
      <Footer />
    </main>
  )
}

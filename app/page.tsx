import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ScheduleSection } from "@/components/home/schedule-section"
import { DiscordSection } from "@/components/home/discord-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <DiscordSection />
      <Footer />
    </main>
  )
}

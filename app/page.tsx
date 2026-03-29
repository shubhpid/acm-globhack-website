import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroResponsive } from "@/components/home/hero-responsive"
import { AboutSection } from "@/components/home/about-section"
import { ScheduleSection } from "@/components/home/schedule-section"
import { DiscordSection } from "@/components/home/discord-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroResponsive />
      <AboutSection />
      <ScheduleSection />
      <DiscordSection />
      <Footer />
    </main>
  )
}

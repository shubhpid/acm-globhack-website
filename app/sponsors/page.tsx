import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SponsorsGrid } from "@/components/sponsors/sponsors-grid"
import { SponsorsPageMobile } from "@/components/sponsors/sponsors-page-mobile"

export const metadata = {
  title: "Sponsors | Globehack 2026",
  description: "Meet the amazing companies supporting Globehack 2026.",
}

function SponsorsDesktop() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-gold w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-magenta w-[300px] h-[300px] top-40 -right-20" />
          <div className="orb orb-blue w-[250px] h-[250px] bottom-10 left-1/2" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-amber-400 uppercase tracking-widest mb-4">
            Our Partners
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-amber-400 text-glow-gold">Sponsors</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="font-zen-dots bg-gradient-to-r from-[#df2a1d] to-cyan-400 bg-clip-text text-transparent">Globehack</span> 2026 is made possible by the generous support of our sponsors.
            These industry leaders share our vision of empowering the next generation of innovators.
          </p>
        </div>
      </section>

      <SponsorsGrid />
      <Footer />
    </main>
  )
}

export default function SponsorsPage() {
  return (
    <>
      <div className="hidden md:block">
        <SponsorsDesktop />
      </div>
      <div className="block md:hidden">
        <Navigation />
        <SponsorsPageMobile />
        <Footer />
      </div>
    </>
  )
}

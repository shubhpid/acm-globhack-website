import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQAccordion } from "@/components/faq/faq-accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "FAQ | Globehacks 2026",
  description: "Frequently asked questions about Globehacks 2026 hackathon.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-cyan w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-blue w-[300px] h-[300px] top-40 -right-20" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-[var(--cyan)] uppercase tracking-widest mb-4">
            Got Questions?
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Globehacks 2026. Can&apos;t find the answer? 
            Join our Discord community for more help.
          </p>
        </div>
      </section>

      <FAQAccordion />

      {/* Still have questions */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animated-border rounded-2xl">
            <div className="glass-card rounded-2xl p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join our Discord community where organizers and fellow hackers can help you out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://discord.gg/PA3XaxjxVH" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:shadow-[0_0_50px_rgba(88,101,242,0.6)] transition-all duration-300"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                    </svg>
                    Join Discord
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-[var(--cyan)]/30 text-[var(--cyan)] hover:bg-[var(--cyan)]/10 px-8 py-6 rounded-xl transition-all duration-300 group"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  Wifi, 
  Coffee,
  Car,
  Laptop,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Logistics | Globehacks 2026",
  description: "Everything you need to know about attending Globehacks 2026 - venue, amenities, and more.",
}

const venueDetails = [
  { icon: MapPin, label: "Location", value: "Arizona State University, Tempe Campus" },
  { icon: Calendar, label: "Dates", value: "April 18-19, 2026" },
  { icon: Clock, label: "Duration", value: "24 Hours" },
  { icon: Users, label: "Capacity", value: "150 Hackers" },
]

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Coffee, label: "Free Meals & Snacks" },
  { icon: Car, label: "Free Parking" },
  { icon: Laptop, label: "Power Outlets" },
]

const eligibility = [
  "Must be 18 years or older",
  "Open to students and professionals",
  "Teams of 1-4 members",
  "Must attend in-person",
  "All skill levels welcome",
  "Valid ID required",
]

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-magenta w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-gold w-[300px] h-[300px] top-40 -right-20" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-[var(--gold)] uppercase tracking-widest mb-4">
            Everything You Need
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Event </span>
            <span className="text-[var(--gold)] text-glow-gold">Logistics</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the venue, what to bring, 
            and how to prepare for Globehacks 2026.
          </p>
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Venue Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Details */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-8">Event Details</h3>
              <div className="space-y-6">
                {venueDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(2, 125, 194, 0.15), transparent)',
                        border: '1px solid rgba(2, 125, 194, 0.2)',
                      }}
                    >
                      <detail.icon className="h-6 w-6 text-[var(--blue)]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <p className="text-foreground font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities & What to Bring */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-8">Amenities</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {amenities.map((amenity, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/30"
                  >
                    <amenity.icon className="h-5 w-5 text-[var(--cyan)]" />
                    <span className="text-foreground text-sm">{amenity.label}</span>
                  </div>
                ))}
              </div>
              
              <div 
                className="p-6 rounded-xl"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(254, 196, 37, 0.1), transparent)',
                  border: '1px solid rgba(254, 196, 37, 0.2)',
                }}
              >
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-[var(--gold)]" />
                  What to Bring
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Laptop and charger</li>
                  <li>Valid photo ID</li>
                  <li>Comfortable clothes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Who Can Participate?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
              {eligibility.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20">
                  <CheckCircle2 className="h-5 w-5 text-[var(--cyan)] shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/sign-up">
              <Button 
                size="lg" 
                className="bg-[var(--blue)] hover:bg-[var(--blue)]/90 text-white px-10 py-7 rounded-xl shadow-[0_0_30px_rgba(2,125,194,0.4)] hover:shadow-[0_0_50px_rgba(2,125,194,0.6)] transition-all duration-300 group"
              >
                Register Now
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

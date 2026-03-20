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
  Trophy,
  Award,
  Medal,
  Gift,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Logistics & Prizes | Globehacks 2026",
  description: "Everything you need to know about attending Globehacks 2026 - venue, prizes, and more.",
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

const prizes = [
  {
    place: "1st Place",
    amount: "$5,000",
    icon: Trophy,
    color: "gold",
    extras: ["Mentorship opportunity", "Incubator access", "Premium swag"],
  },
  {
    place: "2nd Place",
    amount: "$3,000",
    icon: Award,
    color: "cyan",
    extras: ["Career coaching session", "Tech credits", "Premium swag"],
  },
  {
    place: "3rd Place",
    amount: "$1,500",
    icon: Medal,
    color: "magenta",
    extras: ["Resume review", "Tech credits", "Swag pack"],
  },
]

const trackPrizes = [
  { track: "Best AI/ML Project", prize: "$500" },
  { track: "Best Social Impact", prize: "$500" },
  { track: "Best UI/UX Design", prize: "$500" },
  { track: "Most Innovative", prize: "$500" },
  { track: "Best First-Timers", prize: "$500" },
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
            <span className="text-foreground">Logistics & </span>
            <span className="text-[var(--gold)] text-glow-gold">Prizes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the venue, what to bring, 
            and what you can win at Globehacks 2026.
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
                  <li>Toiletries for overnight</li>
                  <li>Sleeping bag (optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a12] to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[var(--cyan)] uppercase tracking-widest mb-4">
              Win Big
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Over <span className="text-[var(--gold)] text-glow-gold">$10,000</span> in Prizes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compete for cash prizes, mentorship opportunities, and more. 
              Every participant goes home with swag!
            </p>
          </div>

          {/* Main prizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {prizes.map((prize, index) => (
              <div 
                key={index}
                className="group relative glass-card rounded-2xl p-8 text-center transition-all duration-500 hover:scale-[1.02]"
                style={{ 
                  boxShadow: `0 0 40px rgba(var(--${prize.color === 'gold' ? '254, 196, 37' : prize.color === 'cyan' ? '97, 182, 207' : '163, 1, 70'}), 0.15)`,
                }}
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `inset 0 0 60px rgba(var(--${prize.color === 'gold' ? '254, 196, 37' : prize.color === 'cyan' ? '97, 182, 207' : '163, 1, 70'}), 0.1)`,
                  }}
                />
                
                {/* Icon */}
                <div 
                  className="relative w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    background: `linear-gradient(135deg, color-mix(in srgb, var(--${prize.color}) 20%, transparent), transparent)`,
                    border: `1px solid color-mix(in srgb, var(--${prize.color}) 30%, transparent)`,
                  }}
                >
                  <prize.icon 
                    className="h-10 w-10" 
                    style={{ color: `var(--${prize.color})` }}
                  />
                </div>

                {/* Place */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {prize.place}
                </h3>

                {/* Amount */}
                <div 
                  className="text-5xl font-bold mb-6"
                  style={{ color: `var(--${prize.color})` }}
                >
                  {prize.amount}
                </div>

                {/* Extras */}
                <ul className="space-y-3">
                  {prize.extras.map((extra, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <Gift className="h-4 w-4" style={{ color: `var(--${prize.color})` }} />
                      {extra}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Track prizes */}
          <div className="animated-border rounded-2xl">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
                Track & Special Awards
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {trackPrizes.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-xl bg-secondary/30 text-center border border-border/30 hover:border-[var(--cyan)]/30 transition-colors"
                  >
                    <p className="text-sm text-muted-foreground mb-2">{item.track}</p>
                    <p className="text-2xl font-bold text-[var(--cyan)]">{item.prize}</p>
                  </div>
                ))}
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

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LogisticsPageMobile } from "@/components/logistics/logistics-page-mobile"
import { 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  Wifi, 
  Coffee,
  Laptop,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Logistics | Globehack 2026",
  description: "Everything you need to know about attending Globehack 2026 - venue, amenities, and more.",
}

const venueDetails = [
  { href: "https://maps.app.goo.gl/c411Svv7Ce9MX4Sq8", icon: MapPin, label: "Location", value: "Arizona State University, Tempe Campus, ECG 150", gradient: "from-pink-500 to-rose-500", glowColor: "rgba(236, 72, 153, 0.3)" },
  { href: "#", icon: Calendar, label: "Dates", value: "April 18-19, 2026", gradient: "from-cyan-500 to-teal-500", glowColor: "rgba(34, 211, 238, 0.3)" },
  { href: "#", icon: Clock, label: "Duration", value: "24 Hours", gradient: "from-blue-500 to-indigo-500", glowColor: "rgba(59, 130, 246, 0.3)" },
  { href: "#", icon: Users, label: "Capacity", value: "250+ Hackers", gradient: "from-amber-500 to-yellow-500", glowColor: "rgba(250, 204, 21, 0.3)" },
]

const amenities = [
  { href: "#", icon: Wifi, label: "High-Speed WiFi", gradient: "from-cyan-500 to-blue-500" },
  { href: "#", icon: Coffee, label: "Free Meals & Snacks", gradient: "from-amber-500 to-orange-500" },
  { href: "#", icon: Laptop, label: "Power Outlets", gradient: "from-blue-500 to-indigo-500" },
]

const eligibility = [
  "Must be 18 years or older",
  "Open to students and professionals",
  "Teams of 1-5 members",
  "Must attend in-person",
  "All skill levels welcome",
  "Valid ID required",
]

function LogisticsDesktop() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-magenta w-[400px] h-[400px] top-20 -left-20" />
          <div className="orb orb-gold w-[300px] h-[300px] top-40 -right-20" />
          <div className="orb orb-blue w-[250px] h-[250px] bottom-10 left-1/3" />
          <div className="grid-overlay" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-amber-400 uppercase tracking-widest mb-4">
            Everything You Need
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Event </span>
            <span className="text-amber-400 text-glow-gold">Logistics</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the venue, what to bring, 
            and how to prepare for Globehack 2026.
          </p>
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgb(12,12,24)] to-background" />
        <div className="orb orb-blue w-[300px] h-[300px] top-1/3 -right-32 opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${detail.gradient}`}
                      style={{ boxShadow: `0 8px 24px ${detail.glowColor}` }}
                    >
                      <detail.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <a href={detail.href}className="text-foreground font-medium">{detail.value}</a>
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
                    className="flex items-center gap-3 p-4 rounded-xl glass-card"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${amenity.gradient}`}>
                      <amenity.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-foreground text-sm">{amenity.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="glass-card rounded-2xl p-6" style={{ boxShadow: '0 0 30px rgba(250, 204, 21, 0.1)' }}>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-yellow-500">
                    <Laptop className="h-4 w-4 text-white" />
                  </div>
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
      <section className="py-20 relative">
        <div className="orb orb-red w-[250px] h-[250px] bottom-20 -left-24 opacity-20" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animated-border rounded-3xl">
            <div className="glass-panel rounded-3xl p-10 text-center" style={{ background: 'rgb(8,8,16)' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                Who Can Participate?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl glass-card">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/register">
                <Button 
                  size="lg" 
                  className="glass-button text-white px-10 py-7 rounded-2xl group"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function LogisticsPage() {
  return (
    <>
      <div className="hidden md:block">
        <LogisticsDesktop />
      </div>
      <div className="block md:hidden">
        <Navigation />
        <LogisticsPageMobile />
        <Footer />
      </div>
    </>
  )
}

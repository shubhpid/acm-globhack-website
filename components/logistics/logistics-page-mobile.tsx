import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Wifi,
  Coffee,
  Laptop,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const venueDetails = [
  { href: "https://maps.app.goo.gl/sKu1942SYTb4tYR9A", icon: MapPin, label: "Location & Workshop Day #1", value: "Arizona State University, Tempe Campus, LSE 104", gradient: "from-pink-500 to-rose-600", glowColor: "rgba(236, 72, 153, 0.3)", underline: true },
  { href: "https://maps.app.goo.gl/c411Svv7Ce9MX4Sq8", icon: MapPin, label: "Location & Workshop Day #2", value: "Arizona State University, Tempe Campus, ECG 101", gradient: "from-pink-500 to-rose-600", glowColor: "rgba(236, 72, 153, 0.3)", underline: true },
  { href: "#", icon: Calendar, label: "Dates", value: "April 18-19, 2026", gradient: "from-cyan-500 to-teal-600", glowColor: "rgba(34, 211, 238, 0.3)", underline: false },
  { href: "#", icon: Clock, label: "Duration", value: "24 Hours", gradient: "from-blue-500 to-indigo-600", glowColor: "rgba(59, 130, 246, 0.3)", underline: false },
  { href: "#", icon: Users, label: "Capacity", value: "250+ Hackers", gradient: "from-amber-500 to-yellow-600", glowColor: "rgba(250, 204, 21, 0.3)", underline: false },
]

const amenities = [
  { href: "#", icon: Wifi, label: "High-Speed WiFi", gradient: "from-cyan-500 to-blue-600" },
  { href: "#", icon: Coffee, label: "Free Meals & Snacks", gradient: "from-amber-500 to-orange-600" },
  { href: "#", icon: Laptop, label: "Power Outlets", gradient: "from-blue-500 to-indigo-600" },
]

const eligibility = [
  "Must be 18 years or older",
  "Open to students and professionals",
  "Teams of 1-4 members",
  "Must attend in-person",
  "All skill levels welcome",
  "Valid ID required",
]

export function LogisticsPageMobile() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(8,8,16)]" />
        <div className="absolute top-0 left-0 w-[180px] h-[180px] rounded-full bg-amber-500/5 blur-[60px] pointer-events-none" />

        <div className="relative z-10 text-center">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-2">
            Everything You Need
          </p>
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-foreground">Event </span>
            <span className="text-amber-400">Logistics</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Venue info, what to bring, and how to prepare for Globehack 2026.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="px-4 pb-6">
        <div className="glass-card rounded-xl p-4">
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Event Details</h2>
          <div className="flex flex-col gap-3">
            {venueDetails.map((detail, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${detail.gradient}`}
                  style={{ boxShadow: `0 4px 12px ${detail.glowColor}` }}
                >
                  <detail.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">{detail.label}</p>
                 <a href={detail.href}>
                    <p className="text-xs hover:text-blue-400 text-foreground font-medium">{detail.value}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="px-4 pb-6">
        <div className="glass-card rounded-xl p-4">
          <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Amenities</h2>
          <div className="flex flex-col gap-2">
            {amenities.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg glass-card">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${a.gradient}`}>
                  <a.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="px-4 pb-6">
        <div className="glass-card rounded-xl p-4">
          <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">What to Bring</h2>
          <ul className="text-sm text-muted-foreground space-y-1.5">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />Laptop and charger</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />Valid photo ID</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />Comfortable clothes</li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="px-4 pb-12">
        <div className="glass-panel rounded-2xl p-5 border border-white/5">
          <h2 className="text-base font-bold text-foreground mb-4 text-center">Who Can Participate?</h2>
          <div className="flex flex-col gap-2 mb-5">
            {eligibility.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg glass-card">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <Link href="/register">
            <Button size="sm" className="glass-button text-white rounded-xl w-full py-5 group">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

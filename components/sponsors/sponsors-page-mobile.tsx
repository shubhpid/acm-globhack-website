import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const sponsors = {
  platinum: [{ name: "TechCorp Global", logo: "TC", description: "Leading provider of cloud infrastructure and developer tools.", website: "#" }],
  gold: [
    { name: "InnovateLabs", logo: "IL", description: "AI research company making machine learning accessible.", website: "#" },
    { name: "DevFlow Inc", logo: "DF", description: "Developer productivity platform for faster shipping.", website: "#" },
  ],
  silver: [
    { name: "CloudScale", logo: "CS", description: "Enterprise cloud solutions.", website: "#" },
    { name: "DataStream", logo: "DS", description: "Real-time analytics platform.", website: "#" },
    { name: "SecureNet", logo: "SN", description: "Cybersecurity solutions.", website: "#" },
  ],
  bronze: [
    { name: "StartupHub", logo: "SH", description: "Incubator for tech startups.", website: "#" },
    { name: "CodeCraft", logo: "CC", description: "Online learning for developers.", website: "#" },
  ],
}

const partners = [
  { name: "ACM at ASU", logo: "/images/acm-asu-logo.png", description: "ACM student chapter at Arizona State University.", website: "https://asu.acm.org" },
  { name: "Global Career Network", logo: "/images/gcn-logo.png", description: "Connecting students with global career opportunities.", website: "https://globalcareernetwork.org" },
]

const tierColors: Record<string, string> = {
  platinum: "text-cyan-400",
  gold: "text-amber-400",
  silver: "text-gray-300",
  bronze: "text-orange-400",
  partners: "text-blue-400",
}

const tierGlows: Record<string, string> = {
  platinum: "rgba(34,211,238,0.15)",
  gold: "rgba(250,204,21,0.15)",
  silver: "rgba(192,192,192,0.15)",
  bronze: "rgba(205,127,50,0.15)",
  partners: "rgba(59,130,246,0.15)",
}

export function SponsorsPageMobile() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(8,8,16)]" />
        <div className="absolute top-0 left-0 w-[180px] h-[180px] rounded-full bg-amber-500/5 blur-[60px] pointer-events-none" />

        <div className="relative z-10 text-center">
          <p className="text-xs font-medium text-amber-400 uppercase tracking-widest mb-2">
            Our Partners
          </p>
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-foreground">Our </span>
            <span className="text-amber-400">Sponsors</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Made possible by the generous support of our sponsors and organizing partners.
          </p>
        </div>
      </section>

      {/* Organizing Partners */}
      <section className="px-4 pb-6">
        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${tierColors.partners}`}>Organizing Partners</p>
        <div className="flex flex-col gap-2.5">
          {partners.map((p, i) => (
            <Link key={i} href={p.website} target="_blank" rel="noopener noreferrer">
              <div className="glass-card rounded-xl p-3.5 flex items-center gap-3">
                <Image src={p.logo} alt={p.name} width={40} height={40} style={{ width: 40, height: 40 }} className="object-contain shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                    {p.name} <ExternalLink className="h-3 w-3 opacity-60" />
                  </p>
                  <p className="text-xs text-muted-foreground">{p.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Platinum */}
      <section className="px-4 pb-6">
        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${tierColors.platinum}`}>Platinum</p>
        {sponsors.platinum.map((s, i) => (
          <Link key={i} href={s.website} target="_blank" rel="noopener noreferrer">
            <div className="glass-card rounded-xl p-4 text-center" style={{ boxShadow: `0 0 20px ${tierGlows.platinum}` }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold text-cyan-400 mx-auto mb-3" style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)" }}>
                {s.logo}
              </div>
              <p className="text-sm font-semibold text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.description}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Gold */}
      <section className="px-4 pb-6">
        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${tierColors.gold}`}>Gold</p>
        <div className="flex flex-col gap-2.5">
          {sponsors.gold.map((s, i) => (
            <Link key={i} href={s.website} target="_blank" rel="noopener noreferrer">
              <div className="glass-card rounded-xl p-3.5 flex items-center gap-3" style={{ boxShadow: `0 0 16px ${tierGlows.gold}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-amber-400 shrink-0" style={{ background: "rgba(250,204,21,0.1)", border: "1px solid rgba(250,204,21,0.2)" }}>
                  {s.logo}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Silver */}
      <section className="px-4 pb-6">
        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${tierColors.silver}`}>Silver</p>
        <div className="grid grid-cols-3 gap-2">
          {sponsors.silver.map((s, i) => (
            <Link key={i} href={s.website} target="_blank" rel="noopener noreferrer">
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-gray-300 mx-auto mb-2 text-xs" style={{ background: "rgba(192,192,192,0.1)", border: "1px solid rgba(192,192,192,0.2)" }}>
                  {s.logo}
                </div>
                <p className="text-[10px] font-medium text-foreground">{s.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bronze */}
      <section className="px-4 pb-12">
        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${tierColors.bronze}`}>Bronze</p>
        <div className="grid grid-cols-2 gap-2">
          {sponsors.bronze.map((s, i) => (
            <Link key={i} href={s.website} target="_blank" rel="noopener noreferrer">
              <div className="glass-card rounded-xl p-3 text-center">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-orange-400 mx-auto mb-2 text-xs" style={{ background: "rgba(205,127,50,0.1)", border: "1px solid rgba(205,127,50,0.2)" }}>
                  {s.logo}
                </div>
                <p className="text-[10px] font-medium text-foreground">{s.name}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className="mt-6 glass-panel rounded-2xl p-5 text-center border border-white/5">
          <h2 className="text-base font-bold text-foreground mb-2">Become a Sponsor</h2>
          <p className="text-xs text-muted-foreground mb-4">
            Support Arizona&apos;s first go-to-market hackathon and connect with top tech talent.
          </p>
          <Link href="mailto:globehacks@asu.edu">
            <Button size="sm" className="glass-button text-white rounded-xl w-full py-5 group">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight, Instagram, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const SPONSOR_REVEAL_DATE = new Date("2026-04-06T00:00:00")
const sponsorsRevealed = new Date() >= SPONSOR_REVEAL_DATE

const sponsors = {
  drink: [
    {
      name: "Olipop",
      logo: "O",
      logoPath: "/images/olipop-logo.png",
      description: "Olipop is supporting Globehack as a drink sponsor with better-for-you soda for participants.",
      website: "https://drinkolipop.com",
    },
    {
      name: "Red Bull",
      logo: "RB",
      logoPath: "/images/redbull-logo.png",
      description: "Red Bull is supporting Globehack as a drink sponsor to help keep participants energized throughout the event.",
      website: "https://www.redbull.com",
    },
  ],
  gold: [
    {
      name: "Lofty",
      logo: "M",
      logoPath: "/images/lofty-logo.png",
      description: "Lofty provides an AI-powered platform that helps real estate professionals to increase their productivity and accelerate business growth.",
      website: "https://lofty.com",
    },
    {
      name: "Trucker Path",
      logo: "M",
      logoPath: "/images/Trucker-Path-logo.png",
      description: "Phoenix-based Trucker Path is the provider of a wide range of truck driver-centric mobility products. Its Trucker Path app is currently in use by nearly 1 million professional truck drivers.",
      website: "https://truckerpath.com",
    },
    {
      name: "Vector",
      logo: "",
      logoPath: "/images/go-vector-ai.jpeg",
      description: "Turn ideas into production apps that earn income. Vector is an AI-powered app builder for early founders, who might not come with technical backgrounds.",
      website: "https://govector.ai",
    },
  ],
  silver: [
    {
      name: "Hydrawav3",
      logo: "H",
      logoPath: "/images/hydrawav3_logo.jpeg",
      description: "Hydrawav3 is revolutionizing wellness with next-generation pain management technology that works in harmony with the body’s natural intelligence.",
      website: "https://www.hydrawav3.com",
    },
  ],
  bronze: [
    {
      name: "ISSC Future Self",
      logo: "IF",
      logoPath: "/images/issc-logo.jpeg",
      description: "FutureSelf is your personal and professional growth framework, helping build confidence, leadership skills, and real-world experience so you can thrive in a fast-changing global world.",
      website: "https://issc.asu.edu/f-1j-1-students/programs/futureself",
    },
  ],
  community: [
    {
      name: "ElevenLabs",
      logo: "EL",
      logoPath: "/images/eleven-labs-logo.webp",
      description: "ElevenLabs is transforming how we interact with technology through AI research and products.",
      website: "https://elevenlabs.io",
    },
    {
      name: "InsForge",
      logo: "IN",
      logoPath: "/images/insforge-logo.jpeg",
      description: "InsForge is building the first backend platform made for AI agents.Their platform gives agents everything they need to go from prompt to production.",
      website: "https://insforge.dev",
    },
    {
      name: "Tamagrow",
      logo: "T",
      logoPath: "/images/tamagrow-logo.png",
      description: "Tamagrow is a leading provider of innovative solutions for the modern workforce. Tamagrow monitors your GitHub commits and RSS feeds, then drafts posts for social media.",
      website: "https://tamagrow.app",
    },
  ],
}

const partners = [
  { 
    name: "ACM at ASU", 
    logo: "/images/acm-asu-logo.png", 
    description: "ACM student chapter at Arizona State University.", 
    website: "https://asu.acm.org",
    discord: "https://discord.gg/Vsr5f6kVH",
    instagram: "https://www.instagram.com/acm.asu/",
  },
  { 
    name: "Global Career Network", 
    logo: "/images/gcn-logo.png", 
    description: "Connecting students with global career opportunities.", 
    website: "https://gcn-asu.com/",
    discord: "https://discord.gg/9Rvq2A3N",
    instagram: "https://www.instagram.com/gcn.asu/",
  },
]

const tierColors: Record<string, string> = {
  drink: "#22C55E",
  gold: "#FFDD44",
  silver: "#E0E0E0",
  bronze: "#FC9F52",
  community: "#6BB2FF",
  partners: "#6BB2FF",
}

const tierGlows: Record<string, string> = {
  drink: "rgba(34,197,94,0.15)",
  gold: "rgba(255,221,68,0.15)",
  silver: "rgba(224,224,224,0.15)",
  bronze: "rgba(252,159,82,0.15)",
  community: "rgba(107,178,255,0.15)",
  partners: "rgba(107,178,255,0.15)",
}

function DiscordGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.769-.552 1.116a18.27 18.27 0 0 0-6.666 0A11.64 11.64 0 0 0 8.115 3a19.736 19.736 0 0 0-4.433 1.369C.873 8.58.11 12.687.492 16.742a19.9 19.9 0 0 0 5.239 2.672c.424-.574.802-1.18 1.127-1.817-.62-.233-1.214-.52-1.775-.857.149-.108.294-.22.434-.337 3.425 1.612 7.14 1.612 10.525 0 .141.116.286.229.434.337-.56.337-1.156.624-1.776.857.325.637.704 1.243 1.128 1.817a19.867 19.867 0 0 0 5.24-2.672c.444-4.699-.763-8.768-3.175-12.373ZM9.349 14.269c-1.02 0-1.855-.936-1.855-2.084 0-1.149.816-2.085 1.855-2.085 1.049 0 1.873.945 1.855 2.085 0 1.148-.816 2.084-1.855 2.084Zm5.302 0c-1.02 0-1.854-.936-1.854-2.084 0-1.149.816-2.085 1.854-2.085 1.05 0 1.874.945 1.856 2.085 0 1.148-.816 2.084-1.856 2.084Z" />
    </svg>
  )
}

function SponsorCardMobile({ sponsor, tier }: { sponsor: any; tier: string }) {
  const color = tierColors[tier]
  const glow = tierGlows[tier]

  return (
    <Link
      href={sponsorsRevealed ? sponsor.website : "#"}
      target={sponsorsRevealed ? "_blank" : undefined}
      rel={sponsorsRevealed ? "noopener noreferrer" : undefined}
    >
      <div
        className={`relative glass-card rounded-xl p-4 text-center mb-4 overflow-hidden ${
          sponsorsRevealed ? "" : "opacity-70"
        }`}
        style={{ boxShadow: `0 0 16px ${glow}` }}
      >
        <div className={!sponsorsRevealed ? "blur-xl scale-[1.02] opacity-35" : ""}>
          {sponsor.logoPath ? (
            <div className="w-14 h-14 mx-auto mb-2 flex items-center justify-center rounded-xl overflow-hidden bg-white border border-white/20">
              <Image
                src={sponsor.logoPath}
                alt={sponsor.name}
                width={56}
                height={56}
                className="object-contain w-full h-full bg-white"
              />
            </div>
          ) : (
            <div
              className="w-14 h-14 mx-auto mb-2 flex items-center justify-center rounded-xl font-bold text-xl"
              style={{ background: `${color}20`, border: `1px solid ${color}40` }}
            >
              {sponsor.logo}
            </div>
          )}
          <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-1">
            {sponsor.name} <ExternalLink className="h-3 w-3 opacity-60" />
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {sponsor.description}
          </p>
        </div>

        {!sponsorsRevealed && (
          <div className="absolute inset-0 rounded-xl bg-[rgba(12,12,22,0.74)] backdrop-blur-xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[rgba(30,30,46,0.9)] border border-white/10 flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
                <Lock className="h-6 w-6 text-white/85" />
              </div>
              <p className="text-xs text-white/90 font-semibold tracking-wide">
                Revealed on April 6th
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

function PartnerCardMobile({ partner }: { partner: any }) {
  return (
    <div className="glass-card rounded-xl p-3.5 flex items-center gap-3 mb-2">
      <Image 
        src={partner.logo} 
        alt={partner.name} 
        width={40} 
        height={40} 
        className="object-contain shrink-0" 
      />
      <div>
        <Link
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-foreground flex items-center gap-1 transition-colors hover:text-blue-400"
        >
          {partner.name} <ExternalLink className="h-3 w-3 opacity-60" />
        </Link>
          <div className="mt-2 mb-2 flex items-center gap-3 text-white/90">
            <Link
              href={partner.discord || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} Discord`}
              className="inline-flex items-center justify-center transition-colors duration-200 hover:text-blue-400"
            >
              <DiscordGlyph className="h-4 w-4" />
            </Link>
            <span className="h-5 w-px rounded-full bg-white/30" />
            <Link
              href={partner.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} Instagram`}
              className="inline-flex items-center justify-center transition-colors duration-200 hover:text-blue-400"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            {partner.description}
          </p>
      </div>
    </div>
  )
}

export function SponsorsPageMobile() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">

      {/* Hero */}
      <section className="pt-24 pb-8 px-4 relative overflow-hidden">
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
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.partners }}
        >
          Organizing Partners
        </p>
        {partners.map((p, i) => (
          <PartnerCardMobile key={i} partner={p} />
        ))}
      </section>

      {/* Gold */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.gold }}
        >
          Gold Sponsors
        </p>
        {sponsors.gold.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="gold" />
        ))}
      </section>

      {/* Silver */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.silver }}
        >
          Silver Sponsors
        </p>
        {sponsors.silver.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="silver" />
        ))}
      </section>

      {/* Bronze */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.bronze }}
        >
          Bronze Sponsors
        </p>
        {sponsors.bronze.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="bronze" />
        ))}
      </section>

      {/* Community */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.community }}
        >
          Community Partners
        </p>
        {sponsors.community.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="community" />
        ))}
      </section>

      {/* Drink Sponsor */}
      <section className="px-4 pb-6">
        <p 
          className={`text-xs font-bold uppercase tracking-wider mb-3`}
          style={{ color: tierColors.drink }}
        >
          Drink Sponsor
        </p>
        {sponsors.drink.map((s, i) => (
          <SponsorCardMobile key={i} sponsor={s} tier="drink" />
        ))}
      </section>

      {/* Become a sponsor CTA */}{/*
      <section className="px-4 pb-12">
        <div className="mt-6 glass-panel rounded-2xl p-5 text-center border border-white/5">
          <h2 className="text-base font-bold text-foreground mb-2">Become a Sponsor</h2>
          <p className="text-xs text-muted-foreground mb-4">
            Support Arizona&apos;s first go-to-market hackathon and connect with top tech talent.
          </p>
          <Link href="mailto:globehack@asu.edu">
            <Button 
              size="sm" 
              className="glass-button text-white rounded-xl w-full py-5 group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>*/}

    </main>
  )
}

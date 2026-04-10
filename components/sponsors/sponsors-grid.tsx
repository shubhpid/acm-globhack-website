"use client"

import { ExternalLink, Instagram, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SPONSOR_REVEAL_DATE = new Date("2026-04-04T00:00:00")
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
  community: [{
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
      logoPath: "/images/tamagrow-logo.jpg",
      description: "Tamagrow is a leading provider of innovative solutions for the modern workforce. Tamagrow monitors your GitHub commits and RSS feeds, then drafts posts for social media.",
      website: "https://tamagrow.app",
    },],
}

const partners = [
  {
    name: "ACM at ASU",
    logo: "/images/acm-asu-logo.png",
    description: "The Association for Computing Machinery student chapter at Arizona State University.",
    website: "https://asu.acm.org",
    discord: "https://discord.gg/Vsr5f6kVH",
    instagram: "https://www.instagram.com/acm.asu/",
  },
  {
    name: "Global Career Network",
    logo: "/images/gcn-logo.png",
    description: "Connecting students with global career opportunities and professional development.",
    website: "https://gcn-asu.com/",
    discord: "https://discord.gg/9Rvq2A3N",
    instagram: "https://www.instagram.com/gcn.asu/",
  },
]

const tierConfig: Record<string, { color: string; label: string; hex?: string }> = {
  drink: { color: "#22C55E", label: "Drink Sponsor", hex: "#000000"},
  gold: { color: "#FFDD44", label: "Gold Sponsors", hex: "#000000"},//"#FFDD44" }, // gold
  silver: { color: "#E0E0E0", label: "Silver Sponsors", hex: "#000000"},//"#F0F0F0" }, // silver
  bronze: { color: "#FC9F52", label: "Bronze Sponsors", hex: "#000000"},//"#FF7F52" }, // bronze
  community: { color: "#6BB2FF", label: "Community Partners", hex: "#000000"},//"#3B82F6" },
  partners: { color: "#6BB2FF", label: "Organizing Partners", hex: "#000000"},//"#3B82F6" },
  
  
}

function DiscordGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.769-.552 1.116a18.27 18.27 0 0 0-6.666 0A11.64 11.64 0 0 0 8.115 3a19.736 19.736 0 0 0-4.433 1.369C.873 8.58.11 12.687.492 16.742a19.9 19.9 0 0 0 5.239 2.672c.424-.574.802-1.18 1.127-1.817-.62-.233-1.214-.52-1.775-.857.149-.108.294-.22.434-.337 3.425 1.612 7.14 1.612 10.525 0 .141.116.286.229.434.337-.56.337-1.156.624-1.776.857.325.637.704 1.243 1.128 1.817a19.867 19.867 0 0 0 5.24-2.672c.444-4.699-.763-8.768-3.175-12.373ZM9.349 14.269c-1.02 0-1.855-.936-1.855-2.084 0-1.149.816-2.085 1.855-2.085 1.049 0 1.873.945 1.855 2.085 0 1.148-.816 2.084-1.855 2.084Zm5.302 0c-1.02 0-1.854-.936-1.854-2.084 0-1.149.816-2.085 1.854-2.085 1.05 0 1.874.945 1.856 2.085 0 1.148-.816 2.084-1.856 2.084Z" />
    </svg>
  )
}

function SponsorCard({
  sponsor,
  tier,
  size = "md",
}: {
  sponsor: { name: string; logo: string; description: string; website: string; logoPath?: string }
  tier: string
  size?: "lg" | "md" | "sm"
}) {
  const sizeClasses = {
    lg: "p-10",
    md: "p-8",
    sm: "p-6",
  }

  const logoSizes = {
    lg: "w-24 h-24 text-3xl",
    md: "w-20 h-20 text-2xl",
    sm: "w-14 h-14 text-lg",
  }

  const color = tierConfig[tier].color
  const hexGlow = tierConfig[tier].hex || "#000";
  return (
    <Link
      href={sponsorsRevealed ? sponsor.website : "#"}
      target={sponsorsRevealed ? "_blank" : undefined}
      rel={sponsorsRevealed ? "noopener noreferrer" : undefined}
      className="group block h-full"
    >
      <div
        className={`group relative glass-card rounded-2xl ${sizeClasses[size]} transition-all duration-500 h-full overflow-hidden ${
          sponsorsRevealed ? "glass-card-hover" : "border-dashed opacity-70"
        }`}
      >
        <div className={`flex flex-col items-center text-center h-full ${!sponsorsRevealed ? "blur-xl scale-[1.02] opacity-40" : ""}`}>
          {/* Logo placeholder */}
          <div
            className={`${logoSizes[size]} rounded-2xl flex items-center justify-center mb-6 font-bold transition-transform duration-300 group-hover:scale-110`}
            style={{
              background: "#fff",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            {sponsor.logoPath ? (
              <Image
                src={sponsor.logoPath}
                alt={sponsor.name + " logo"}
                width={64}
                height={64}
                className="object-contain w-full h-full rounded-md bg-white"
                style={{ boxShadow: `0 0 10px 4px ${hexGlow}50` }}
                unoptimized
              />
            ) : (
              sponsor.logo
            )}
          </div>

          {/* Name */}
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 transition-colors">
            {sponsor.name}
            <ExternalLink className="h-4 w-4 transition-opacity" />
          </h3>

          {/* Description */}
          {size !== "sm" && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sponsor.description}
            </p>
          )}
        </div>

        {!sponsorsRevealed && (
          <div className="absolute inset-0 rounded-2xl bg-[rgba(12,12,22,0.72)] backdrop-blur-xl flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[rgba(30,30,46,0.88)] border border-white/10 flex items-center justify-center mx-auto mb-4 shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                <Lock className="h-8 w-8 text-white/85" />
              </div>
              <p className="text-sm text-white/90 font-semibold tracking-wide">
                Revealed on April 4th
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}

function PartnerCard({ 
  partner 
}: { 
  partner: { name: string; logo: string; description: string; website: string; discord?: string; instagram?: string }
}) {
  return (
    <div className="group block h-full">
      <div className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 h-full">
        <div className="flex flex-col items-center text-center h-full">
          {/* Actual logo */}
          <div className="w-24 h-24 mb-6 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={96}
              height={96}
              className="object-contain"
              style={{ width: "auto", height: "auto", maxWidth: 96, maxHeight: 96 }}
            />
          </div>

          {/* Name */}
          <Link
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 transition-colors hover:text-blue-400"
          >
            {partner.name}
            <ExternalLink className="h-4 w-4 transition-opacity" />
          </Link>

          <div className="mb-4 flex items-center gap-4 text-white/90">
            <Link
              href={partner.discord || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} Discord`}
              className="inline-flex items-center justify-center transition-colors duration-200 hover:text-blue-400"
            >
              <DiscordGlyph className="h-6 w-6" />
            </Link>
            <span className="h-8 w-px rounded-full bg-white/30" />
            <Link
              href={partner.instagram || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} Instagram`}
              className="inline-flex items-center justify-center transition-colors duration-200 hover:text-blue-400"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {partner.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function TierHeader({ tier }: { tier: string }) {
  const { color, label } = tierConfig[tier]
  const isVariable = color.startsWith('#') ? false : true
  const displayColor = isVariable ? `var(--${color})` : color

  return (
    <div className="flex items-center gap-6 mb-10 justify-center">
      <div 
        className="h-px flex-1 max-w-32"
        style={{ 
          background: `linear-gradient(to right, transparent, ${displayColor}50)`,
        }}
      />
      <h2 
        className="text-xl font-bold uppercase tracking-wider"
        style={{ color: displayColor }}
      >
        {label}
      </h2>
      <div 
        className="h-px flex-1 max-w-32"
        style={{ 
          background: `linear-gradient(to left, transparent, ${displayColor}50)`,
        }}
      />
    </div>
  )
}

export function SponsorsGrid() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a12] to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Organizing Partners */}
        <div className="mb-24">
          <TierHeader tier="partners" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-20">
          <TierHeader tier="gold" />
          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto md:grid-cols-3">
            {sponsors.gold.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="gold" size="lg" />
            ))}
          </div>
        </div>

        {/* Silver */}
        <div className="mb-20">
          <TierHeader tier="silver" />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-items-center max-w-lg mx-auto mb-20">
            {sponsors.silver.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="silver" size="md" />
            ))}
          </div>
        </div>

        {/* Bronze */}
        <div>
          <TierHeader tier="bronze" />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-items-center max-w-lg mx-auto mb-20">
            {sponsors.bronze.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="bronze" size="md" />
            ))}
          </div>
        </div>
        
        {/* Community Partners */}
        <div className="mb-20">
          <TierHeader tier="community" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-8xl mx-auto">
            {sponsors.community.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="community" size="md" />
            ))}
          </div>
        </div>

        {/* Drink Sponsor */}
        <div className="mb-20">
          <TierHeader tier="drink" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.drink.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="drink" size="md" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

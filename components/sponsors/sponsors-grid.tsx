"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const sponsors = {
  gold: [
    {
      name: "Moatable (Lofty, Trucker)",
      logo: "M",
      logoPath: "/images/moatable-logo.jpeg",
      description: "Confirmed Gold sponsor supporting Globehack.",
      website: "https://www.moatable.com",
    },
    {
      name: "Vector",
      logo: "",
      logoPath: "/images/go-vector-ai.jpeg",
      description: "Confirmed Gold sponsor supporting Globehack.",
      website: "https://govector.ai",
    },
  ],
  silver: [
    {
      name: "Hydrawav3",
      logo: "H",
      logoPath: "/images/hydrawav3_logo.jpeg",
      description: "Confirmed Silver sponsor supporting Globehack.",
      website: "https://www.hydrawav3.com",
    },
  ],
  bronze: [
    {
      name: "ISSC Future Self",
      logo: "IF",
      logoPath: "/images/issc-logo.jpeg",
      description: "Confirmed Bronze sponsor supporting Globehack.",
      website: "#",
    },
    
  ],
  community: [{
      name: "ElevenLabs",
      logo: "EL",
      logoPath: "/images/eleven-labs-logo.webp",
      description: "Confirmed sponsor supporting Globehack.",
      website: "https://elevenlabs.io",
    },
    {
      name: "InsForge",
      logo: "IN",
      logoPath: "/images/insforge-logo.jpeg",
      description: "Confirmed sponsor supporting Globehack.",
      website: "https://insforge.dev",
    },
    {
      name: "Tamagrow",
      logo: "T",
      logoPath: "/images/tamagrow-logo.png",
      description: "Confirmed sponsor supporting Globehack.",
      website: "https://tamagrow.app",
    },],
}

const partners = [
  {
    name: "ACM at ASU",
    logo: "/images/acm-asu-logo.png",
    description: "The Association for Computing Machinery student chapter at Arizona State University.",
    website: "https://asu.acm.org",
  },
  {
    name: "Global Career Network",
    logo: "/images/gcn-logo.png",
    description: "Connecting students with global career opportunities and professional development.",
    website: "https://globalcareernetwork.org",
  },
]

const tierConfig: Record<string, { color: string; label: string; hex?: string }> = {
  gold: { color: "#FFDD44", label: "Gold Sponsors", hex: "#000000"},//"#FFDD44" }, // gold
  silver: { color: "#E0E0E0", label: "Silver Sponsors", hex: "#000000"},//"#F0F0F0" }, // silver
  bronze: { color: "#FC9F52", label: "Bronze Sponsors", hex: "#000000"},//"#FF7F52" }, // bronze
  community: { color: "#6BB2FF", label: "Community Partners", hex: "#000000"},//"#3B82F6" },
  partners: { color: "#6BB2FF", label: "Organizing Partners", hex: "#000000"},//"#3B82F6" },
  
  
}

function SponsorCard({ 
  sponsor, 
  tier,
  size = "md" 
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
  const displayColor = color;

  return (
    <Link 
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div 
        className={`glass-card glass-card-hover rounded-2xl ${sizeClasses[size]} transition-all duration-500 h-full`}
      >
        <div className="flex flex-col items-center text-center h-full">
          {/* Logo placeholder */}
          <div 
            className={`${logoSizes[size]} rounded-2xl flex items-center justify-center mb-6 font-bold transition-transform duration-300 group-hover:scale-110`}
            style={{ 
              background: "#000",
              border: "1px solid #000",
              color: "#fff",
            }}
          >
            {sponsor.logoPath ? (
              <Image
                src={sponsor.logoPath}
                alt={sponsor.name + " logo"}
                width={64}
                height={64}
                className="object-contain w-full h-full rounded-md"
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
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>

          {/* Description */}
          {size !== "sm" && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sponsor.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

function PartnerCard({ 
  partner 
}: { 
  partner: { name: string; logo: string; description: string; website: string }
}) {
  return (
    <Link 
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
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
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 transition-colors group-hover:text-[var(--cyan)]">
            {partner.name}
            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {partner.description}
          </p>
        </div>
      </div>
    </Link>
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
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto md:grid-cols-2">
            {sponsors.gold.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="gold" size="lg" />
            ))}
          </div>
        </div>

        {/* Silver */}
        <div className="mb-20">
          <TierHeader tier="silver" />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-items-center max-w-4xl mx-auto mb-20">
            {sponsors.silver.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="silver" size="md" />
            ))}
          </div>
        </div>

        {/* Bronze */}
        <div>
          <TierHeader tier="bronze" />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 justify-items-center max-w-4xl mx-auto mb-20">
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
      </div>
    </section>
  )
}

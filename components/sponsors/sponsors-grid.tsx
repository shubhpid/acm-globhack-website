"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const sponsors = {
  platinum: [
    {
      name: "TechCorp Global",
      logo: "TC",
      description: "Leading provider of cloud infrastructure and developer tools, empowering teams to build scalable applications.",
      website: "#",
    },
  ],
  gold: [
    {
      name: "InnovateLabs",
      logo: "IL",
      description: "AI research company focused on making machine learning accessible to developers of all skill levels.",
      website: "#",
    },
    {
      name: "DevFlow Inc",
      logo: "DF",
      description: "Developer productivity platform helping teams ship faster with automated workflows.",
      website: "#",
    },
  ],
  silver: [
    {
      name: "CloudScale",
      logo: "CS",
      description: "Enterprise cloud solutions for modern applications.",
      website: "#",
    },
    {
      name: "DataStream",
      logo: "DS",
      description: "Real-time data analytics and visualization platform.",
      website: "#",
    },
    {
      name: "SecureNet",
      logo: "SN",
      description: "Cybersecurity solutions for startups and enterprises.",
      website: "#",
    },
  ],
  bronze: [
    {
      name: "StartupHub",
      logo: "SH",
      description: "Incubator and co-working space for tech startups.",
      website: "#",
    },
    {
      name: "CodeCraft",
      logo: "CC",
      description: "Online learning platform for developers.",
      website: "#",
    },
  ],
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

const tierConfig: Record<string, { color: string; label: string }> = {
  platinum: { color: "cyan", label: "Platinum Sponsors" },
  gold: { color: "gold", label: "Gold Sponsors" },
  silver: { color: "#C0C0C0", label: "Silver Sponsors" },
  bronze: { color: "#CD7F32", label: "Bronze Sponsors" },
  partners: { color: "#3B82F6", label: "Organizing Partners" },
}

function SponsorCard({ 
  sponsor, 
  tier,
  size = "md" 
}: { 
  sponsor: { name: string; logo: string; description: string; website: string }
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
  const isVariable = color.startsWith('#') ? false : true

  return (
    <Link 
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div 
        className={`glass-card glass-card-hover rounded-2xl ${sizeClasses[size]} transition-all duration-500 h-full`}
        style={{ 
          boxShadow: `0 0 30px ${isVariable ? `color-mix(in srgb, var(--${color}) 10%, transparent)` : `${color}15`}`,
        }}
      >
        <div className="flex flex-col items-center text-center h-full">
          {/* Logo placeholder */}
          <div 
            className={`${logoSizes[size]} rounded-2xl flex items-center justify-center mb-6 font-bold transition-transform duration-300 group-hover:scale-110`}
            style={{ 
              background: `linear-gradient(135deg, ${isVariable ? `color-mix(in srgb, var(--${color}) 20%, transparent)` : `${color}20`}, transparent)`,
              border: `1px solid ${isVariable ? `color-mix(in srgb, var(--${color}) 30%, transparent)` : `${color}30`}`,
              color: isVariable ? `var(--${color})` : color,
            }}
          >
            {sponsor.logo}
          </div>

          {/* Name */}
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 transition-colors group-hover:text-[var(--cyan)]">
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
          <div className="relative w-24 h-24 mb-6 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
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

        {/* Platinum */}
        <div className="mb-20">
          <TierHeader tier="platinum" />
          <div className="grid grid-cols-1 max-w-2xl mx-auto">
            {sponsors.platinum.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="platinum" size="lg" />
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-20">
          <TierHeader tier="gold" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.gold.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="gold" size="md" />
            ))}
          </div>
        </div>

        {/* Silver */}
        <div className="mb-20">
          <TierHeader tier="silver" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="silver" size="md" />
            ))}
          </div>
        </div>

        {/* Bronze */}
        <div>
          <TierHeader tier="bronze" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sponsors.bronze.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} tier="bronze" size="sm" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { User, Crown, Users, Briefcase } from "lucide-react"

interface Officer {
  name: string
  role: string
  area?: string
  img?: string
  href?: string

  img2?: string
}

const leadership: Officer[] = [
  { name: "Yash Mittal", role: "President", img: "/images/Team Images/YMittal.jpeg", href: "https://www.linkedin.com/in/yashmittalz/" },
  { name: "Utkarsh Byahut", role: "Vice President", img: "/images/Team Images/UByahut.jpeg", href: "https://www.linkedin.com/in/utkarshbyahut/", img2:"/images/Team Images/UBsans.webp" },
  { name: "John Basil", role: "Advisor", img: "/images/Team Images/JBasil.webp", href: "https://www.linkedin.com/in/jrbasil-asu/" },
  { name: "Souradip Nath", role: "Advisor", img: "/images/Team Images/SNath.png", href: "https://www.linkedin.com/in/souradip-nath/" },
  { name: "Yoshihiro Kobayashi", role: "Advisor", img: "/images/Team Images/YKobayashi.jpeg", href: "https://www.linkedin.com/in/yoshihirokobayashi/" },
];

const sectionManagers: Officer[] = [
  { name: "Isaiah Brown", role: "Manager", area: "Logistics & Operations", img: "/images/Team Images/IBrown.jpeg", href: "https://www.linkedin.com/in/swe-isaiah-brown/" },
  { name: "Pranjal Shrivastava", role: "Manager", area: "Finance & Treasury", img: "/images/Team Images/PShrivastava.jpeg", href: "https://www.linkedin.com/in/pranjal-shriv/" },
  { name: "Souradeep Banerjee", role: "Manager", area: "Special Programs & Industry", img: "/images/Team Images/SBanerjee.jpeg", href: "https://www.linkedin.com/in/souradeep1101/" },
  { name: "Shubhadip Saha", role: "Coordinator", area: "Engagement & Logistics", img: "/images/Team Images/SSaha.jpg", href: "https://www.linkedin.com/in/shubhadip-saha/", img2:"/images/Team Images/SSkris.png" },
  { name: "Varshini Akula", role: "Manager", area: "Engagement & Technology", img: "/images/Team Images/VAkula.jpeg", href: "https://www.linkedin.com/in/varshini-akula-8a39ba200/?originalSubdomain=in" },
  /*{ name: "", role: "Manager", area: "AI/ML" },
  { name: "Ryan Thompson", role: "Coordinator",  area: "AI/ML"},
  { name: "Jessica Patel", role: "Manager", area: "AI/ML" },
  { name: "Ryan Thompson", role: "Coordinator",  area: "AI/ML"},
  { name: "Jessica Patel", role: "Manager", area: "AI/ML" },
  { name: "Ryan Thompson", role: "Coordinator",  area: "AI/ML"},
  { name: "Jessica Patel", role: "Manager", area: "AI/ML" },
  { name: "Ryan Thompson", role: "Coordinator",  area: "AI/ML"},
  { name: "Jessica Patel", role: "Manager", area: "AI/ML" },
  { name: "Ryan Thompson", role: "Coordinator",  area: "AI/ML"},*/
]

const officers: Officer[] = [
  { name: "Amanda Liu", role: "Treasurer" },
  { name: "Chris Martinez", role: "Secretary" },
  { name: "Nicole Brown", role: "Events Chair" },
  { name: "James Wilson", role: "Marketing Lead" },
  { name: "Sophia Garcia", role: "Outreach Coordinator" },
  { name: "Anthony Vishwakumar", role: "janitor" },
]

import React, { useRef, useState } from "react";

function OfficerCard({ officer, featured = false }: { officer: Officer; featured?: boolean }) {
  const [showAltImage, setShowAltImage] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setShowAltImage(true);
    }, 5000); // 5 seconds
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setShowAltImage(false);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
        featured ? "bg-gradient-to-br from-primary/5 to-accent/5" : ""
      }`}
    >
      <a href={officer.href} target="_blank" rel="noopener noreferrer">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
              featured
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            } transition-colors group-hover:bg-primary group-hover:text-primary-foreground`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <img
              src={showAltImage ? officer.img2 : officer.img}
              alt={officer.name}
              className={`rounded-xl object-cover h-14 w-14 transition-opacity duration-700`}
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground text-lg">{officer.name}</h4>
            <p className="text-primary font-medium text-sm">{officer.role}</p>
            {officer.area && (
              <p className="text-muted-foreground text-sm mt-1">{officer.area}</p>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export function OfficersSection() {
  return (
    <section id="officers" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Users size={16} className="text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Our Leadership
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Meet the <span className="text-primary">Officers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            The dedicated team working to build an amazing community for computing enthusiasts at ASU.
          </p>
        </div>

        {/* President & Vice President */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Crown size={20} className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">Executive Leadership</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((officer) => (
              <OfficerCard key={officer.name} officer={officer} featured />
            ))}
          </div>
        </div>

        {/* Section Managers & Coordinator */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase size={20} className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">Managers & Coordinators</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionManagers.map((officer) => (
              <OfficerCard key={officer.name} officer={officer} />
            ))}
          </div>
        </div>

        {/* Officers */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users size={20} className="text-primary" />
            <h3 className="text-xl font-bold text-foreground">Officers</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officers.map((officer) => (
              <OfficerCard key={officer.name} officer={officer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

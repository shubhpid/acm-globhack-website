"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Bell, Hash } from "lucide-react"

export function DiscordSection() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Static dark background */}
      <div className="absolute inset-0 bg-[rgb(8,8,16)]" />
      
      {/* Subtle, muted orbs - much darker */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#5865F2]/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Liquid glass container - translucent layer on top of dark background */}
        <div className="glass-panel rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-16 text-center border border-white/5">
          {/* Discord icon */}
          <div className="relative w-20 h-20 mx-auto mb-8">
            <div className="absolute inset-0 rounded-2xl bg-[#5865F2]/20 blur-xl" />
            <div className="relative w-full h-full rounded-2xl bg-[#5865F2]/80 flex items-center justify-center border border-[#5865F2]/30">
              <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Join Our Community
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
            Connect with fellow hackers, find teammates, get help from mentors, and stay updated 
            on all things <span className="font-zen-dots text-cyan-400">Globehacks</span>. Our Discord is the central hub for the hackathon community.
          </p>

          {/* Features - darker cards with subtle accents */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 mb-6 md:mb-10">
            {[
              { icon: Users, label: "Find Teams", color: "text-[#5865F2]", bgColor: "bg-[#5865F2]/10" },
              { icon: MessageCircle, label: "Get Support", color: "text-cyan-400", bgColor: "bg-cyan-500/10" },
              { icon: Bell, label: "Live Updates", color: "text-amber-400", bgColor: "bg-amber-500/10" },
              { icon: Hash, label: "Tech Channels", color: "text-pink-400", bgColor: "bg-pink-500/10" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col items-center gap-2 md:gap-3 transition-all duration-300 hover:bg-white/[0.06]"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center ${item.bgColor}`}>
                  <item.icon className={`h-5 w-5 md:h-6 md:w-6 ${item.color}`} />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link 
            href="https://discord.gg/PA3XaxjxVH" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-base md:text-lg px-6 md:px-10 py-5 md:py-7 rounded-xl md:rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full md:w-auto"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
              Join Discord Server
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

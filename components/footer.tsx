import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Liquid glass background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgb(12,12,24)] to-background" />
      
      {/* Subtle glow orbs */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-pink-500/5 blur-[80px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/images/hero-orb.png"
                alt="Globehack Logo"
                width={40}
                height={40}
                style={{ width: "auto", height: "auto", maxWidth: 40, maxHeight: 40 }}
                className="object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-foreground">GLOBE</span>
                <span className="text-gradient">HACK</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Arizona&apos;s first go-to-market hackathon. Building the future, one project at a time.
            </p>
            {/*
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "mailto:contact@globehack.com" },
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 rounded-xl glass-card glass-card-hover flex items-center justify-center text-muted-foreground hover:text-cyan-400 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Event</h3>
            <ul className="space-y-3">
              {[
                { label: "Agenda", href: "/agenda" },
                { label: "Logistics", href: "/logistics" },
                { label: "Tracks", href: "/tracks" },
                { label: "FAQ", href: "/faq" },
                { label: "Sponsors", href: "/sponsors" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "Discord Community", href: "https://discord.gg/PA3XaxjxVH", external: true },
                { label: "Devpost", href: "https://globehack.devpost.com", external: true },
                { label: "Register", href: "/sign-up" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers with actual logos */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Organized By</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="https://asu.acm.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  <Image
                    src="/images/acm-asu-logo.png"
                    alt="ACM at ASU"
                    width={40}
                    height={40}
                    style={{ width: "auto", height: "auto", maxWidth: 40, maxHeight: 40 }}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span>ACM at ASU</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  href="https://gcn-asu.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  <Image
                    src="/images/gcn-logo.png"
                    alt="Global Career Network"
                    width={40}
                    height={40}
                    style={{ width: "auto", height: "auto", maxWidth: 40, maxHeight: 40 }}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span>Global Career Network</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 <span className="font-zen-dots text-cyan-400">Globehack</span>. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse" />
            April 18-19, 2026 | Arizona State University
          </p>
        </div>
      </div>
    </footer>
  )
}

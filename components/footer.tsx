import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--cyan)] to-[var(--blue)] flex items-center justify-center">
                <span className="text-lg font-black text-white">G</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-foreground">GLOBE</span>
                <span className="text-[var(--gold)]">HACK</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Arizona&apos;s first go-to-market hackathon. Building the future, one project at a time.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "mailto:contact@globehacks.com" },
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-[var(--cyan)] hover:border-[var(--cyan)]/30 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Event</h3>
            <ul className="space-y-3">
              {[
                { label: "Agenda", href: "/agenda" },
                { label: "Logistics & Prizes", href: "/logistics" },
                { label: "Tracks", href: "/tracks" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                { label: "Sponsors", href: "/sponsors" },
                { label: "Discord Community", href: "https://discord.gg/PA3XaxjxVH", external: true },
                { label: "Register", href: "/sign-up" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Organized By</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="https://asu.acm.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--cyan)]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--cyan)]">ACM</span>
                  </div>
                  ACM at ASU
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </Link>
              </li>
              <li>
                <Link 
                  href="https://globalcareernetwork.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--gold)]">GCN</span>
                  </div>
                  Global Career Network
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Globehacks. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--cyan)] animate-pulse" />
            April 18-19, 2026 | Arizona State University
          </p>
        </div>
      </div>
    </footer>
  )
}

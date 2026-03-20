"use client"

import { 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook,
  Twitter,
  MessageCircle,
  Target
} from "lucide-react"


const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://asu.acm.org/in",target:"_blank" ,rel:"noopener noreferrer", color: "hover:bg-[#0077B5]" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@ACM-ASU",target:"_blank" ,rel:"noopener noreferrer", color: "hover:bg-[#FF0000]" },
  { name: "Instagram", icon: Instagram, href: "https://asu.acm.org/ig",target:"_blank" ,rel:"noopener noreferrer", color: "" },
  { name: "Facebook", icon: Facebook, href: "https://asu.acm.org/fb",target:"_blank" ,rel:"noopener noreferrer", color: "hover:bg-[#1877F2]" },
  { name: "Threads", icon: "/images/threads icon white.webp", href: "https://asu.acm.org/re",target:"_blank" ,rel:"noopener noreferrer", color: "hover:bg-foreground" },
  { name: "WhatsApp", icon: "/images/whatsapp white.png", href: "https://asu.acm.org/wa",target:"_blank" ,rel:"noopener noreferrer", color: "hover:bg-[#25D366]" },
]

export function ConnectSection() {
  return (
    <section id="connect" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
          Stay Connected
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
          Join Our Community
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-12">
          Stay on top of the latest developments with ACM at ASU. 
          Take part in a vibrant, creative, and ever-expanding community.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((social) => {
            if (social.name === "Instagram") {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  className="group relative flex items-center gap-3 bg-clip-padding bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-3 transition-all duration-300 hover:text-primary-foreground hover:border-transparent hover:scale-110 hover:opacity-100"
                  aria-label={social.name}
                >
                  <span
                    className="absolute inset-0 rounded-full border-primary-foreground bg-gradient-to-r from-[#7638FA] via-[#D300C5] via-[#FF0069] via-[#FF7A00] to-[#FFD600] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  ></span>
                  <span className="absolute inset-0 flex justify-center items-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gap-3">
                    <Instagram size={20} />
                    <span className="font-medium">Instagram</span>
                  </span>
                  <Instagram size={20} />
                  <span className="font-medium">{social.name}</span>
                </a>
              )
            } else {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  className={`group flex items-center gap-3 bg-clip-padding bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-3 transition-all duration-300 ${social.color} hover:text-primary-foreground hover:border-transparent hover:scale-110 hover:opacity-100`}
                  aria-label={social.name}
                >
                  {typeof social.icon === "string" ? (
                    <img src={social.icon} alt={social.name} className="w-5 h-5" />
                  ) : (
                    <social.icon size={20} />
                  )}
                  <span className="font-medium">{social.name}</span>
                </a>
              )
            }
          })}
        </div>

        {/* Discord CTA */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 max-w-xl mx-auto">
          <img src={"/images/discord icon white.webp"} alt="Discord Logo" width={50} height={44} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Join our Discord Server</h3>
          <p className="text-primary-foreground/80 mb-6">
            Connect with fellow members, get help with projects, and stay updated on events.
          </p>
          <a
            href="https://asu.acm.org/dc" target="_blank" rel="nofollow noreferrer noopener"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-8 py-3 rounded-full hover:bg-primary-foreground/90 transition-colors text-lg"
          >
            <img src={"/images/discord hash.png"} alt="Hashtag" width={20} height={44}  className=" flex items-center  justify-center mx-auto mb-2 " />
            Join Discord
          </a>
        </div>
      </div>
    </section>
  )
}

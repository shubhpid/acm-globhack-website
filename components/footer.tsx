import { Target } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  organization: [
    { label: "About ACM", href: "https://asu.acm.org/about/", target: "_blank", rel: "noopener noreferrer" },
    { label: "Membership", href: "https://asu.acm.org/sd", target: "_blank", rel: "noopener noreferrer" },
    { label: "Become an ACM Officer",href:"https://asu.acm.org/join", target:"_blank", rel:"nofollow noreferrer noopener" },
    
  ],
  resources: [
    { label: "Events", href: "https://asu.acm.org/events/" },
    { label: "News", href: "https://asu.acm.org/category/news/" },
    { label: "ACM Official Website", href: "https://www.acm.org", target: "_blank", rel: "nofollow noopener noreferrer" },
    
  ],
  connect: [
    { label: "Discord", href: "https://asu.acm.org/dc", target: "_blank", rel: "nofollow noopener noreferrer" },
    { label: "LinkedIn", href: "https://asu.acm.org/li", target: "_blank", rel: "noopener noreferrer" },
    { label: "Instagram", href: "https://asu.acm.org/in", target: "_blank", rel: "noopener noreferrer" },
    { label: "YouTube", href: "https://www.youtube.com/@ACM-ASU", target: "_blank", rel: "noopener noreferrer" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/actual acm logo.png"
                alt="ACM at ASU Logo"
                width={50}
                height={50}/>
              <div>
                <span className="font-bold text-background">ACM</span>
                <span className="text-background/70 ml-1">at ASU</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              The Association for Computing Machinery Student Chapter at Arizona State University
            </p>
          </div>

          {/* Organization Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Organization</h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                      rel="nofollow noreferrer noopener"
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                      rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.target}
                      rel={link.rel}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} ACM at ASU. Built by Aman Suhail and Shubhadip Saha.

          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            
          </div>
        </div>
      </div>
    </footer>
  )
}

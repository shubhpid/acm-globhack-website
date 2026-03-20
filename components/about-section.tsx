"use client"

import { Button } from "@/components/ui/button"
import { Users, Lightbulb, Handshake, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "Community",
    description: "Join a vibrant network of like-minded students passionate about computing and technology.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Access workshops, talks, and resources from industry professionals and academics.",
  },
  {
    icon: Handshake,
    title: "Networking",
    description: "Connect with peers, mentors, and industry leaders to advance your career.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Get Involved
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Your Home Base for ASU&apos;s Computing Community
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              There is no better time than now to join ACM at ASU. We see a world 
              where computing helps solve tomorrow&apos;s problems – where members use 
              their knowledge and skills to advance the profession and make a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                asChild
              >
                <Link href="https://asu.acm.org/sd" target="_blank" rel="noopener noreferrer">
                  Membership
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
                asChild
              >
                <Link href="https://asu.acm.org/join" target="_blank" rel="nofollow noreferrer noopener">Join our Team!</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

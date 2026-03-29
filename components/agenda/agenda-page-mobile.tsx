"use client"

import { useState } from "react"
import {
  Coffee,
  Mic,
  Code,
  Utensils,
  BookOpen,
  ClipboardCheck,
  Moon,
  Sun,
  Upload,
  Presentation,
  Users,
  Trophy,
  Clock,
} from "lucide-react"

const saturdayEvents = [
  { time: "9:00 AM", title: "Registration & Check-in", description: "Pick up badges and swag while enjoying coffee. Team-building available.", icon: Coffee, color: "cyan" },
  { time: "10:00 AM", title: "Opening Ceremony", description: "Theme announcement, sponsor introductions, and judging criteria breakdown.", icon: Mic, color: "gold" },
  { time: "10:30 AM", title: "Hacking Begins", description: "Teams start building. Mentors available throughout.", icon: Code, color: "blue" },
  { time: "12:00 PM", title: "Lunch", description: "Buffet-style lunch for all participants.", icon: Utensils, color: "magenta" },
  { time: "10:30 AM – 6:30 PM", title: "Technical Workshops", description: "Optional sessions covering APIs, UI/UX, and pitching tips.", icon: BookOpen, color: "cyan" },
  { time: "6:00 PM", title: "Dinner", description: "Refuel for the overnight sprint!", icon: Utensils, color: "magenta" },
  { time: "11:00 PM", title: "Progress Checkpoint", description: "Mandatory check-in: submit team name, project summary, and build status.", icon: ClipboardCheck, color: "gold" },
  { time: "11:30 PM", title: "Overnight Hacking", description: "Quiet zone and rest area provided. Snacks and drinks available.", icon: Moon, color: "blue" },
]

const sundayEvents = [
  { time: "9:00 AM", title: "Breakfast", description: "Coffee, pastries, and fruit to start the final push.", icon: Sun, color: "gold" },
  { time: "11:00 AM", title: "Lunch & Judge Briefing", description: "Buffet-style lunch. Judges receive their briefing.", icon: Utensils, color: "magenta" },
  { time: "11:00 AM", title: "Submission Deadline", description: "Strict cutoff for code repo links and pitch decks via Devpost.", icon: Upload, color: "magenta" },
  { time: "12:00 PM", title: "Final Presentations", description: "Top 12-15 teams deliver 5-min pitch + 3-min Q&A.", icon: Presentation, color: "cyan" },
  { time: "2:30 PM", title: "Deliberation", description: "Judges review results while participants network with sponsors.", icon: Users, color: "blue" },
  { time: "3:00 PM", title: "Closing Ceremony & Awards", description: "Winner announcements, sponsor thank-yous, and group photo.", icon: Trophy, color: "gold" },
]

const colorMap: Record<string, string> = {
  cyan: "var(--cyan)",
  gold: "var(--gold)",
  blue: "var(--blue)",
  magenta: "var(--magenta)",
}

export function AgendaPageMobile() {
  const [activeDay, setActiveDay] = useState<"saturday" | "sunday">("saturday")
  const events = activeDay === "saturday" ? saturdayEvents : sundayEvents

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="pt-24 pb-8 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(8,8,16)]" />
        <div className="absolute top-0 left-0 w-[180px] h-[180px] rounded-full bg-blue-500/5 blur-[60px] pointer-events-none" />

        <div className="relative z-10 text-center">
          <p className="text-xs font-medium text-cyan-400 uppercase tracking-widest mb-2">
            April 18-19, 2026
          </p>
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-foreground">Event </span>
            <span className="text-gradient">Schedule</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            24 hours of hacking, workshops, mentorship, and more.
          </p>
        </div>
      </section>

      {/* Day selector */}
      <section className="px-4 pb-4">
        <div className="glass-card inline-flex rounded-xl p-1.5 w-full">
          <button
            onClick={() => setActiveDay("saturday")}
            className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${
              activeDay === "saturday"
                ? "bg-[var(--blue)] text-white shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                : "text-muted-foreground"
            }`}
          >
            Sat, Apr 18
          </button>
          <button
            onClick={() => setActiveDay("sunday")}
            className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-300 ${
              activeDay === "sunday"
                ? "bg-[var(--blue)] text-white shadow-[0_0_16px_rgba(59,130,246,0.4)]"
                : "text-muted-foreground"
            }`}
          >
            Sun, Apr 19
          </button>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 pb-12">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--cyan)] via-[var(--blue)] to-[var(--magenta)]" />

          <div className="flex flex-col gap-4 pl-12">
            {events.map((event, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div
                  className="absolute -left-[34px] w-2.5 h-2.5 rounded-full mt-4 z-10"
                  style={{
                    backgroundColor: colorMap[event.color],
                    boxShadow: `0 0 10px ${colorMap[event.color]}`,
                  }}
                />

                <div className="glass-card rounded-xl p-3.5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Clock className="h-3 w-3 text-muted-foreground shrink-0" />
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: colorMap[event.color] }}
                    >
                      {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `linear-gradient(135deg, color-mix(in srgb, ${colorMap[event.color]} 20%, transparent), transparent)`,
                        border: `1px solid color-mix(in srgb, ${colorMap[event.color]} 30%, transparent)`,
                      }}
                    >
                      <event.icon className="h-3.5 w-3.5" style={{ color: colorMap[event.color] }} />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground">{event.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

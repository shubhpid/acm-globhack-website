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
  User,
  Lightbulb,
  Sandwich,
  Pizza,
  Donut,
  AlarmClock,
  ForkKnifeCrossed,
  Volume2
} from "lucide-react"

const saturdayEvents = [
  {
    time: "9:00 AM",
    title: "Registration & Check-in",
    description: "Participants pick up badges and swag; optional team-building is available for those looking for partners.",
    icon: User,
    color: "#23d1ee",
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "The official launch featuring the theme announcement, sponsor introductions, and a breakdown of judging criteria.",
    icon: Mic,
    color: "#29c2f1",
  },
  {
    time: "10:30 AM",
    title: "Hacking Begins",
    description: "Teams start building immediately; mentors are available throughout the workspace for the duration of the event.",
    icon: Code,
    color: "#2db3f2",
  },
  {
    time: "11:30 AM",
    title: "Sponsor Workshop", // Vector AI Workshop #1
    description: "Optional sessions covering APIs, UI/UX, and pitching tips. Sponsors will be announced soon!",
    icon: Lightbulb,
    color: "#32a5f4",
  },
  {
    time: "12:00 PM",
    title: "Lunch",
    description: "Delicious catering for all 250 participants. Take a break and network!",
    icon: Sandwich,
    color: "#3986f5",
  },
  {
    time: "12:30 PM",
    title: "Sponsor Workshop", // Lofty Workshop
    description: "Optional sessions covering APIs, UI/UX, and pitching tips. Sponsors will be announced soon!",
    icon: Lightbulb,
    color: "#398af5",
  },
  {
    time: "1:30 PM",
    title: "Sponsor Workshop", // Vector AI Workshop #2
    description: "Optional sessions covering APIs, UI/UX, and pitching tips. Sponsors will be announced soon!",
    icon: Lightbulb,
    color: "#5780ee",
  },
  {
    time: "2:30 PM",
    title: "Sponsor Workshop", // Trucker Workshop
    description: "Optional sessions covering APIs, UI/UX, and pitching tips. Sponsors will be announced soon!",
    icon: Lightbulb,
    color: "#7a7cdf",
  },
  {
    time: "3:30 PM",
    title: "Coffee Break + Sponsor Workshop",
    description: "Coffee break followed by a technical workshop. Sponsors will be announced soon!",
    icon: Coffee,
    color: "#9777d2",
  },
  {
    time: "6:00 PM",
    title: "Dinner",
    description: "Evening dinner break with more networking.",
    icon: Pizza,
    color: "#ae70c4",
  },
  {
    time: "09:30 PM",
    title: "Progress Checkpoint",
    description: "Mentor check-ins and mini-pitches to get feedback.",
    icon: ClipboardCheck,
    color: "#c566b5",
  },
  
]

const sundayEvents = [
  {
    time: "9:00 AM",
    title: "Breakfast",
    description: "Quick service coffee, and donuts to start the final push.",
    icon: Donut,
    color: "#24ceef",
  },
  {
    time: "11:00 AM",
    title: "Project Submission Deadline",
    description: "Strict cutoff for submitting code repository links and pitch decks via Devpost.",
    icon: AlarmClock,
    color: "#2cb8f2",
  },
  {
    time: "11:15 AM",
    title: "Lunch",
    description: "Enjoy a final meal while judges review submissions.",
    icon: ForkKnifeCrossed,
    color: "#339ef4",
  },
  {
    time: "12:00 PM",
    title: "Final Presentations & Judging Begins",
    description: "The teams deliver a 5-minute pitch followed by a Q&A session with the judges.",
    icon: Presentation,
    color: "#3988f5",
  },
  {
    time: "2:30 PM",
    title: "Judge Deliberation",
    description: "Judges review results while participants network and connect with sponsors.",
    icon: Users,
    color: "#777de2",
  },
  {
    time: "2:30 PM",
    title: "Company Keynotes",
    description: "Hear from our sponsors and industry leaders about the future of tech.",
    icon: Volume2,
    color: "#b36ec1",
  },
  {
    time: "3:30 PM",
    title: "Closing Ceremony & Awards",
    description: "Winner announcements, sponsor thank-yous, and a final group photo to conclude the event.",
    icon: Trophy,
    color: "#d05ead",
  },
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
            {events.map((event, i) => {
  const resolvedColor = event.color.startsWith('#')
    ? event.color
    : `var(--${event.color})`;

  return (
    <div key={i} className="relative">
      {/* Dot */}
      <div
        className="absolute -left-[36px] w-2.5 h-2.5 rounded-full mt-4 z-10"
        style={{
          backgroundColor: resolvedColor,
          boxShadow: `0 0 10px ${resolvedColor}`,
        }}
      />

      <div className="glass-card rounded-xl p-3.5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Clock className="h-3 w-3 text-muted-foreground shrink-0" />
          <span
            className="text-xs font-mono font-semibold"
            style={{ color: resolvedColor }}
          >
            {event.time}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-1.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${resolvedColor} 20%, transparent), transparent)`,
              border: `1px solid color-mix(in srgb, ${resolvedColor} 30%, transparent)`,
            }}
          >
            <event.icon
              className="h-3.5 w-3.5"
              style={{ color: resolvedColor }}
            />
          </div>

          <h4 className="text-sm font-semibold text-foreground">
            {event.title}
          </h4>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
})}
          </div>
        </div>
      </section>
    </main>
  )
}

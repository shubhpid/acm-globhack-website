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
import { cn } from "@/lib/utils"

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
    title: "Vector AI Workshop #1",
    description: "Optional sessions covering APIs, UI/UX, and pitching tips.",
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
    title: "Lofty Workshop",
    description: "Optional sessions covering APIs, UI/UX, and pitching tips.",
    icon: Lightbulb,
    color: "#398af5",
  },
  {
    time: "1:30 PM",
    title: "Vector AI Workshop #2",
    description: "Optional sessions covering APIs, UI/UX, and pitching tips.",
    icon: Lightbulb,
    color: "#5780ee",
  },
  {
    time: "2:30 PM",
    title: "Trucker Workshop",
    description: "Optional sessions covering APIs, UI/UX, and pitching tips.",
    icon: Lightbulb,
    color: "#7a7cdf",
  },
  {
    time: "3:30 PM",
    title: "Coffee Break + Hydrawav3 Workshop",
    description: "Coffee break followed by a technical workshop.",
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
    title: "Project Submission Deadline & Judge Briefing",
    description: "Strict cutoff for submitting code repository links and pitch decks via Devpost. Judges receive their briefing during this time.",
    icon: AlarmClock,
    color: "#2cb8f2",
  },
  {
    time: "11:30 AM",
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
    time: "3:00 PM",
    title: "Closing Ceremony & Awards",
    description: "Winner announcements, sponsor thank-yous, and a final group photo to conclude the event.",
    icon: Trophy,
    color: "#d05ead",
  },
]

export function AgendaTimeline() {
  const [activeDay, setActiveDay] = useState<"saturday" | "sunday">("saturday")
  
  const events = activeDay === "saturday" ? saturdayEvents : sundayEvents
  const dayTitle = activeDay === "saturday" 
    ? "Saturday, April 18 — Kickoff & Development at LSE 104" 
    : "Sunday, April 19 — The Finish Line at ECG 101"

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a12] to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--cyan)] uppercase tracking-widest mb-4">
            Detailed Timeline
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hour by Hour
          </h2>
        </div>

        {/* Day selector */}
        <div className="flex justify-center mb-12">
          <div className="glass-card inline-flex rounded-xl p-1.5">
            <button
              onClick={() => setActiveDay("saturday")}
              className={cn(
                "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                activeDay === "saturday" 
                  ? "bg-[var(--blue)] text-white shadow-[0_0_20px_rgba(2,125,194,0.4)]" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Saturday, April 18
            </button>
            <button
              onClick={() => setActiveDay("sunday")}
              className={cn(
                "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                activeDay === "sunday" 
                  ? "bg-[var(--blue)] text-white shadow-[0_0_20px_rgba(2,125,194,0.4)]" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Sunday, April 19
            </button>
          </div>
        </div>

        {/* Day title */}
        <h3 className="text-xl sm:text-2xl font-bold text-center mb-12 text-foreground ">
          {dayTitle}
        </h3>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--cyan)] via-[var(--blue)] to-[var(--magenta)]" />

          {/* Events */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <div 
                key={index}
                className={cn(
                  "relative flex items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 mt-8"
                  style={{ 
                    backgroundColor: event.color.startsWith('#') ? event.color : `var(--${event.color})`,
                    boxShadow: `0 0 15px ${event.color.startsWith('#') ? event.color : `var(--${event.color})`}`,
                  }}
                />

                {/* Content card */}
                <div className={cn(
                  "flex-1 ml-14 md:ml-0",
                  index % 2 === 0 ? "md:pr-12 md:mr-[50%]" : "md:pl-12 md:ml-[50%]"
                )}>
                  <div 
                    className="group glass-card glass-card-hover rounded-xl p-6 transition-all duration-300"
                  >
                    {/* Time badge */}
                    <div className={cn(
                      "flex items-center gap-2 mb-3",
                      index % 2 === 1 && "md:flex-row-reverse"
                    )}>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span 
                        className="text-sm font-mono font-semibold"
                        style={{ color: event.color.startsWith('#') ? event.color : `var(--${event.color})` }}
                      >
                        {event.time}
                      </span>
                    </div>

                    {/* Icon and title */}
                    <div className={cn(
                      "flex items-center gap-3 mb-3",
                      index % 2 === 1 && "md:flex-row-reverse"
                    )}>
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ 
                          background: event.color.startsWith('#') 
                            ? `${event.color}20` // 20 for ~12% opacity
                            : `linear-gradient(135deg, color-mix(in srgb, var(--${event.color}) 20%, transparent), transparent)`,
                            
                        }}
                      >
                        <event.icon 
                          className="h-6 w-6" 
                          style={{ color: event.color.startsWith('#') ? event.color : `var(--${event.color})` }}
                        />
                      </div>
                      <h4 className={cn(
                        "text-lg font-semibold text-foreground",
                        index % 2 === 1 && "md:text-right"
                      )}>
                        {event.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className={cn(
                      "text-sm text-muted-foreground leading-relaxed",
                      index % 2 === 1 && "md:text-right"
                    )}>
                      {event.description}
                    </p>
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

"use client"

import { Clock, MapPin, Users, Coffee, Pizza, Code, Award, Mic, Lightbulb } from "lucide-react"

const scheduleDay1 = [
  {
    time: "9:00 AM",
    title: "Check-in & Registration",
    description: "Check in, grab your swag, and meet fellow hackers.",
    icon: Users,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address, sponsor introductions, and track reveals.",
    icon: Mic,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    time: "11:00 AM",
    title: "Hacking Begins",
    description: "Team formation finalizes and the 24-hour countdown starts!",
    icon: Code,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    time: "12:30 PM",
    title: "Lunch",
    description: "Fuel up with delicious food while networking.",
    icon: Pizza,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    time: "2:00 PM",
    title: "Workshop Sessions",
    description: "Technical workshops and mentor office hours.",
    icon: Lightbulb,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    time: "7:00 PM",
    title: "Dinner",
    description: "Evening dinner break with more networking.",
    icon: Coffee,
    gradient: "from-amber-400 to-yellow-500",
  },
]

const scheduleDay2 = [
  {
    time: "9:00 AM",
    title: "Breakfast",
    description: "Morning fuel to power through the final stretch.",
    icon: Coffee,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    time: "10:30 AM",
    title: "Submissions Due",
    description: "Final deadline to submit your projects on Devpost.",
    icon: Clock,
    gradient: "from-red-500 to-rose-500",
  },
  {
    time: "11:00 AM",
    title: "Judging Begins",
    description: "Present your project to judges in 3-minute elevator pitches.",
    icon: Users,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    time: "1:00 PM",
    title: "Closing Ceremony",
    description: "Winners announced and prizes distributed!",
    icon: Award,
    gradient: "from-amber-400 to-yellow-500",
  },
]

function TimelineItem({ 
  event, 
  isLast 
}: { 
  event: typeof scheduleDay1[0]
  isLast: boolean 
}) {
  return (
    <div className="relative flex gap-6 group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[27px] top-14 w-px h-[calc(100%-1rem)] bg-gradient-to-b from-white/20 to-transparent" />
      )}
      
      {/* Icon */}
      <div 
        className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${event.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <event.icon className="h-6 w-6 text-white" />
      </div>
      
      {/* Content */}
      <div className="flex-1 glass-card glass-card-hover rounded-2xl p-6 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
          <span className={`text-sm font-semibold bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
            {event.time}
          </span>
          <h3 className="text-lg font-semibold text-foreground">
            {event.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm">
          {event.description}
        </p>
      </div>
    </div>
  )
}

export function ScheduleSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(12,12,28)] via-background to-[rgb(12,12,28)]" />
      
      {/* Orbs */}
      <div className="orb orb-cyan w-[400px] h-[400px] top-40 -left-32 opacity-20" />
      <div className="orb orb-magenta w-[350px] h-[350px] bottom-40 -right-32 opacity-20" />
      
      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-4">
            Event Schedule
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            24 Hours of{' '}
            <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From opening ceremony to awards, here&apos;s what to expect at Globehacks 2026.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Day 1 */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="glass-card px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-cyan-400">April 18</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Day 1</h3>
            </div>
            <div>
              {scheduleDay1.map((event, index) => (
                <TimelineItem 
                  key={index} 
                  event={event} 
                  isLast={index === scheduleDay1.length - 1} 
                />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="glass-card px-4 py-2 rounded-xl">
                <span className="text-sm font-semibold text-pink-400">April 19</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Day 2</h3>
            </div>
            <div>
              {scheduleDay2.map((event, index) => (
                <TimelineItem 
                  key={index} 
                  event={event} 
                  isLast={index === scheduleDay2.length - 1} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

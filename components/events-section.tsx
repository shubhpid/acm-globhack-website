"use client"

import { Card } from "@/components/ui/card"

export function EventsSection() {
  return (
    <section id="events" className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Mark Your Calendar
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
            Upcoming Events
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Join us for workshops, tech talks, hackathons, and networking events 
            throughout the semester.
          </p>
        </div>

        {/* Google Calendar Embed */}
        <Card className="overflow-hidden border-2 border-primary/20 bg-card">
          <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=935c6953a19841604966b19f3cad8ca846f670ce37acd37d2cbed6bfd3b069fc%40group.calendar.google.com&ctz=Asia%2FQatar"
              className="w-full h-full border-0"
              title="ACM at ASU Events Calendar"
            />
          </div>
        </Card>

        {/* Info below calendar */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Click on any event for more details. All events are synced with our official Google Calendar.
          </p>
        </div>
      </div>
    </section>
  )
}

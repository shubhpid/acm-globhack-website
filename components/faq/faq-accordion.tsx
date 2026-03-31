"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    category: "General",
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(34, 211, 238, 0.5)",
    questions: [
      {
        q: "What is Globehack 2026?",
        a: "Globehack 2026 is Arizona's first go-to-market hackathon, organized by ACM at ASU and Global Career Network. It's a 24-hour event where participants build innovative solutions that go beyond prototypes—projects designed for real-world implementation and market viability.",
      },
      {
        q: "When and where is Globehack 2026?",
        a: "Globehack 2026 takes place on April 18-19, 2026 at Arizona State University's Tempe Campus. The event runs for 24 consecutive hours, starting with registration at 9:00 AM on Saturday.",
      },
      {
        q: "Who can participate?",
        a: "Anyone 18 years or older can participate, including students and professionals. We welcome developers, designers, entrepreneurs, and anyone passionate about building technology. All skill levels are encouraged to join—whether you're a first-time hacker or a seasoned developer.",
      },
      {
        q: "How much does it cost to participate?",
        a: "Globehack 2026 is completely free to attend! We provide all meals, snacks, drinks, and swag at no cost. You just need to bring your laptop, a valid ID, and your creativity.",
      },
    ],
  },
  {
    category: "Teams & Projects",
    gradient: "from-blue-500 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.5)",
    questions: [
      {
        q: "Do I need to have a team before registering?",
        a: "No! You can register as an individual and find teammates at the event. We'll have team formation activities during registration on Saturday morning. Teams can have 1-5 members.",
      },
      {
        q: "What can I build?",
        a: "You can build anything that fits within one of our tracks! We encourage projects that demonstrate market potential and real-world applicability. This can include web apps, mobile apps, hardware projects, AI/ML solutions, and more. All projects must be started from scratch during the hackathon.",
      },
      {
        q: "Can I start working on my project before the hackathon?",
        a: "No, all coding must begin after the opening ceremony. However, you can come prepared with ideas, research, and design mockups. Using open-source libraries and existing APIs is allowed and encouraged.",
      },
      {
        q: "What technologies can I use?",
        a: "You can use any programming language, framework, or technology stack you prefer. We'll have mentors available to help with various technologies including web development, mobile development, AI/ML, cloud services, and more.",
      },
    ],
  },
  {
    category: "Event Logistics",
    gradient: "from-amber-500 to-yellow-500",
    glowColor: "rgba(250, 204, 21, 0.5)",
    questions: [
      {
        q: "Do I need to register on both SDC and the website? What's the difference between them?",
        a: "Yes—both serve different purposes. Registering on SDC is used for attendance tracking during the event. Registering on the website, on the other hand, officially signs you up as a participant in a specific track. You'll need to complete both to fully participate and be properly accounted for.",
      },
      {
        q: "What should I bring?",
        a: "Essential items include your laptop and charger, a valid photo ID, and comfortable clothes. Optional items include toiletries, a sleeping bag or blanket for the overnight portion, headphones, and any hardware you plan to use for your project.",
      },
      {
        q: "Will food be provided?",
        a: "Yes! We provide all meals including breakfast, lunch, and dinner, plus snacks and drinks throughout the event. We accommodate common dietary restrictions—please indicate any in your registration form.",
      },
      
      
    ],
  },
  {
    category: "Judging",
    gradient: "from-pink-500 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.5)",
    questions: [
      {
        q: "How are projects judged?",
        a: "Projects are evaluated on innovation, technical complexity, design and user experience, market viability (our go-to-market focus!), and presentation quality. Judges include industry professionals, investors, and experienced entrepreneurs.",
      },
      {
        q: "Do I need to present my project?",
        a: "All teams submit their projects before the deadline. The teams give a 5-minute presentation of their submission on Devpost followed by a Q&A sessions with judges.",
      },
    ],
  },
  {
    category: "Support & Resources",
    gradient: "from-teal-500 to-cyan-500",
    glowColor: "rgba(20, 184, 166, 0.5)",
    questions: [
      {
        q: "Will there be mentors available?",
        a: "Yes! We have mentors available throughout the entire event to help with technical challenges, design feedback, business strategy, and pitching. Mentors come from various backgrounds in software engineering, product design, entrepreneurship, and more.",
      },
      {
        q: "Are there workshops during the event?",
        a: "Yes! We have a series of 5 technical workshops running throughout Saturday covering APIs, UI/UX design, and pitching tips. These are optional but highly recommended, especially for first-time hackers.",
      },
      {
        q: "How can I get help during the hackathon?",
        a: "You can approach any mentor on-site, ask questions in our Discord server, or visit the help desk near the main hacking area. We're here to support you throughout the event!",
      },
    ],
  },
]

export function FAQAccordion() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[rgb(12,12,24)] to-background" />
      
      {/* Subtle floating orbs */}
      <div className="orb orb-blue w-[300px] h-[300px] top-1/4 -left-32 opacity-20" />
      <div className="orb orb-red w-[250px] h-[250px] top-1/2 -right-24 opacity-20" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            <h2 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <div 
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`}
                style={{ 
                  boxShadow: `0 0 10px ${category.glowColor}`,
                }}
              />
              {category.category}
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {category.questions.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`${categoryIndex}-${index}`}
                  className="glass-card glass-card-hover rounded-2xl px-6 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 group">
                    <span className="text-foreground font-medium pr-4 group-hover:text-cyan-400 transition-colors">
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  )
}

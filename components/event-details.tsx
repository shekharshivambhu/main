import { MapPin, Clock, CalendarDays, Utensils, ExternalLink } from "lucide-react"

const events = [
  {
    icon: CalendarDays,
    title: "The Ceremony",
    time: "4:00 PM",
    location: "Pathreri, Gurgaon, Haryana",
    address: "Pathreri, Gurgaon, Haryana",
    description: "Join us as we exchange vows surrounded by our loved ones in a traditional ceremony.",
  },
  {
    icon: Utensils,
    title: "Reception Dinner",
    time: "6:00 PM",
    location: "Pathreri, Gurgaon, Haryana",
    address: "Pathreri, Gurgaon, Haryana",
    description: "Celebrate with us over dinner, drinks, and dancing under the stars.",
  },
]

const googleMapsUrl = "https://maps.app.goo.gl/36JJLnffm4dVHYwW8"

export function EventDetails() {
  return (
    <section id="details" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Join Us On</p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">February 15, 2026</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We would be honored to have you celebrate this special day with us at Pathreri, Gurgaon.
          </p>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-card p-8 md:p-10 border border-border">
              <event.icon size={32} className="text-primary mb-6" />
              <h3 className="text-2xl font-light text-foreground mb-4">{event.title}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p>{event.location}</p>
                    <p className="text-sm">{event.address}</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden border border-border rounded-sm">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5456060168825!2d76.95927867549696!3d28.491449975735696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17cb7e0a6d6b%3A0x13a8bd0ac8f29dee!2sPathreri%2C%20Haryana!5e0!3m2!1sen!2sin!4v1704799200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue - Pathreri, Gurgaon"
              className="w-full h-full"
            />
          </div>

          {/* Get Directions Button */}
          <div className="bg-card p-4 border-t border-border">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <MapPin size={18} />
              <span className="font-medium">Get Directions to Venue</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

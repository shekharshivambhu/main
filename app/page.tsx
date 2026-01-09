import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { OurStory } from "@/components/our-story"
import { Gallery } from "@/components/gallery"
import { EventDetails } from "@/components/event-details"
import { RsvpForm } from "@/components/rsvp-form"
import { Footer } from "@/components/footer"
import { FlowerRain } from "@/components/flower-rain"

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-background">
      <FlowerRain />
      <Navigation />
      <HeroSection />
      <OurStory />
      <Gallery />
      <EventDetails />
      <RsvpForm />
      <Footer />
    </main>
  )
}

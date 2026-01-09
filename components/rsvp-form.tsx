"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Send } from "lucide-react"

export function SendWishesForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Wishes submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
            <Heart size={36} className="text-primary fill-primary/30" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">आशीर्वाद</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 italic">Thank You for Your Blessings</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Your heartfelt wishes mean the world to Jyoti & Sahil. May your blessings guide them on their beautiful
            journey together.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Bless the Couple</p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-2">
            <span className="italic">Send Your</span> Wishes
          </h2>
          <p className="text-lg text-primary/80 italic mb-4">शुभकामनाएं</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-primary/40" />
            <Heart size={16} className="text-primary fill-primary/30" />
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Share your blessings and warm wishes for Jyoti & Sahil as they begin their new journey together
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-background/60 backdrop-blur-sm p-8 md:p-12 border border-primary/10 rounded-sm"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm tracking-wide uppercase text-muted-foreground">
                Your Name *
              </Label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="relation" className="text-sm tracking-wide uppercase text-muted-foreground">
                Relation
              </Label>
              <Input
                id="relation"
                name="relation"
                value={formData.relation}
                onChange={handleChange}
                className="bg-background border-border focus:border-primary"
                placeholder="e.g., Friend, Cousin, Colleague"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm tracking-wide uppercase text-muted-foreground">
              Your Blessings & Wishes *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-background border-border focus:border-primary min-h-[150px]"
              placeholder="Write your heartfelt wishes for Jyoti & Sahil..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-sm tracking-widest uppercase gap-2"
          >
            <Send size={16} />
            Send Blessings
          </Button>
        </form>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic text-sm">
            "Two souls with but a single thought, two hearts that beat as one"
          </p>
        </div>
      </div>
    </section>
  )
}

export { SendWishesForm as RsvpForm }

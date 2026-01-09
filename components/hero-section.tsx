"use client"

import { useState, useEffect } from "react"

const WEDDING_DATE = new Date("2026-02-15T16:00:00")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = WEDDING_DATE.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/elegant-romantic-wedding-flowers-soft-light.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/60" />
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary/70">
            <path d="M12 4C8 4 4 8 4 12C4 16 8 18 12 22C16 18 20 16 20 12C20 8 16 4 12 4Z" fill="currentColor" />
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/60" />
        </div>

        <p className="text-sm tracking-[0.4em] uppercase text-primary/80 mb-8 font-light">
          Together with their families
        </p>

        <h1 className="font-light tracking-wide text-foreground mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl italic">Jyoti</span>
          <span className="block text-2xl md:text-3xl font-light text-primary my-4 tracking-widest">&</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl italic">Sahil</span>
        </h1>

        <div className="flex items-center justify-center gap-3 my-10">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
          <div className="w-2 h-2 rounded-full bg-primary/50" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
        </div>

        <p className="text-lg md:text-xl font-light text-muted-foreground mb-4 tracking-wide">
          Request the pleasure of your company
        </p>
        <p className="text-xl md:text-2xl font-light text-foreground/90 mb-14 tracking-wider">February 15, 2026</p>

        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-md mx-auto mb-16">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary/10 to-transparent rounded-sm" />
                <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-sm py-3 md:py-4">
                  <div className="text-3xl md:text-4xl font-light text-foreground tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </div>
                </div>
              </div>
              <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-3">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#story"
          className="inline-flex flex-col items-center text-primary/60 hover:text-primary transition-colors duration-300 group"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase mb-3 group-hover:tracking-[0.4em] transition-all duration-300">
            Discover More
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent group-hover:h-10 transition-all duration-300" />
        </a>
      </div>
    </section>
  )
}

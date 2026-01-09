"use client"

import { useEffect, useState } from "react"

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  rotation: number
  type: "rose" | "cherry" | "leaf"
  opacity: number
}

export function FlowerRain() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    // Generate initial petals
    const initialPetals: Petal[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: 15 + Math.random() * 20,
      size: 10 + Math.random() * 18,
      rotation: Math.random() * 360,
      type: ["rose", "cherry", "leaf"][Math.floor(Math.random() * 3)] as "rose" | "cherry" | "leaf",
      opacity: 0.4 + Math.random() * 0.4,
    }))
    setPetals(initialPetals)
  }, [])

  const getPetalPath = (type: string) => {
    switch (type) {
      case "rose":
        return <path d="M12 2C12 2 8 6 8 12C8 16 10 20 12 22C14 20 16 16 16 12C16 6 12 2 12 2Z" fill="currentColor" />
      case "cherry":
        return <path d="M12 4C8 4 4 8 4 12C4 16 8 18 12 22C16 18 20 16 20 12C20 8 16 4 12 4Z" fill="currentColor" />
      case "leaf":
        return <path d="M12 2C6 6 4 12 6 18C8 14 10 10 12 8C14 10 16 14 18 18C20 12 18 6 12 2Z" fill="currentColor" />
      default:
        return null
    }
  }

  const getPetalColor = (type: string) => {
    switch (type) {
      case "rose":
        return "text-rose-200"
      case "cherry":
        return "text-pink-200"
      case "leaf":
        return "text-rose-100"
      default:
        return "text-rose-200"
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            className={`${getPetalColor(petal.type)} animate-sway`}
            style={{
              opacity: petal.opacity,
              transform: `rotate(${petal.rotation}deg)`,
              animationDelay: `${petal.delay * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {getPetalPath(petal.type)}
          </svg>
        </div>
      ))}
    </div>
  )
}

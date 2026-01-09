"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const photos = [
  { src: "/images/92ce450f-acde-47a2-aa72-c0e09b93a5d5.png", alt: "Jyoti & Sahil in traditional attire" },
  { src: "/images/chatgpt-20image-20jan-209-2c-202026-2c-2010-03-22-20am.png", alt: "Family blessing moment" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % photos.length : null))
  const prevImage = () =>
    setSelectedImage((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null))

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Captured Moments</p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">Our Gallery</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-background hover:text-background/70 transition-colors"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-6 text-background hover:text-background/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            <div className="relative w-full max-w-4xl aspect-square mx-16">
              <Image
                src={photos[selectedImage].src || "/placeholder.svg"}
                alt={photos[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-6 text-background hover:text-background/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

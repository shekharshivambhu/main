import { Heart } from "lucide-react"

export function OurStory() {
  return (
    <section id="story" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">With Love & Blessings</p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-4">
            <span className="italic">From Our Families</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary" />
            <Heart size={16} className="text-primary" />
            <div className="w-16 h-px bg-primary" />
          </div>
        </div>

        {/* Family Blessing Message */}
        <div className="relative">
          {/* Decorative Border */}
          <div className="absolute inset-0 border border-primary/20 rounded-sm transform rotate-1" />
          <div className="absolute inset-0 border border-primary/20 rounded-sm transform -rotate-1" />

          <div className="relative bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-sm">
            {/* Sanskrit/Hindi Blessing */}
            <p className="text-center text-primary text-lg md:text-xl italic mb-8 font-light">"शुभ विवाह"</p>

            {/* Opening */}
            <p className="text-center text-muted-foreground leading-relaxed mb-8">
              With hearts full of joy and gratitude to the Almighty,
            </p>

            <div className="text-center mb-10">
              <p className="text-foreground text-lg mb-2">
                <span className="font-light">Mr. & Mrs.</span> <span className="italic">Sharma Family</span>
              </p>
              <p className="text-muted-foreground text-sm tracking-wide mb-6">
                cordially invite you to celebrate the wedding of their beloved son
              </p>
              <p className="text-2xl md:text-3xl italic text-foreground mb-6">Sahil</p>

              <div className="flex items-center justify-center gap-4 my-8">
                <div className="w-12 h-px bg-primary/40" />
                <span className="text-primary text-sm tracking-[0.2em]">WITH</span>
                <div className="w-12 h-px bg-primary/40" />
              </div>

              <p className="text-foreground text-lg mb-2">
                <span className="font-light">Mr. & Mrs.</span> <span className="italic">Verma Family</span>
              </p>
              <p className="text-muted-foreground text-sm tracking-wide mb-6">
                joyfully invite you to the wedding of their cherished daughter
              </p>
              <p className="text-2xl md:text-3xl italic text-foreground">Jyoti</p>
            </div>

            {/* Blessing Message */}
            <div className="border-t border-b border-primary/20 py-8 my-8">
              <p className="text-center text-foreground leading-loose text-lg md:text-xl font-light italic">
                "Two souls, two families, uniting as one in love and tradition. May this sacred bond be blessed with
                eternal happiness, prosperity, and togetherness."
              </p>
            </div>

            {/* Invitation Text */}
            <div className="text-center space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                It is with immense pleasure and humble hearts that we invite you and your family to grace this
                auspicious occasion with your presence and blessings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your love, blessings, and good wishes will make this celebration truly complete and memorable.
              </p>
            </div>

            {/* Closing Blessing */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-px bg-primary/40" />
                <Heart size={14} className="text-primary" />
                <div className="w-8 h-px bg-primary/40" />
              </div>
              <p className="text-primary italic mt-4 text-sm tracking-wide">"सर्वे भवन्तु सुखिनः"</p>
              <p className="text-muted-foreground text-xs mt-2 tracking-wider">May all beings be happy</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm tracking-wide">With warm regards and heartfelt blessings,</p>
          <p className="text-foreground italic mt-2">The Sharma & Verma Families</p>
        </div>
      </div>
    </section>
  )
}

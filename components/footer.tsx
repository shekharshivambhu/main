import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4">Jyoti & Sahil</h3>
        <p className="text-muted-foreground mb-8">February 15, 2026 • Pathreri, Gurgaon</p>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <span>Made with</span>
          <Heart size={14} className="text-primary fill-primary" />
          <span>for our special day</span>
        </div>

        <p className="text-xs text-muted-foreground/60 mt-8">#JyotiAndSahil2026</p>
      </div>
    </footer>
  )
}

import HeroSection from "@/components/hero-section"
import SquadGrid from "@/components/squad-grid"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <SquadGrid />
    </main>
  )
}

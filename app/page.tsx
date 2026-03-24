import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ApproachSection } from "@/components/sections/approach"
import { AreasSection } from "@/components/sections/areas"
import { ProcessSection } from "@/components/sections/process"
import { BookingPreviewSection } from "@/components/sections/booking-preview"
import { QuoteSection } from "@/components/sections/quote"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <AreasSection />
        <ProcessSection />
        <BookingPreviewSection />
        <QuoteSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

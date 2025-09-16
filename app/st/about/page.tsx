import { AboutHero } from "@/components_st/about-hero"
import { AboutMission } from "@/components_st/about-mission"
import { AboutStats } from "@/components_st/about-stats"
import { AboutDifferentiators } from "@/components_st/about-differentiators"
import { AboutCTA } from "@/components_st/about-cta"
import { AboutFooter } from "@/components_st/about-footer"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
      
      {/* Hero Section */}
      <AboutHero />
      
      {/* Main Content */}
      <main className="relative z-10 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Mission Section */}
          <section className="mb-24">
            <AboutMission />
          </section>
          
          {/* Stats Section */}
          <section className="mb-24">
            <AboutStats />
          </section>
          
          {/* Differentiators Section */}
          <section className="mb-24">
            <AboutDifferentiators />
          </section>
          
          {/* CTA Section */}
          <section className="mb-24">
            <AboutCTA />
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <AboutFooter />
    </div>
  )
}

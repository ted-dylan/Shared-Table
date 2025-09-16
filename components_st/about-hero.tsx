"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutHero() {
  return (
    <>
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="flex items-center justify-center px-4 py-2 bg-white/80 ring-1 ring-gray-200 backdrop-blur rounded-full shadow-sm">
          <img src="/shared-table-logo-new.svg" alt="Shared Table" className="w-12 h-12" />
        </div>

        {/* Back to Home */}
        <Button 
          asChild
          className="bg-[#C7B47A] text-white hover:bg-[#B5A06A] rounded-full px-6 flex items-center gap-2 shadow-lg"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance text-gray-900">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed text-pretty">
            Empowering Korean food exporters with AI-powered global reach
          </p>
        </div>
      </section>
    </>
  )
}


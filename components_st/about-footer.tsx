"use client"

import { Building2 } from "lucide-react"

export function AboutFooter() {
  return (
    <footer className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/80 backdrop-blur-2xl ring-1 ring-gray-200 p-12 shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Building2 className="w-6 h-6 text-[#C7B47A]" />
              <span className="text-xl font-semibold text-gray-900">Shared Table</span>
            </div>
            <p className="text-gray-600 text-sm">© 2025 Shared Table. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


"use client"

import { Shield, Globe, Users } from "lucide-react"

export function AboutDifferentiators() {
  return (
    <>
      {/* What Makes Us Different */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900">What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI-Powered Localization */}
          <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 text-center shadow-sm">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">AI-Powered Localization</h3>
            <p className="text-gray-700 leading-relaxed">
              We generate multilingual content optimized for overseas buyers, ensuring your products speak the local
              language
            </p>
          </div>

          {/* Channel Exposure Support */}
          <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 text-center shadow-sm">
            <div className="text-5xl mb-6">📦</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Channel Exposure Support</h3>
            <p className="text-gray-700 leading-relaxed">
              We handle listings and exposure on AWS Store, TikTok Store, and other major global platforms
            </p>
          </div>

          {/* No In-House Team Needed */}
          <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 text-center shadow-sm">
            <div className="text-5xl mb-6">🤝</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">No In-House Team Needed</h3>
            <p className="text-gray-700 leading-relaxed">
              We fill the gap so you don't need to hire expensive global marketing experts
            </p>
          </div>

          {/* End-to-End Export Visibility */}
          <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 text-center shadow-sm">
            <div className="text-5xl mb-6">🌐</div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">End-to-End Export Visibility</h3>
            <p className="text-gray-700 leading-relaxed">
              Beyond listing — we help you actually get noticed and generate real business results
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold mb-12 text-center text-gray-900">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C7B47A]/20 ring-1 ring-[#C7B47A]/30 mb-6">
              <Shield className="w-6 h-6 text-[#C7B47A]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality First</h3>
            <p className="text-gray-700 leading-relaxed">
              We partner only with verified companies through the Incheon Food Cooperative, ensuring quality and
              reliability
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C7B47A]/20 ring-1 ring-[#C7B47A]/30 mb-6">
              <Globe className="w-6 h-6 text-[#C7B47A]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Global Reach</h3>
            <p className="text-gray-700 leading-relaxed">
              Our AI-powered platform creates content that resonates with international audiences across multiple
              markets
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C7B47A]/20 ring-1 ring-[#C7B47A]/30 mb-6">
              <Users className="w-6 h-6 text-[#C7B47A]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Partnership Focus</h3>
            <p className="text-gray-700 leading-relaxed">
              We believe in long-term partnerships, providing ongoing support to help our members succeed globally
            </p>
          </div>
        </div>
      </div>
    </>
  )
}


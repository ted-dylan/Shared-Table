"use client"

import { Building2, Shield, Globe, Users, Plus, Minus, Mail, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function STHomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const categories = ["All", "Seasoned Seaweed", "Rice Products", "Beverages", "Dumplings", "Kimchi"]

  const products = [
    {
      id: 1,
      name: "Premium Seasoned Seaweed",
      company: "Seoul Seaweed Co.",
      category: "Seasoned Seaweed",
      price: "$12.99/pack",
      image: "/images/seaweed.jpg",
      certification: "HACCP, ISO 22000",
    },
    {
      id: 2,
      name: "Instant Korean Ramen",
      company: "K-Food Industries",
      category: "Rice Products",
      price: "$8.50/pack",
      image: "/images/ramen.jpg",
      certification: "FDA, HACCP",
    },
    {
      id: 3,
      name: "Traditional Korean Meal Set",
      company: "Heritage Foods",
      category: "Kimchi",
      price: "$24.99/set",
      image: "/images/mealkit.jpg",
      certification: "Organic, HACCP",
    },
    {
      id: 4,
      name: "Organic Brown Rice Cakes",
      company: "Healthy Grains Ltd.",
      category: "Rice Products",
      price: "$15.99/pack",
      image: "/images/ricecakes.jpg",
      certification: "Organic, Non-GMO",
    },
    {
      id: 5,
      name: "Fermented Kimchi Premium",
      company: "Kimchi Masters",
      category: "Kimchi",
      price: "$18.99/jar",
      image: "/images/kimchi.jpg",
      certification: "Organic, Probiotic",
    },
    {
      id: 6,
      name: "Korean Barley Tea",
      company: "Mountain Tea Co.",
      category: "Beverages",
      price: "$9.99/box",
      image: "/images/barleytea.jpg",
      certification: "Organic, Fair Trade",
    },
  ]

  const faqs = [
    {
      question: "How does trading work on SangsaengMall?",
      answer:
        "SangsaengMall is a specialized B2B platform that follows these steps: Inquiry → Quote Negotiation → Contract Signing → Payment & Delivery. All transactions are securely protected with dedicated manager support.",
    },
    {
      question: "Is international trading available?",
      answer:
        "Yes, SangsaengMall supports global B2B transactions. We provide multilingual services, international payment systems, and import/export documentation support for all international trading needs.",
    },
    {
      question: "How is quality assurance handled?",
      answer:
        "All registered companies undergo strict verification processes and provide product certifications and quality guarantees. Our transaction protection system ensures safe and secure trading.",
    },
    {
      question: "What about membership and fees?",
      answer:
        "Basic membership registration is free, with separate fees only for premium services. For detailed pricing plans, please contact our customer service center.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen">
        {/* Background Video/Image with Overlay */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kling_20250912_Image_to_Video____________5553_0-i45M7yEPjC8ZjWyA8BxUMXOpEfvKBg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center justify-center px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <a href="/st#hero">
              <img src="/shared-table-logo-new.svg" alt="Shared Table" className="w-12 h-12" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Product Catalog", "Company Info", "Trading Guide", "Support", "About Us"].map((item) => (
              <a
                key={item}
                href={item === "Product Catalog" ? "/st/products" : 
                      item === "Company Info" ? "/st/vendors" :
                      item === "Trading Guide" ? "/st/trading-guide" :
                      item === "Support" ? "/st/support" : "/st/about"}
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons - Contact 버튼 제거 */}
          <div className="flex items-center gap-3">
            {/* Contact 버튼 제거됨 */}
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Secure Trading Guaranteed</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Shared Table.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Your shortcut to Korea's finest foods — connect, source, and grow with confidence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg" asChild>
              <a href="/st/products">Browse Products</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
              asChild
            >
              <a href="/st/vendors">Browse Companies</a>
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Secure Trading Guaranteed</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Verified Companies */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Companies</h3>
              <p className="text-white/80 leading-relaxed">
                Only trusted companies that have passed strict verification
              </p>
            </div>

            {/* Global Network */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Network</h3>
              <p className="text-white/80 leading-relaxed">Platform connecting buyers and suppliers worldwide</p>
            </div>

            {/* One-Stop Service */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">One-Stop Service</h3>
              <p className="text-white/80 leading-relaxed">
                Complete support from consultation to contract and payment
              </p>
            </div>

            {/* Expert Consultation */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Consultation</h3>
              <p className="text-white/80 leading-relaxed">Customized business consulting by industry experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Korean Food Products</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Discover authentic Korean food products from premium seasoned seaweed to traditional kimchi
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden hover:bg-white/10 transition-colors"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-white/60 mb-2">{product.company}</div>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <div className="text-sm text-white/60 mb-4">Certification: {product.certification}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">{product.price}</span>
                      <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-lg">
                        Order Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
                asChild
              >
                <a href="/st/products">View All Korean Foods</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Check out answers to common questions about using SangsaengMall. For more detailed inquiries, please
                  contact our customer service center.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-6 h-6" />
                  <span className="text-xl font-semibold">Shared Table</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  A trusted B2B specialized platform connecting Korean SMEs with global buyers. We create a better
                  business ecosystem through win-win cooperation and collaboration.
                </p>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Services</h3>
                <ul className="space-y-3">
                  {["Product Catalog", "Company Search", "Quote Request", "Trade Management"].map((item) => (
                    <li key={item}>
                      <a href={item === "Product Catalog" ? "/st/products" : "#"} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Support</h3>
                <ul className="space-y-3">
                  {["Customer Center", "User Guide", "Company Registration", "Partnership"].map((item) => (
                    <li key={item}>
                      <a href={item === "Customer Center" ? "/st/support" : "#"} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Company</h3>
                <ul className="space-y-3">
                  {["About Us", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
                    <li key={item}>
                      <a href={item === "About Us" ? "/st/about" : "#"} className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2025 Shared Table. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}




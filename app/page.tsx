"use client"

import { Building2, Shield, Globe, Users, Plus, Minus, Mail, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

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
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_aullgzaullgzaull%20%282%29-xK9uJBAFBDegnuE59NdWhAx3TEjfc5.png",
      certification: "HACCP, ISO 22000",
    },
    {
      id: 2,
      name: "Instant Korean Ramen",
      company: "K-Food Industries",
      category: "Rice Products",
      price: "$8.50/pack",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_aullgzaullgzaull%20%281%29-n9DO557apTBBYF4JH6BGnSUOuEjVJV.png",
      certification: "FDA, HACCP",
    },
    {
      id: 3,
      name: "Traditional Korean Meal Set",
      company: "Heritage Foods",
      category: "Kimchi",
      price: "$24.99/set",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_edt9dcedt9dcedt9-iPh2TK7HUbvJJCOVjicWPETOsLLGHH.png",
      certification: "Organic, HACCP",
    },
    {
      id: 4,
      name: "Organic Brown Rice Cakes",
      company: "Healthy Grains Ltd.",
      category: "Rice Products",
      price: "$15.99/pack",
      image: "/korean-rice-cakes-organic-brown.jpg",
      certification: "Organic, Non-GMO",
    },
    {
      id: 5,
      name: "Fermented Kimchi Premium",
      company: "Kimchi Masters",
      category: "Kimchi",
      price: "$18.99/jar",
      image: "/traditional-korean-kimchi-fermented-vegetables.jpg",
      certification: "Organic, Probiotic",
    },
    {
      id: 6,
      name: "Korean Barley Tea",
      company: "Mountain Tea Co.",
      category: "Beverages",
      price: "$9.99/box",
      image: "/korean-barley-tea-traditional-beverage.jpg",
      certification: "Organic, Fair Trade",
    },
    {
      id: 7,
      name: "Handmade Pork Dumplings",
      company: "Dumpling House",
      category: "Dumplings",
      price: "$22.99/pack",
      image: "/korean-handmade-pork-dumplings-mandu.jpg",
      certification: "HACCP, Halal",
    },
    {
      id: 8,
      name: "Roasted Seaweed Snacks",
      company: "Ocean Harvest",
      category: "Seasoned Seaweed",
      price: "$6.99/pack",
      image: "/korean-roasted-seaweed-snacks-crispy.jpg",
      certification: "Organic, Vegan",
    },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

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
      <div className="relative min-h-screen">
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
            <img src="/shared-table-logo-new.svg" alt="Shared Table" className="w-12 h-12" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Product Catalog", "Company Info", "Trading Guide", "Support", "About Us"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">contact</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Trusted B2B Trading Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Shared Table.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Your shortcut to Korea’s finest foods — connect, source, and grow with confidence
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
            >
              Browse Companies
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Secure Trading Guaranteed</span>
          </div>
        </div>
      </div>

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

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search Korean food products or brands"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-4 rounded-2xl whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? "bg-white text-black"
                        : "bg-white/5 ring-1 ring-white/20 backdrop-blur hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {filteredProducts.map((product) => (
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

      {/* Business Process Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Trading Process</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Simple and secure 4-step trading process
              </p>
            </div>

            {/* Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Step 1: Product Search */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Product Search</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Search for desired products across various categories and check company information.
                  </p>
                </div>
              </div>

              {/* Step 2: Quote Request */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Quote Request</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Request detailed quotes for products of interest and communicate directly with companies.
                  </p>
                </div>
              </div>

              {/* Step 3: Contract Signing */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Contract Signing</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Once negotiations are complete, sign formal contracts through our secure contract system.
                  </p>
                </div>
              </div>

              {/* Step 4: Safe Trading */}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Safe Trading</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Complete transactions with secure payments through escrow system and shipment tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Start Trading Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Start Trading
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

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Business Inquiry</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Submit Trading Inquiry</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter contact person name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Inquiry Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Please provide detailed information about your inquiry..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Send Inquiry
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    We welcome all business inquiries including B2B trading, company registration, and partnerships. Our
                    professional consultation team will respond within 1 business day.
                  </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="/korean-business-manager-professional.jpg"
                      alt="Sarah Kim Manager"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Sarah Kim</h4>
                      <p className="text-gray-600">Business Development Manager</p>
                    </div>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Inquiry
                  </Button>
                </div>
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
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
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
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
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
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Business Newsletter</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Subscribe</Button>
                </div>
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

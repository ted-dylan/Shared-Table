"use client"

export function AboutStats() {
  return (
    <div className="rounded-2xl bg-white/90 ring-1 ring-gray-200 backdrop-blur p-8 shadow-lg">
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Export Overview: Incheon at a Glance</h3>
      <div className="grid grid-cols-2 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-[#C7B47A] mb-2">$45M</div>
          <div className="text-gray-600 text-sm">Annual Volume (2024)</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#C7B47A] mb-2">4</div>
          <div className="text-gray-600 text-sm">Leading Countries</div>
          <div className="text-gray-500 text-xs mt-1">USA, Vietnam, Singapore, UAE</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#C7B47A] mb-2">3</div>
          <div className="text-gray-600 text-sm">Top Export Categories</div>
          <div className="text-gray-500 text-xs mt-1">Snacks, Sauces, Frozen Meals</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#C7B47A] mb-2">150+</div>
          <div className="text-gray-600 text-sm">Partner Companies</div>
          <div className="text-gray-500 text-xs mt-1">Verified by Incheon Food Cooperative</div>
        </div>
      </div>
    </div>
  )
}


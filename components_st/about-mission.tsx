"use client"

export function AboutMission() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
      {/* Left Column - Text Content */}
      <div className="space-y-8">
        {/* Mission & Purpose */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Mission & Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            We empower Korean food exporters by generating AI-powered content that resonates with international markets.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Our platform helps member companies get discovered through major global channels like AWS Store and TikTok
            Store—eliminating the need for in-house marketing teams.
          </p>
        </div>

        {/* Membership & Collaboration */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Membership & Collaboration</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            We are partnering with the <strong>Incheon Food Cooperative (인천식협)</strong> to recruit trusted member
            companies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            This platform is designed for small-to-medium Korean food businesses who:
          </p>
          <ul className="text-gray-700 leading-relaxed space-y-3 ml-6 text-lg">
            <li>• Want to export their products globally</li>
            <li>• Need professional content in foreign languages</li>
            <li>• Lack specialist staff for international marketing</li>
            <li>• Seek cost-effective digital marketing solutions</li>
          </ul>
        </div>

        {/* The Challenge */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">The Challenge We Solve</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Korean food exporters face significant barriers when trying to reach international markets. Traditional
            marketing approaches are expensive and often ineffective for small-to-medium businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-6 shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-gray-900">From the buyer's perspective:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Hard to find quality Korean food products with localized content</li>
                <li>• Language barriers in product descriptions</li>
                <li>• Little follow-up or support after initial contact</li>
                <li>• Inconsistent product information across platforms</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-6 shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-gray-900">From the exporter's perspective:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Lack of overseas marketing expertise</li>
                <li>• Low visibility on foreign e-commerce platforms</li>
                <li>• Not knowing where to begin with digital exposure</li>
                <li>• High costs of hiring international marketing teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Image and Stats */}
      <div className="space-y-8">
        <div className="rounded-2xl bg-white/80 ring-1 ring-gray-200 backdrop-blur p-8 text-center shadow-sm">
          <video
            src="/지구본_홀로그램_회 - Trim.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-80 object-cover rounded-xl mb-6"
          />
          <p className="text-gray-600 text-sm">
            Connecting Korean food exporters with global markets through AI-powered solutions
          </p>
        </div>
      </div>
    </div>
  )
}


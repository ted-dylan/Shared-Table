"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutCTA() {
  const handleJoinPlatform = () => {
    alert('회원가입 문의 이메일이 열립니다!')
    window.open('mailto:contact@sharedtable.com?subject=Platform Membership Inquiry', '_blank')
  }

  const handleScheduleConsultation = () => {
    alert('상담 예약 페이지로 이동합니다!')
    window.open('https://calendly.com/sharedtable/consultation', '_blank')
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Ready to Expand Globally?</h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Join our platform and let AI-powered marketing help your Korean food products reach international markets
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          onClick={handleJoinPlatform}
          className="bg-[#C7B47A] text-white hover:bg-[#B5A06A] rounded-full px-12 py-4 text-lg font-semibold shadow-lg cursor-pointer"
        >
          Join Our Platform
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={handleScheduleConsultation}
          className="bg-white border-2 border-[#C7B47A] text-[#C7B47A] hover:bg-[#C7B47A]/10 rounded-full px-12 py-4 text-lg font-semibold shadow-lg cursor-pointer"
        >
          Schedule Consultation
        </Button>
      </div>
    </div>
  )
}


"use client"

import { useState } from 'react'
import ui from '@/app/st/_ui/panel.module.css'

interface InquiryPopupProps {
  isOpen: boolean
  onClose: () => void
  vendorName?: string
}

export function InquiryPopup({ isOpen, onClose, vendorName }: InquiryPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    moq: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Console.log 목업 (PRD 요구사항)
    console.log('Inquiry submitted:', {
      vendor: vendorName || 'General Inquiry',
      ...formData,
      timestamp: new Date().toISOString()
    })
    
    // 성공 메시지 표시
    alert('Your inquiry has been submitted successfully! We will contact you within 24 hours.')
    
    // 폼 리셋 및 팝업 닫기
    setFormData({ name: '', email: '', company: '', message: '', moq: '' })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#24292f',
        border: '1px solid #2e3440',
        borderRadius: '24px',
        padding: '32px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: '#e8eef7', fontSize: '24px', fontWeight: '800', margin: 0 }}>
            {vendorName ? `Contact ${vendorName}` : 'Business Inquiry'}
          </h2>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#b9c2cf',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#e8eef7', marginBottom: '8px', fontWeight: '600' }}>
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#1c2128',
                border: '1px solid #3a404a',
                borderRadius: '8px',
                color: '#e8eef7',
                fontSize: '14px'
              }}
              placeholder="Enter your full name"
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#e8eef7', marginBottom: '8px', fontWeight: '600' }}>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#1c2128',
                border: '1px solid #3a404a',
                borderRadius: '8px',
                color: '#e8eef7',
                fontSize: '14px'
              }}
              placeholder="your.email@company.com"
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#e8eef7', marginBottom: '8px', fontWeight: '600' }}>
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#1c2128',
                border: '1px solid #3a404a',
                borderRadius: '8px',
                color: '#e8eef7',
                fontSize: '14px'
              }}
              placeholder="Your company name"
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#e8eef7', marginBottom: '8px', fontWeight: '600' }}>
              Minimum Order Quantity (MOQ)
            </label>
            <select
              name="moq"
              value={formData.moq}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#1c2128',
                border: '1px solid #3a404a',
                borderRadius: '8px',
                color: '#e8eef7',
                fontSize: '14px'
              }}
            >
              <option value="">Select MOQ</option>
              <option value="100-500">100-500 units</option>
              <option value="500-1000">500-1,000 units</option>
              <option value="1000-5000">1,000-5,000 units</option>
              <option value="5000+">5,000+ units</option>
              <option value="custom">Custom quantity</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', color: '#e8eef7', marginBottom: '8px', fontWeight: '600' }}>
              Inquiry Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#1c2128',
                border: '1px solid #3a404a',
                borderRadius: '8px',
                color: '#e8eef7',
                fontSize: '14px',
                resize: 'vertical'
              }}
              placeholder="Please describe your inquiry, product requirements, timeline, etc."
            />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '12px 24px',
                backgroundColor: '#1c2128',
                border: '1px solid #3a404a',
                borderRadius: '12px',
                color: '#d6dde7',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '12px 24px',
                backgroundColor: '#e6edf3',
                border: '1px solid #d5dbe6',
                borderRadius: '12px',
                color: '#0b1220',
                cursor: 'pointer',
                fontWeight: '800'
              }}
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

"use client"
import ui from '@/app/st/_ui/panel.module.css';
import { vendors } from '@/lib/st/data/vendors';
import { InquiryPopup } from '@/components_st/inquiry-popup';
import { useState } from 'react';

export default function Vendors(){
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState<string>('');

  const handleInquiryClick = (vendorName: string) => {
    setSelectedVendor(vendorName);
    setPopupOpen(true);
  };
  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}>
          <h1 className={ui.title}>Trusted Korean Partners</h1>
          <p className={ui.sub}>Connect with verified Korean food manufacturers and exporters. Each company has been carefully vetted for quality, reliability, and export capabilities.</p>
        </header>
        <div className={`${ui.grid}`}>
          {vendors.map(v => (
            <article key={v.id} className={ui.card}>
              <div className={ui.thumb}>
                {v.logo ? <img src={v.logo} alt={v.name}/> : null}
              </div>
              <div className={ui.body}>
                <div className={ui.muted}>{v.country ?? 'KR'}</div>
                <h3 className={ui.name}>{v.name}</h3>
                <div className={ui.meta}>{v.bio ?? '—'}</div>
                <div className={ui.spread}>
                  <a href={`/st/vendors/${v.id}`} className={ui.button}>View Company</a>
                  <button 
                    onClick={() => handleInquiryClick(v.name)}
                    className={ui.buttonGhost}
                    style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                  >
                    Inquiry
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* Inquiry Popup */}
      <InquiryPopup 
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        vendorName={selectedVendor}
      />
    </div>
  );
}

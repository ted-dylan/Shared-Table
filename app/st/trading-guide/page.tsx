import ui from '@/app/st/_ui/panel.module.css';
export default function TradingGuide(){
  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}>
          <h1 className={ui.title}>Trading Guide</h1>
          <p className={ui.sub}>Step-by-step guidance for contacting companies and preparing export information.</p>
        </header>
        <h2 style={{color:'#e8eef7',fontWeight:800}}>1) Quick Guide</h2>
        <ul style={{color:'#b9c2cf'}}>
          <li>Incoterms / MOQ / Payment / Certifications checklist</li>
          <li>Sample & Lead Time policy</li>
        </ul>
        <div style={{height:16}}/>
        <h2 style={{color:'#e8eef7',fontWeight:800}}>2) Info Form (placeholder)</h2>
        <form className={ui.row}>
          <input placeholder="Buyer Country" className={ui.search} style={{maxWidth:320}}/>
          <input placeholder="Target Items" className={ui.search} style={{maxWidth:320}}/>
          <input placeholder="Expected MOQ" className={ui.search} style={{maxWidth:320}}/>
        </form>
        <div style={{height:16}}/>
        <h2 style={{color:'#e8eef7',fontWeight:800}}>3) Choose Company (mock)</h2>
        <a href="/st/vendors" className={ui.button}>Open Selector</a>
      </section>
    </div>
  );
}

import ui from '@/app/st/_ui/panel.module.css';
export default function Inquiry(){
  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}>
          <h1 className={ui.title}>Company Inquiry</h1>
          <p className={ui.sub}>Send your inquiry to the selected company.</p>
        </header>
        <form style={{maxWidth:720, margin:'0 auto'}}>
          <div className={ui.search}><input placeholder="Your Name"/></div>
          <div className={ui.search}><input placeholder="Email Address"/></div>
          <div className={ui.search}><input placeholder="Company Name"/></div>
          <div className={ui.search}><input placeholder="Target Products"/></div>
          <div className={ui.search}><input placeholder="Expected MOQ"/></div>
          <div className={ui.search}><textarea placeholder="Message" style={{minHeight:120}}></textarea></div>
          <div style={{display:'flex',justifyContent:'center',marginTop:12}}>
            <button className={ui.button} type="submit">Send Inquiry</button>
          </div>
        </form>
      </section>
    </div>
  );
}

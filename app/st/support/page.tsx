import ui from '@/app/st/_ui/panel.module.css';
export default function Support(){
  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}><h1 className={ui.title}>Support</h1><p className={ui.sub}>Leave us a message. We will get back to you.</p></header>
        <form style={{maxWidth:720, margin:'0 auto'}}>
          <div className={ui.search}><input placeholder="Name"/></div>
          <div className={ui.search}><input placeholder="Email"/></div>
          <div className={ui.search}><input placeholder="Company"/></div>
          <div className={ui.search}><input placeholder="Message"/></div>
          <div style={{display:'flex',justifyContent:'center',marginTop:12}}><button className={ui.button} type="submit">Submit</button></div>
        </form>
      </section>
    </div>
  );
}

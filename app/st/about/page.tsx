import ui from '@/app/st/_ui/panel.module.css';
export default function About(){
  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}><h1 className={ui.title}>About Us</h1><p className={ui.sub}>Shared Table — connect global buyers with Korea's finest foods.</p></header>
        <p style={{color:'#b9c2cf',textAlign:'center'}}>Mission • Values • Contact • Partners</p>
      </section>
    </div>
  );
}

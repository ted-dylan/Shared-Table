import ui from '@/app/st/_ui/panel.module.css';
import { vendors } from '@/lib/st/data/vendors';
export default function Vendors(){
  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}>
          <h1 className={ui.title}>Company Info</h1>
          <p className={ui.sub}>Discover trusted Korean manufacturers and exporters.</p>
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
                  <a href={`/st/inquiry`} className={ui.buttonGhost}>Inquiry</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

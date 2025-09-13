import ui from '@/app/st/_ui/panel.module.css';
import { vendors } from '@/lib/st/data/vendors';
import { products } from '@/lib/st/data/products';
export default function Vendor({ params }:{ params:{ id:string }}){
  const v = vendors.find(x=>x.id===params.id);
  if(!v) return <div className={ui.page}><section className={ui.panel}><p>Not found</p></section></div>;
  const reps = products.filter(p=>p.vendorId===v.id).slice(0,6);
  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}>
          <h1 className={ui.title}>{v.name}</h1>
          <p className={ui.sub}>{v.bio ?? '—'}</p>
        </header>
        <div className={ui.row}>
          <a href="/st/vendors" className={ui.buttonGhost}>← Back to companies</a>
          <a href="/st/inquiry" className={ui.button}>Contact</a>
        </div>
        <div style={{height:16}}/>
        <h2 style={{color:'#e8eef7',fontWeight:800,fontSize:20,margin:'0 0 8px'}}>Featured Products</h2>
        <div className={ui.grid}>
          {reps.map(p=> (
            <article key={p.id} className={ui.card}>
              <div className={ui.thumb}>{p.thumbnail ? <img src={p.thumbnail} alt={p.name}/> : null}</div>
              <div className={ui.body}>
                <div className={ui.muted}>Category: {p.category}</div>
                <h3 className={ui.name}>{p.name}</h3>
                <div className={ui.meta}>Certification: {p.tags.join(', ')}</div>
                <div className={ui.spread}>
                  <div style={{fontWeight:900}}>${p.price.toFixed(2)}</div>
                  <a href={`/st/products/${p.id}`} className={ui.button}>View</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

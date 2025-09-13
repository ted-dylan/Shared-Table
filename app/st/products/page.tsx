"use client";
import { useMemo, useState } from 'react';
import { products as DATA } from '@/lib/st/data/products';
import ui from '@/app/st/_ui/panel.module.css';

const CATEGORIES = ['All','Seasoned Seaweed','Rice Products','Beverages','Dumplings','Kimchi','Ramen','Meal Kit'];

export default function ProductsPage(){
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const list = useMemo(()=>{
    return DATA.filter(p => {
      const matchCat = cat === 'All' || p.category === cat;
      const qq = q.trim().toLowerCase();
      const matchQ = !qq || p.name.toLowerCase().includes(qq);
      return matchCat && matchQ;
    });
  },[q,cat]);

  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}>
          <h1 className={ui.title}>Korean Food Products</h1>
          <p className={ui.sub}>Discover authentic Korean food products from premium seasoned seaweed to traditional kimchi.</p>
        </header>

        {/* 검색바 */}
        <div className={ui.search}>
          <input 
            value={q} 
            onChange={e=>setQ(e.target.value)} 
            placeholder="Search Korean food or brand" 
            aria-label="search"
          />
        </div>

        {/* 카테고리 칩 */}
        <div className={ui.row}>
          {CATEGORIES.map(c => (
            <button 
              key={c} 
              onClick={()=>setCat(c)}
              className={cat===c ? `${ui.chip} ${ui.chipActive}` : ui.chip}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 카드 그리드 */}
        <div className={ui.grid} role="list" aria-label="product list">
          {list.map(p => (
            <article key={p.id} role="listitem" className={ui.card}>
              <div className={ui.thumb}>
                {p.thumbnail ? <img src={p.thumbnail} alt={p.name}/> : null}
              </div>
              <div className={ui.body}>
                <div className={ui.muted}>Vendor #{p.vendorId.toUpperCase()}</div>
                <h3 className={ui.name}>{p.name}</h3>
                <div className={ui.meta}>Certification: {p.tags.join(', ')}</div>
                <div className={ui.spread}>
                  <div style={{fontWeight:800}}>{`$${p.price.toFixed(2)}/${p.category==='Rice Products'?'pack':p.category==='Meal Kit'?'set':'pack'}`}</div>
                  <a href={`/st/products/${p.id}`} className={ui.button}>Order Now</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 비어있을 때 */}
        {list.length===0 && (
          <div style={{textAlign:'center',padding:'40px 0',opacity:0.7}}>No products found.</div>
        )}
      </section>
    </div>
  );
}

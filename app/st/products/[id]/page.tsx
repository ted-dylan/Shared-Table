import ui from '@/app/st/_ui/panel.module.css';
import { products } from '@/lib/st/data/products';
import { vendors } from '@/lib/st/data/vendors';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  const vendor = product ? vendors.find(v => v.id === product.vendorId) : null;

  if (!product) {
    return (
      <div className={ui.page}>
        <a href="/st#hero" className={ui.logo}>
          <img src="/shared-table-logo-new.svg" alt="Shared Table" />
        </a>
        <section className={ui.panel}>
          <header className={ui.header}>
            <h1 className={ui.title}>Product Not Found</h1>
            <p className={ui.sub}>The requested product could not be found.</p>
          </header>
          <div style={{textAlign:'center',padding:'40px 0'}}>
            <a href="/st/products" className={ui.button}>Back to Products</a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={ui.page}>
      {/* 홈으로 돌아가기 로고 */}
      <a href="/st#hero" className={ui.logo}>
        <img src="/shared-table-logo-new.svg" alt="Shared Table" />
      </a>
      
      <section className={ui.panel}>
        <header className={ui.header}>
          <h1 className={ui.title}>{product.name}</h1>
          <p className={ui.sub}>Product details and ordering information</p>
        </header>

        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginBottom:24}}>
          {/* 제품 이미지 */}
          <div>
            {product.thumbnail && (
              <img 
                src={product.thumbnail} 
                alt={product.name}
                style={{width:'100%',height:300,objectFit:'cover',borderRadius:8}}
              />
            )}
          </div>

          {/* 제품 정보 */}
          <div>
            <div className={ui.muted}>Vendor #{product.vendorId.toUpperCase()}</div>
            <h2 style={{fontSize:24,fontWeight:800,marginBottom:12}}>{product.name}</h2>
            <div className={ui.meta}>Category: {product.category}</div>
            <div className={ui.meta}>Certification: {product.tags.join(', ')}</div>
            <div style={{fontSize:28,fontWeight:800,marginTop:16,marginBottom:16}}>
              ${product.price.toFixed(2)}/{product.category==='Rice Products'?'pack':product.category==='Meal Kit'?'set':'pack'}
            </div>
            <div style={{display:'flex',gap:12}}>
              <a href={`/st/vendors/${product.vendorId}`} className={ui.button}>View Company</a>
              <a href="/st/inquiry" className={ui.buttonGhost}>Send Inquiry</a>
            </div>
          </div>
        </div>

        {/* 벤더 정보 */}
        {vendor && (
          <div style={{borderTop:'1px solid #333',paddingTop:24}}>
            <h3 style={{fontSize:20,fontWeight:800,marginBottom:12}}>Manufacturer Information</h3>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
              <div>
                <div className={ui.muted}>Company</div>
                <div style={{fontSize:18,fontWeight:600}}>{vendor.name}</div>
              </div>
              <div>
                <div className={ui.muted}>Country</div>
                <div style={{fontSize:18,fontWeight:600}}>{vendor.country ?? 'KR'}</div>
              </div>
              <div style={{gridColumn:'1/-1'}}>
                <div className={ui.muted}>About</div>
                <div>{vendor.bio ?? '—'}</div>
              </div>
            </div>
          </div>
        )}

        <div style={{textAlign:'center',marginTop:24}}>
          <a href="/st/products" className={ui.buttonGhost}>Back to Products</a>
        </div>
      </section>
    </div>
  );
}

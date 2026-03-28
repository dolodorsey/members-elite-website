'use client';
import { useEffect, useRef, useState } from 'react';

const SVCS = [{n:"Contract Negotiation",d:"Maximum value contracts — pro, endorsement, and NIL."},{n:"Brand Partnerships",d:"Strategic deals, sponsorship alignment, personal brand."},{n:"Financial Planning",d:"Wealth management, investment, long-term security."},{n:"Career Management",d:"Post-career transition, media training, business dev."},];

export default function Home() {
  const [ld, setLd] = useState(false);
  const [mo, setMo] = useState(false);
  const [sc, setSc] = useState(false);
  const refs = useRef([]);
  const addR = (el) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  useEffect(() => { setTimeout(() => setLd(true), 1800); }, []);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    }), { threshold: 0.12 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, [ld]);

  return (<>
    {/* PRELOADER */}
    <div style={{position:'fixed',top:0,left:0,width:'100%',height:'100%',background:'#0A0A0E',zIndex:10000,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',opacity:ld?0:1,visibility:ld?'hidden':'visible',transition:'opacity 1s cubic-bezier(0.16,1,0.3,1),visibility 1s'}}>
      <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,5vw,48px)',fontWeight:300,color:'#F5F0E8',letterSpacing:'0.08em',textTransform:'uppercase'}}>Members Elite</div>
      <div style={{fontFamily:'DM Mono,monospace',fontSize:'9px',letterSpacing:'0.3em',textTransform:'uppercase',color:'#D4B87A',opacity:0.6,marginTop:12}}>The Kollective Hospitality Group</div>
    </div>

    {/* MOBILE NAV */}
    <div style={{position:'fixed',top:0,right:mo?'0':'-100%',width:'100%',height:'100%',background:'#0A0A0E',zIndex:999,display:'flex',flexDirection:'column',justifyContent:'center',padding:'96px clamp(20px,4vw,80px)',transition:'right 0.6s cubic-bezier(0.16,1,0.3,1)'}}>
      {['services','about','connect'].map(s => <a key={s} href={`#${s}`} onClick={() => setMo(false)} style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,5vw,56px)',fontWeight:300,textDecoration:'none',display:'block',padding:'14px 0',borderBottom:'1px solid rgba(247,247,244,0.06)',color:'#F5F0E8'}}>{s.charAt(0).toUpperCase()+s.slice(1)}</a>)}
    </div>

    {/* NAV */}
    <nav style={{position:'fixed',top:0,left:0,width:'100%',zIndex:1000,padding:'20px clamp(20px,4vw,80px)',display:'flex',alignItems:'center',justifyContent:'space-between',background:sc?'rgba(10,10,14,0.92)':'transparent',backdropFilter:sc?'blur(16px)':'none',transition:'background 0.4s'}}>
      <a href="#" style={{textDecoration:'none'}}><div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(14px,1.6vw,20px)',fontWeight:500,letterSpacing:'0.08em',textTransform:'uppercase',color:'#F5F0E8'}}>Members Elite</div></a>
      <ul className="desk-nav" style={{display:'flex',gap:36,listStyle:'none',margin:0,padding:0}}>
        {['services','about','connect'].map(s => <li key={s}><a href={`#${s}`} className="na" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(247,247,244,0.5)',textDecoration:'none'}}>{s}</a></li>)}
      </ul>
      <a href="#connect" className="desk-cta" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(7px,0.65vw,9px)',letterSpacing:'0.2em',textTransform:'uppercase',color:'#0A0A0E',background:'#D4B87A',padding:'9px 22px',textDecoration:'none'}}>Get Started</a>
      <button className="mob-btn" onClick={() => setMo(!mo)} style={{display:'none',background:'none',border:'none',cursor:'pointer',width:26,height:18,position:'relative'}}>
        <span style={{display:'block',width:'100%',height:'1px',background:'#F5F0E8',position:'absolute',left:0,top:mo?8:2,transition:'all 0.3s',transform:mo?'rotate(45deg)':'none'}} />
        <span style={{display:'block',width:'100%',height:'1px',background:'#F5F0E8',position:'absolute',left:0,top:8,transition:'all 0.3s',opacity:mo?0:1}} />
        <span style={{display:'block',width:'100%',height:'1px',background:'#F5F0E8',position:'absolute',left:0,top:mo?8:14,transition:'all 0.3s',transform:mo?'rotate(-45deg)':'none'}} />
      </button>
    </nav>

    {/* HERO */}
    <section style={{position:'relative',height:'100vh',overflow:'hidden',display:'flex',flexDirection:'column',justifyContent:'center',background:'#0A0A0E'}}>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'linear-gradient(135deg,#0A0A0E 0%,rgba(255,255,255,0.03) 50%,#0A0A0E 100%)'}} />
      <div style={{position:'relative',zIndex:3,maxWidth:620,padding:'0 clamp(20px,4vw,80px)'}}>
        <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.35em',textTransform:'uppercase',color:'#D4B87A',marginBottom:20,animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.8s both'}}>Members Elite × The Kollective</div>
        <h1 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(32px,6vw,80px)',fontWeight:300,lineHeight:1.1,letterSpacing:'-0.02em',color:'#F5F0E8',margin:0,animation:'fadeUp 1s cubic-bezier(0.16,1,0.3,1) 2s both'}}>Represent.<br />Negotiate.<br /><em style={{fontStyle:'italic',color:'#C4302B'}}>Dominate.</em></h1>
        <p style={{fontSize:'clamp(13px,1.2vw,16px)',color:'rgba(247,247,244,0.45)',lineHeight:1.7,maxWidth:440,marginTop:24,animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.2s both'}}>Full-service sports agency — contracts, NIL deals, brand partnerships, and career management.</p>
        <a href="#services" style={{display:'inline-block',fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.25em',textTransform:'uppercase',color:'#0A0A0E',background:'#D4B87A',padding:'14px 40px',textDecoration:'none',marginTop:40,animation:'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 2.4s both'}}>Explore</a>
      </div>
      <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:'2px',background:'linear-gradient(90deg,transparent,#D4B87A,transparent)',zIndex:3,opacity:0.4}} />
    </section>

    {/* SERVICES */}
    <section id="services" style={{padding:'clamp(80px,10vw,140px) clamp(20px,4vw,80px)',background:'#0A0A0E'}}>
      <div style={{maxWidth:1400,margin:'0 auto'}}>
        <div ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:'opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)'}}>
          <div style={{width:40,height:1,background:'#D4B87A',marginBottom:16}} />
          <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,5vw,64px)',fontWeight:300,lineHeight:1.1,letterSpacing:'-0.02em',color:'#F5F0E8',marginBottom:48}}>What we <em style={{fontStyle:'italic',color:'#C4302B'}}>deliver.</em></h2>
        </div>
        <div className="svc-grid" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2px'}}>
          {SVCS.map((s, i) => (
            <div key={i} ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:`opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${i*0.08}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${i*0.08}s`}}>
              <div className="svc-card" style={{background:'rgba(247,247,244,0.03)',border:'1px solid rgba(247,247,244,0.06)',padding:'clamp(32px,3vw,48px)',height:'100%',position:'relative',overflow:'hidden',cursor:'pointer',transition:'all 0.4s'}}>
                <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(48px,5vw,64px)',fontWeight:300,color:'rgba(180,151,90,0.1)',position:'absolute',top:-6,right:12,lineHeight:1}}>0{i+1}</div>
                <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(20px,2.2vw,28px)',fontWeight:400,color:'#F5F0E8',marginBottom:12,position:'relative'}}>{s.n}</div>
                <div style={{fontSize:'clamp(12px,1vw,14px)',color:'rgba(247,247,244,0.4)',lineHeight:1.75,position:'relative'}}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CINEMATIC BREAK */}
    <div style={{position:'relative',height:'clamp(200px,30vw,350px)',overflow:'hidden',background:'#0A0A0E'}}>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:`linear-gradient(180deg,#0A0A0E 0%,transparent 30%,transparent 70%,#0A0A0E 100%)`,display:'flex',alignItems:'center',justifyContent:'flex-start',padding:'0 clamp(40px,6vw,120px)'}}>
        <div style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(20px,3.5vw,48px)',fontWeight:300,fontStyle:'italic',color:'#D4B87A',maxWidth:500,lineHeight:1.3}}>&ldquo;Sports Agency — built different.&rdquo;</div>
      </div>
    </div>

    {/* ABOUT */}
    <section id="about" style={{padding:'clamp(80px,10vw,140px) clamp(20px,4vw,80px)',background:'#F5F0E8',color:'#0A0A0E'}}>
      <div style={{maxWidth:1400,margin:'0 auto'}}>
        <div ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:'opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)'}}>
          <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:32}}>
            <div style={{width:40,height:1,background:'#C4302B'}} />
            <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.35em',textTransform:'uppercase',color:'#C4302B'}}>A Kollective Company</div>
          </div>
          <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(26px,4.5vw,56px)',fontWeight:300,lineHeight:1.1,letterSpacing:'-0.02em',color:'#0A0A0E',marginBottom:24}}>Part of something <em style={{fontStyle:'italic',color:'#C4302B'}}>bigger.</em></h2>
          <p style={{fontSize:'clamp(14px,1.3vw,18px)',color:'rgba(20,22,27,0.5)',lineHeight:1.8,maxWidth:600}}>Members Elite operates under The Kollective Hospitality Group — a multi-brand enterprise spanning events, food & beverage, museums, consumer products, technology, and wellness across 8 cities. Every division benefits from shared infrastructure, relationships, and operational excellence.</p>
        </div>
      </div>
    </section>

    {/* CONNECT */}
    <section id="connect" style={{padding:'clamp(80px,10vw,140px) clamp(20px,4vw,80px)',background:'#0A0A0E'}}>
      <div style={{maxWidth:900,margin:'0 auto',textAlign:'center'}}>
        <div ref={addR} style={{opacity:0,transform:'translateY(35px)',transition:'opacity 0.8s cubic-bezier(0.16,1,0.3,1),transform 0.8s cubic-bezier(0.16,1,0.3,1)'}}>
          <div style={{width:40,height:1,background:'#D4B87A',margin:'0 auto 16px'}} />
          <h2 style={{fontFamily:'Cormorant Garamond,serif',fontSize:'clamp(28px,5vw,64px)',fontWeight:300,lineHeight:1.1,color:'#F5F0E8',marginBottom:24}}>{"Let's"} <em style={{fontStyle:'italic',color:'#C4302B'}}>connect.</em></h2>
          <p style={{fontSize:'clamp(14px,1.3vw,18px)',color:'rgba(247,247,244,0.45)',lineHeight:1.7,maxWidth:560,margin:'0 auto 48px'}}>Full-service sports agency — contracts, NIL deals, brand partnerships, and career management.</p>
          <a href="mailto:thedoctordorsey@gmail.com?subject=Members Elite Inquiry" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(8px,0.7vw,10px)',letterSpacing:'0.2em',textTransform:'uppercase',color:'#0A0A0E',background:'#D4B87A',padding:'14px 36px',textDecoration:'none',display:'inline-block'}}>Get In Touch</a>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer className="ftr" style={{padding:'40px clamp(20px,4vw,80px)',borderTop:'1px solid rgba(247,247,244,0.06)',display:'flex',alignItems:'center',justifyContent:'space-between',background:'#0A0A0E'}}>
      <div style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(7px,0.65vw,9px)',letterSpacing:'0.2em',color:'rgba(247,247,244,0.3)'}}>© 2026 Members Elite — The Kollective Hospitality Group</div>
      <a href="https://doctordorsey.com" target="_blank" rel="noopener noreferrer" style={{fontFamily:'DM Mono,monospace',fontSize:'clamp(7px,0.65vw,9px)',letterSpacing:'0.1em',color:'rgba(247,247,244,0.3)',textDecoration:'none'}}>Dr. Dorsey</a>
    </footer>

    <style>{`
      @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      .na:hover { color: #F5F0E8 !important; }
      .svc-card:hover { border-color: rgba(180,151,90,0.3) !important; transform: translateY(-2px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
      @media (max-width: 1024px) { .svc-grid { grid-template-columns: 1fr !important; } }
      @media (max-width: 768px) { .desk-nav { display: none !important; } .desk-cta { display: none !important; } .mob-btn { display: block !important; } .ftr { flex-direction: column !important; gap: 16px !important; text-align: center !important; } }
    `}</style>
  </>);
}

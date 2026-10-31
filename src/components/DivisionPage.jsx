import Link from 'next/link';
import Art from './Art';
import {SiteNav,SiteFooter} from './SiteChrome';
import {divisions} from '../lib/site';

export function DivisionHero({k,title,lead,ctas=[],kicker}){
  const d=divisions[k];
  return <section className={'mx-dHero t-'+d.tone}>
    <div className="mx-dHeroCopy">
      <p className="mx-dKicker"><b className={'mx-chip t-'+d.tone}>{d.code}</b>{kicker||d.name}</p>
      <h1>{title}</h1>
      <p className="mx-lead">{lead}</p>
      {ctas.length>0&&<div className="mx-ctaRow">{ctas.map(([label,href,ghost],i)=>href.startsWith('http')?<a key={label} className={'mx-btn'+(ghost||i>0?' mx-btnGhost':'')} href={href} target="_blank" rel="noopener">{label}</a>:<Link key={label} className={'mx-btn'+(ghost||i>0?' mx-btnGhost':'')} href={href}>{label}</Link>)}</div>}
    </div>
    <div className="mx-dHeroArt"><Art kind={d.art}/><span className="mx-dHeroCode" aria-hidden="true">{d.code}</span></div>
  </section>
}

export function Section({title,intro,children,tone='',id}){
  return <section className={'mx-dSection '+tone} id={id}><div className="mx-wrap">{(title||intro)&&<div className="mx-headRow">{title&&<h2>{title}</h2>}{intro&&<p>{intro}</p>}</div>}{children}</div></section>
}

export function PriceList({items}){
  return <ul className="mx-priceList">{items.map(([n,p,d])=><li key={n}><div><strong>{n}</strong><span>{d}</span></div><b>{p}</b></li>)}</ul>
}

export function Points({items}){
  return <ul className="mx-points">{items.map(([h,p])=><li key={h}><strong>{h}</strong><p>{p}</p></li>)}</ul>
}

export function Related({keys}){
  return <section className="mx-related"><div className="mx-wrap"><h2>More from Member’s Elite</h2><div className="mx-relatedRow">{keys.map(k=>{const d=divisions[k];return <Link key={k} href={d.href} className="mx-indexRow"><b className={'mx-chip t-'+d.tone}>{d.code}</b><span>{d.name}</span><small>{d.short}</small></Link>})}</div></div></section>
}

export default function DivisionShell({children}){return <main><SiteNav/>{children}<SiteFooter/></main>}

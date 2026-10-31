'use client';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {divisions,sponsors} from '../lib/site';

const menu=[
  {label:'Leagues',items:[...['meb','wda','atf'].map(k=>({href:divisions[k].href,code:divisions[k].code,name:divisions[k].name,tone:divisions[k].tone})),{href:'/tournaments',name:'Tournament registration',note:'5v5, 3v3, 2v2, 1v1, youth'}]},
  {label:'Train',items:[{href:'/training',code:'PT',name:'Personal Training',tone:'training'},{href:'/camps',code:'CMP',name:'Sports Camps',tone:'camps'},{href:'/memberships',name:'Memberships',note:'From $149 a month'},{href:'/athlete-hq',name:'Athlete HQ',note:'Your training record'}]},
  {label:'Management',href:'/management'},
  {label:'Community',items:[{href:'/playmakers',code:'PSA',name:'Playmakers Sports Association',tone:'playmakers',note:'Nonprofit'},{href:'/sole-exchange',code:'SOLE',name:'Sole Exchange',tone:'sole',note:'Shoe drive'}]},
];

function Logo({compact}){return <Link href="/" className="mx-logo" aria-label="Member's Elite home"><img src="/me-mark.webp" alt="" width="200" height="111"/>{!compact&&<span><b>Member’s Elite</b><small>Sports Management</small></span>}</Link>}

export function SiteNav(){
  const [open,setOpen]=useState(null),[sheet,setSheet]=useState(false);const ref=useRef(null);const path=usePathname();
  useEffect(()=>{setOpen(null);setSheet(false)},[path]);
  useEffect(()=>{const away=e=>{if(ref.current&&!ref.current.contains(e.target))setOpen(null)};const esc=e=>{if(e.key==='Escape'){setOpen(null);setSheet(false)}};document.addEventListener('pointerdown',away);document.addEventListener('keydown',esc);return()=>{document.removeEventListener('pointerdown',away);document.removeEventListener('keydown',esc)}},[]);
  useEffect(()=>{const h=document.documentElement;h.style.overflow=sheet?'hidden':'';h.classList.toggle('mx-sheetOpen',sheet);return()=>{h.style.overflow='';h.classList.remove('mx-sheetOpen')}},[sheet]);
  return <header className="mx-nav" ref={ref}>
    <div className="mx-navBar">
      <Logo/>
      <nav aria-label="Main" className="mx-menu">
        {menu.map(g=>g.href?<Link key={g.label} href={g.href} className={'mx-top'+(path===g.href?' is-on':'')}>{g.label}</Link>:
          <div key={g.label} className={'mx-group'+(open===g.label?' is-open':'')} onMouseEnter={()=>setOpen(g.label)} onMouseLeave={()=>setOpen(null)}>
            <button className="mx-top" aria-expanded={open===g.label} onClick={()=>setOpen(open===g.label?null:g.label)}>{g.label}<i aria-hidden="true"/></button>
            <div className="mx-drop" hidden={open!==g.label}>{g.items.map(it=><Link key={it.href} href={it.href} className="mx-dropItem">
              {it.code?<b className={'mx-chip t-'+it.tone}>{it.code}</b>:<b className="mx-chip t-plain"/>}<span><strong>{it.name}</strong>{it.note&&<small>{it.note}</small>}</span></Link>)}</div>
          </div>)}
      </nav>
      <Link className="mx-btn mx-book" href="/book">Book training</Link>
      <button className="mx-burger" aria-label={sheet?'Close menu':'Open menu'} aria-expanded={sheet} onClick={()=>setSheet(!sheet)}><span/><span/></button>
    </div>
    <div className={'mx-sheet'+(sheet?' is-open':'')} hidden={!sheet}>
      {menu.map(g=><section key={g.label}><h2>{g.label}</h2>{(g.items||[{href:g.href,code:'MGMT',name:'Sports Management',tone:'management'}]).map(it=><Link key={it.href} href={it.href}>{it.code?<b className={'mx-chip t-'+it.tone}>{it.code}</b>:<b className="mx-chip t-plain"/>}<span>{it.name}</span></Link>)}</section>)}
      <Link className="mx-btn mx-sheetBook" href="/book">Book training</Link>
    </div>
  </header>
}

export function SiteFooter(){
  const cols=[['Leagues',[['/meb',"Member's Elite Basketball"],['/wda',"Women's Dunk Association"],['/atf','American Track & Field'],['/tournaments','Tournament registration']]],['Train',[['/training','Personal Training'],['/camps','Sports Camps'],['/memberships','Memberships'],['/athlete-hq','Athlete HQ'],['/book','Book training']]],['Business',[['/management','Sports Management'],['/recruiting-nil','Recruiting + NIL'],['/apply','Apply for management'],['/coaches','Coaches'],['/about','About']]],['Community',[['/playmakers','Playmakers Sports Association'],['/sole-exchange','Sole Exchange shoe drive']]]];
  return <footer className="mx-footer">
    <div className="mx-footTop">
      <div className="mx-footBrand"><img src="/me-logo.webp" alt="Member's Elite Sports Management" width="520" height="353"/><p>Train. Develop. Manage. Build.</p></div>
      {cols.map(([h,links])=><nav key={h} aria-label={h}><h2>{h}</h2>{links.map(([href,t])=><Link key={href} href={href}>{t}</Link>)}</nav>)}
    </div>
    <div className="mx-footSponsors"><span>Sponsored by</span>{sponsors.map(s=><b key={s.key} className={'mx-word w-'+s.key}>{s.name}{s.small&&<small>{s.small}</small>}</b>)}</div>
    <div className="mx-footBase"><small>© 2026 Member’s Elite. Atlanta, GA.</small><Link href="/apply">Partner with us</Link></div>
  </footer>
}

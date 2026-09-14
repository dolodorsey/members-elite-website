'use client';
import Link from 'next/link';
import {useState} from 'react';

const nav=[['Train','/programs'],['Basketball','/basketball'],['Football','/football'],['Camps','/camps'],['Management','/management'],['Athlete HQ','/athlete-hq'],['About','/about']];

export function SiteNav(){const [open,setOpen]=useState(false);return <>
<header className="siteNav"><Link href="/" className="brand"><span className="brandMark">ME</span><span><b>MEMBER’S ELITE</b><small>SPORTS MANAGEMENT</small></span></Link><nav>{nav.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav><Link className="bookBtn" href="/book">BOOK NOW</Link><button className="menuBtn" onClick={()=>setOpen(!open)} aria-label="Open menu">{open?'×':'☰'}</button></header>
<div className={'mobileNav '+(open?'open':'')}>{nav.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<Link href="/book" onClick={()=>setOpen(false)}>BOOK NOW</Link></div>
</>}

export function SiteFooter(){return <footer className="siteFooter"><div><div className="brand footerBrand"><span className="brandMark">ME</span><span><b>MEMBER’S ELITE</b><small>SPORTS MANAGEMENT</small></span></div><p>TRAIN. DEVELOP. MANAGE. BUILD.</p></div><div className="footerLinks"><Link href="/programs">Training</Link><Link href="/management">Management</Link><Link href="/recruiting-nil">Recruiting + NIL</Link><Link href="/book">Book</Link><Link href="/apply">Apply</Link></div><small>© 2026 Member’s Elite. All rights reserved.</small></footer>}

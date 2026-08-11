'use client';
import {useState} from 'react';
import Hero from '../components/Hero';
import {Mindset,Model,Services,Management,BrandNetwork,PipelineVision} from '../components/Sections';
import InquiryForm from '../components/InquiryForm';

export default function Home(){
 const [menu,setMenu]=useState(false);
 return <main>
  <header className="nav"><a className="logo" href="#top"><span className="me">M<span>E</span></span><b>MEMBER’S <i>ELITE</i></b><small>SPORTS MANAGEMENT</small></a>
   <nav>{['model','services','network','pipeline'].map(x=><a key={x} href={'#'+x}>{x}</a>)}</nav><a className="navCta" href="#apply">APPLY</a><button className="hamb" onClick={()=>setMenu(!menu)} aria-label="Menu"><i/><i/></button>
  </header>
  <div className={'mobile '+(menu?'open':'')}>{['model','services','network','pipeline','apply'].map(x=><a key={x} href={'#'+x} onClick={()=>setMenu(false)}>{x}</a>)}</div>
  <Hero/><Mindset/><Model/><Services/><Management/><BrandNetwork/><PipelineVision/><InquiryForm/>
  <footer><div className="wrap foot"><a className="logo" href="#top"><span className="me">M<span>E</span></span><b>MEMBER’S <i>ELITE</i></b><small>SPORTS MANAGEMENT</small></a><p>ATHLETE MANAGEMENT · BRAND DEVELOPMENT · BUSINESS OWNERSHIP</p><div>© 2026 MEMBERS ELITE<br/><a href="#top">BACK TO TOP ↑</a></div></div></footer>
 </main>
}

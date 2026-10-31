import Link from 'next/link';
import Art from './Art';
import {divisions,fixtures,fmtDate,sponsors,ticketUrl,upcoming,STORAGE} from '../lib/site';

export function Fixtures({filter,title='Next up',intro}){
  const list=upcoming(filter?fixtures.filter(f=>filter.includes(f.division)||(filter.includes('wda')&&f.title==='Championship Sunday')):fixtures);
  return <section className="mx-fixtures" id="events">
    <div className="mx-wrap">
      <div className="mx-headRow"><h2>{title}</h2>{intro&&<p>{intro}</p>}</div>
      {list.length?<ol className="mx-fixList">{list.map(f=>{const d=fmtDate(f.date),div=divisions[f.division];return <li key={f.id}>
        <time dateTime={f.date}><b>{d.num}</b><span>{d.mon}</span></time>
        <div className="mx-fixMain"><strong>{f.title}</strong><span>{f.sub} · {f.day} {f.time} · Atlanta</span></div>
        <b className={'mx-chip t-'+div.tone}>{div.code}</b>
        <a className="mx-btn mx-btnGhost" href={ticketUrl(f.id)} target="_blank" rel="noopener">Get tickets</a>
      </li>})}</ol>:<p className="mx-empty">New dates are being set. Check back soon or follow along on Eventbrite.</p>}
    </div>
  </section>
}

export function SponsorBand(){
  return <section className="mx-sponsors" aria-labelledby="sponsor-h">
    <div className="mx-wrap mx-sponsorGrid">
      <div className="mx-sponsorCopy"><h2 id="sponsor-h">Sponsored by</h2><p>The brands behind every league night, camp and community drive.</p><Link className="mx-textLink" href="/apply">Become a partner</Link></div>
      <ul>{sponsors.map(s=>{const inner=<><b className={'mx-word w-'+s.key}>{s.name}{s.small&&<small>{s.small}</small>}</b><span>{s.what}</span></>;return <li key={s.key}>{s.href?<a href={s.href} target="_blank" rel="noopener">{inner}</a>:<div>{inner}</div>}</li>})}</ul>
    </div>
    <figure className="mx-sponsorPhoto"><img src={`${STORAGE}/infinity_water/website/all-bottles.jpg`} alt="Infinity Water bottles in silver, blue, teal, gold, bronze and black" loading="lazy"/></figure>
  </section>
}

export function DivisionTile({k,big}){
  const d=divisions[k];
  return <Link href={d.href} className={'mx-tile t-'+d.tone+(big?' is-big':'')}>
    <Art kind={d.art}/>
    <div className="mx-tileBody"><span className="mx-code">{d.code}</span><h3>{d.name}</h3><p>{d.line}</p></div>
  </Link>
}

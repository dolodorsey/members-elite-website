import Link from 'next/link';
import Hero from './Hero';
import Art from './Art';
import DarkGraphicFeature from './DarkGraphicFeature';
import {DivisionTile,Fixtures,SponsorBand} from './Blocks';
import {divisions,groups,memberships,STORAGE} from '../lib/site';

export default function HomeV2(){return <>
<Hero/>

<section className="mx-intro">
  <div className="mx-wrap mx-introGrid">
    <div className="mx-introCopy">
      <h1>Built for more.</h1>
      <p>Member’s Elite is home to three leagues, year-round personal training and camps, athlete management, and two community programs. One standard across all of it.</p>
      <div className="mx-ctaRow"><Link className="mx-btn" href="/book">Book training</Link><a className="mx-btn mx-btnGhost" href="#events">See upcoming games</a></div>
    </div>
    <nav className="mx-index" aria-label="Member's Elite divisions">
      {groups.map(g=><div key={g.key} className="mx-indexGroup"><h2>{g.label}</h2>{g.items.map(k=>{const d=divisions[k];return <Link key={k} href={d.href} className={'mx-indexRow t-'+d.tone}><b className={'mx-chip t-'+d.tone}>{d.code}</b><span>{d.name}</span><small>{d.short}</small></Link>})}</div>)}
    </nav>
  </div>
</section>

<section className="mx-leagues" aria-labelledby="leagues-h">
  <div className="mx-wrap"><div className="mx-headRow"><h2 id="leagues-h">Three leagues. One house.</h2><p>Men’s basketball, women’s above-the-rim competition, and professional track. Each with its own floor, its own fans and its own season.</p></div></div>
  <div className="mx-leagueRow">{['meb','wda','atf'].map(k=><DivisionTile key={k} k={k} big/>)}</div>
</section>

<Fixtures intro="Kings of the Court, the Women’s Dunk League and Championship Sunday. Team entries play for a $10K prize."/>

<section className="mx-train" aria-labelledby="train-h">
  <div className="mx-wrap">
    <div className="mx-headRow"><h2 id="train-h">Train with us.</h2><p>Every athlete starts with a $75 assessment. From there: private sessions, small groups, camps or a monthly membership.</p></div>
    <div className="mx-trainGrid">
      <Link href="/training" className="mx-trainCard t-training"><Art kind="turf"/><div className="mx-tileBody"><span className="mx-code">PT</span><h3>Personal Training</h3><p>Basketball with Coach Tae, an active international pro. Football with Coach Justin. Speed and agility for both.</p><dl><div><dt>Private session</dt><dd>$125</dd></div><div><dt>Small group</dt><dd>$40</dd></div><div><dt>Shooting Lab</dt><dd>$50</dd></div></dl></div></Link>
      <Link href="/camps" className="mx-trainCard t-camps"><Art kind="cones"/><div className="mx-tileBody"><span className="mx-code">CMP</span><h3>Sports Camps</h3><p>Saturday skills, one- to three-day academies, combine prep and team sessions for schools and clubs.</p><dl><div><dt>Saturday Skills</dt><dd>$75</dd></div><div><dt>One-Day Elite</dt><dd>$149</dd></div><div><dt>Three-Day Academy</dt><dd>$349</dd></div></dl></div></Link>
    </div>
    <div className="mx-memberStrip">
      <h3>Memberships</h3>
      <ul>{memberships.map(([n,p,d])=><li key={n}><b>{n}</b><span><strong>{p}</strong>/mo</span><small>{d}</small></li>)}</ul>
      <Link className="mx-textLink" href="/memberships">Compare plans</Link>
    </div>
  </div>
</section>

<DarkGraphicFeature/>

<section className="mx-community" aria-labelledby="community-h">
  <div className="mx-wrap">
    <div className="mx-headRow"><h2 id="community-h">Give back to the game.</h2><p>Our nonprofit and our shoe drive run alongside every league night and camp.</p></div>
    <div className="mx-commGrid">
      <Link href="/playmakers" className="mx-commCard t-playmakers"><Art kind="plays"/><div className="mx-tileBody"><span className="mx-code">PSA</span><h3>Playmakers Sports Association</h3><p>A sports-based nonprofit getting more young athletes into organized play. Coach, volunteer, donate gear or sponsor a season.</p><span className="mx-textLink">Get involved</span></div></Link>
      <Link href="/sole-exchange" className="mx-commCard t-sole">
        <div className="mx-soleTop"><img className="mx-soleLogo" src="/sole-exchange-logo.png" alt="The Sole Exchange" width="432" height="350"/></div>
        <img className="mx-solePhoto" src={`${STORAGE}/motion/sole-exchange-ani.jpg`} alt="White Air Force 1 sneakers being cleaned on a conveyor" loading="lazy"/>
        <div className="mx-tileBody"><h3>Bring a pair to any game.</h3><p>New or gently worn sneakers dropped at Member’s Elite events are cleaned and matched with people who need them, at no cost to them.</p><span className="mx-textLink">How the drive works</span></div>
      </Link>
    </div>
  </div>
</section>

<SponsorBand/>

<section className="mx-final">
  <div className="mx-wrap mx-finalIn"><h2>Ready to work?</h2><div className="mx-ctaRow"><Link className="mx-btn" href="/book">Book training</Link><Link className="mx-btn mx-btnGhost" href="/apply">Apply for management</Link></div></div>
</section>
</>}

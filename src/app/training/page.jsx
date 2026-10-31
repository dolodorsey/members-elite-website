import Link from 'next/link';
import DivisionShell,{DivisionHero,Section,PriceList,Related} from '../../components/DivisionPage';
import {training,memberships} from '../../lib/site';

export const metadata={title:"Personal Training | Member's Elite",description:'Private and small-group basketball, football, speed and agility training in Atlanta with Coach Tae and Coach Justin.'};

export default function Page(){return <DivisionShell>
<DivisionHero k="training" title="The work, measured." lead="Private and small-group development for basketball and football. Every athlete starts with an assessment, gets a plan, and tracks progress in Athlete HQ." ctas={[['Book an assessment','/book'],['See memberships','/memberships',true]]}/>
<Section title="Pick your coach">
  <div className="mx-coachRow">
    <Link href="/basketball" className="mx-coach t-meb"><span className="mx-code">Basketball</span><h3>Coach Tae</h3><p>Active international professional. Ball handling, shooting, scoring, footwork and decision-making.</p><span className="mx-textLink">Basketball programs</span></Link>
    <Link href="/football" className="mx-coach t-training"><span className="mx-code">Football</span><h3>Coach Justin</h3><p>Position work, speed, agility and combine preparation for game day.</p><span className="mx-textLink">Football programs</span></Link>
  </div>
</Section>
<Section title="Sessions and pricing" intro="Per-session prices. Packs and memberships bring the cost down." tone="mx-tinted">
  <PriceList items={training}/>
  <div className="mx-ctaRow mx-left"><Link className="mx-btn" href="/book">Book a session</Link></div>
</Section>
<Section title="Train every week" intro="Memberships combine group and private sessions with monthly assessments.">
  <PriceList items={memberships.map(([n,p,d])=>[n,p+'/mo',d])}/>
  <div className="mx-ctaRow mx-left"><Link className="mx-btn mx-btnGhost" href="/memberships">Compare memberships</Link></div>
</Section>
<Related keys={['camps','meb','wda','management']}/>
</DivisionShell>}

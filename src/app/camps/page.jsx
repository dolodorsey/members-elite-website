import Link from 'next/link';
import DivisionShell,{DivisionHero,Section,PriceList,Points,Related} from '../../components/DivisionPage';
import {camps} from '../../lib/site';

export const metadata={title:"Sports Camps | Member's Elite",description:'Saturday skills camps, multi-day elite academies, combine prep and team training in Atlanta.'};

export default function Page(){return <DivisionShell>
<DivisionHero k="camps" title="A full day of getting better." lead="Skills camps, multi-day academies and combine prep for basketball and football athletes, plus team sessions for schools, AAU programs and clubs." ctas={[['Reserve a spot','/book'],['Book team training','/book',true]]}/>
<Section title="Camps and pricing">
  <PriceList items={camps}/>
  <div className="mx-ctaRow mx-left"><Link className="mx-btn" href="/book">Reserve a spot</Link></div>
</Section>
<Section title="Right work, right stage" intro="Athletes train with others at their age and level." tone="mx-tinted">
  <Points items={[["Ages 7–10","Fundamentals, movement, confidence and coordination."],["Ages 11–13","Skill development plus competitive concepts."],["Ages 14–18","Varsity, AAU, college and elite preparation."],["18 and up","College athletes, pros, overseas players and serious prospects."]]}/>
</Section>
<Related keys={['training','playmakers','meb','wda']}/>
</DivisionShell>}

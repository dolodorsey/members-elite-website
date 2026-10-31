import Link from 'next/link';
import DivisionShell,{DivisionHero,Section,Points,Related} from '../../components/DivisionPage';

export const metadata={title:"Sports Management | Member's Elite",description:'Career, brand, partnerships, media and business development built around the athlete.'};

export default function Page(){return <DivisionShell>
<DivisionHero k="management" title="Build beyond the game." lead="Member’s Elite can lead the whole team around an athlete, or make the team they already have stronger. Career planning, brand, partnerships, media and business, while the lights are on." ctas={[['Apply for management','/apply'],['Recruiting + NIL','/recruiting-nil',true]]}/>
<Section title="What we handle">
  <Points items={[["Athlete management","Career planning, introductions and long-term strategy."],["Brand development","Identity, audience, visual systems and commercial positioning."],["Endorsements + partnerships","Brand deals, ambassadorships and licensing."],["Media + content","Photoshoots, digital series, podcasts and visibility."],["Business development","Products, investments, ownership and joint ventures."],["Events + experiences","Camps, clinics, activations and appearances."]]}/>
</Section>
<Section title="Exclusive or alongside your team" tone="mx-tinted">
  <div className="mx-twoCol"><div><h3>Exclusive</h3><p>We run the full ecosystem: management, brand strategy, partnership sourcing, content and appearances, business development and long-term planning.</p></div><div><h3>Non-exclusive</h3><p>We work with the agent and advisers already in place, adding brand and sponsorship support, events, content and business introductions.</p></div></div>
  <p className="mx-legal">Professional contract representation, where offered, is subject to applicable licensing, certification, league, association, state-law and NIL requirements. Training, development, recruiting support and brand services operate independently. Submitting an application does not create an agent-client relationship.</p>
  <div className="mx-ctaRow mx-left"><Link className="mx-btn" href="/apply">Apply for management</Link></div>
</Section>
<Related keys={['atf','meb','wda','training']}/>
</DivisionShell>}

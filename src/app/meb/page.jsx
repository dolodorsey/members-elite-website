import DivisionShell,{DivisionHero,Section,Points,Related} from '../../components/DivisionPage';
import {Fixtures} from '../../components/Blocks';
import {TOURNAMENT_INTAKE} from '../../lib/site';

export const metadata={title:"Member's Elite Basketball (MEB) | Member's Elite",description:"Men's league nights, multi-court tournaments and the Kings of the Court 5v5 series in Atlanta."};

export const revalidate=3600;
export default function Page(){return <DivisionShell>
<DivisionHero k="meb" title="Atlanta’s run. Our floor." lead="Member’s Elite Basketball is our men’s competition: Kings of the Court 5v5 nights, same-day 3v3, 2v2 and 1v1 brackets, and Championship Sunday. Live DJ, a loud crowd, and a $10K prize for the team that finishes on top." ctas={[['Enter a team',TOURNAMENT_INTAKE+'mens-5v5'],['Get tickets','#events',true]]}/>
<Fixtures filter={['meb']} title="On the schedule" intro="Tickets are on Eventbrite. Prices step up as game day gets closer."/>
<Section title="Ways to play" intro="Bring a full roster, run a bracket, or come to train.">
  <Points items={[["Kings of the Court","Men’s 5v5 league nights. Team entry is $1,500, and teams play for a $10K prize."],["Multi-court brackets","3v3, 2v2 and 1v1 on the same day. Register for one bracket or several on a single form."],["Youth divisions","A parent or guardian submits interest. Age divisions are confirmed before acceptance."],["Train with Coach Tae","Private sessions, Shooting Lab and Pro Experience with an active international professional."]]}/>
  <div className="mx-ctaRow mx-left"><a className="mx-btn" href={TOURNAMENT_INTAKE+'mens-combo'} target="_blank" rel="noopener">Register for 3v3, 2v2 or 1v1</a><a className="mx-btn mx-btnGhost" href="/tournaments">All tournament options</a><a className="mx-btn mx-btnGhost" href="/basketball">Basketball training</a></div>
</Section>
<Related keys={['wda','atf','training','sole-exchange']}/>
</DivisionShell>}

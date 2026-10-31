import DivisionShell,{DivisionHero,Section,Points,Related} from '../../components/DivisionPage';
import {Fixtures} from '../../components/Blocks';
import InterestForm from '../../components/InterestForm';

export const metadata={title:"Women's Dunk Association (WDA) | Member's Elite",description:"Above-the-rim women's competition in Atlanta: dunk league nights and Championship Sunday finals."};

export const revalidate=3600;
export default function Page(){return <DivisionShell>
<DivisionHero k="wda" title="Above the rim." lead="The Women’s Dunk Association puts the best athletes in women’s basketball where they belong: in the air, in front of a crowd. League nights, team play and Championship Sunday finals, with a $10K prize on the line." ctas={[['Apply to compete','#apply'],['Get tickets','#events',true]]}/>
<Fixtures filter={['wda']} title="On the schedule" intro="Dunk league nights on Saturdays, finals on Championship Sunday. Tickets are on Eventbrite."/>
<Section title="How it works">
  <Points items={[["Dunk nights","Live competition with a DJ and a courtside crowd."],["Team entries","Enter a team for $1,500. Teams play for a $10K prize."],["Championship Sunday","WDA and MEB finals together on the Sunday of each league weekend."],["Train for it","Vertical, approach and finishing work through Member’s Elite personal training."]]}/>
</Section>
<Section id="apply" tone="mx-tinted" title="Apply to compete" intro="Athletes, teams, coaches and partners. Tell us who you are and we’ll follow up by email.">
  <InterestForm division="WDA" title="WDA application" button="Send application" options={[["Compete as an athlete","general"],["Enter a team","general"],["Sponsor the league","brand_partner"],["Cover it as media","media"]]} note="Applying doesn’t guarantee a roster spot or a competition date."/>
</Section>
<Related keys={['meb','atf','training','playmakers']}/>
</DivisionShell>}

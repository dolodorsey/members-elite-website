import DivisionShell,{DivisionHero,Section,Points,Related} from '../../components/DivisionPage';
import InterestForm from '../../components/InterestForm';

export const metadata={title:"American Track & Field (ATF) | Member's Elite",description:'American Track & Field is a professional track league launching in 2027.'};

export default function Page(){return <DivisionShell>
<DivisionHero k="atf" title="Track, as a league." lead="American Track & Field is a professional track league launching in 2027. The goal is simple: give track what the NBA and NFL gave basketball and football." ctas={[['Visit americantnf.com','https://americantnf.com'],['Get on the list','#apply',true]]} kicker="American Track & Field · Launching 2027"/>
<Section title="What’s coming">
  <Points items={[["A league, not a meet","A season fans can follow from opening night to the finals."],["Launching in 2027","Athletes, venues and partners who join now help shape the first season."],["Part of Member’s Elite","The same house as MEB, WDA, our training and our management team."],["Full story at americantnf.com","League news and updates live on the ATF site."]]}/>
</Section>
<Section id="apply" tone="mx-tinted" title="Get on the list" intro="Athletes, coaches, venues and partners can register interest now. We’ll reach out as the 2027 season comes together.">
  <InterestForm division="ATF" title="ATF interest" button="Join the list" options={[["Compete as an athlete","general"],["Coach or join operations","general"],["Host a meet at my venue","general"],["Partner or sponsor","brand_partner"],["Cover it as media","media"]]}/>
</Section>
<Related keys={['meb','wda','training','management']}/>
</DivisionShell>}

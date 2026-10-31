import DivisionShell,{DivisionHero,Section,Points,Related} from '../../components/DivisionPage';
import InterestForm from '../../components/InterestForm';

export const metadata={title:"Playmakers Sports Association | Member's Elite",description:'Playmakers Sports Association is a sports-based nonprofit getting more young athletes into organized play.'};

export default function Page(){return <DivisionShell>
<DivisionHero k="playmakers" title="Everybody gets in the game." lead="Playmakers Sports Association is the nonprofit side of Member’s Elite: a sports-based organization focused on getting more young athletes into organized play." ctas={[['Get involved','#help'],['Donate gear or shoes','/sole-exchange',true]]} kicker="Playmakers Sports Association · Nonprofit"/>
<Section title="Ways to help">
  <Points items={[["Coach or volunteer","Give time at practices, clinics and game days."],["Donate equipment","Balls, cones, uniforms and shoes. Sneakers go through Sole Exchange."],["Sponsor a season","Cover the cost of a young athlete’s training or camp."],["Open your doors","Schools, gyms and community centers can host programs."]]}/>
</Section>
<Section id="help" tone="mx-tinted" title="Get involved" intro="Coaches, volunteers, donors, schools and companies all have a role. Tell us how you want to help.">
  <InterestForm division="PSA" title="Help Playmakers" button="Send" options={[["Coach or volunteer","general"],["Donate equipment","general"],["Sponsor an athlete’s season","brand_partner"],["Partner as a school or organization","general"],["Bring a camp or clinic to my community","camp_clinic"]]}/>
</Section>
<Related keys={['sole-exchange','camps','training','wda']}/>
</DivisionShell>}

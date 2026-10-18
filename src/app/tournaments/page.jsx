import { SiteNav, SiteFooter } from '../../components/SiteChrome';

export const metadata = {
  title: "Member's Elite | Basketball Tournament Registration",
  description: "Men's 5v5, multi-court 3v3/2v2/1v1, women's and youth tournament applications."
};

const intake = "https://forms.thekollectivehospitality.com/f/members-elite/";
const competitions = [
  { tag:"MEN'S", title:"5V5 BASKETBALL", copy:"Full-team tournament registration. Submit a team captain and preliminary roster details.", role:"mens-5v5", action:"REGISTER 5V5 TEAM" },
  { tag:"MEN'S · SAME DAY", title:"3V3 + 2V2 + 1V1", copy:"One tournament day, multiple courts. Register for one or more brackets on a single form.", role:"mens-combo", action:"REGISTER FOR 3V3 / 2V2 / 1V1", featured:true },
  { tag:"YOUTH", title:"YOUTH TOURNAMENTS", copy:"A parent or legal guardian submits the inquiry. Eligibility and age divisions are confirmed before acceptance.", role:"youth", action:"YOUTH INTEREST" },
  { tag:"WOMEN'S", title:"WOMEN'S BASKETBALL", copy:"Team and individual applications for future women's competition.", role:"womens", action:"WOMEN'S REGISTRATION" }
];
const operations=[
  ["SPONSORS", "Sponsor", "sponsor"],
  ["VENUE PARTNERS", "Multi-Court Facility", "venue-partner"],
  ["REFEREES & OFFICIALS", "Join Game Operations", "officials"],
  ["VENDORS", "Event Activation", "vendor"],
  ["MEDIA", "Media & Broadcast", "media"],
  ["TEAM CAPTAINS", "Captain / Representative", "team-captain"]
];
const type={base:{fontFamily:"Inter,system-ui,-apple-system,sans-serif",color:"#151515",background:"#F4F1EC",minHeight:"100vh"},inner:{width:"min(1180px,calc(100% - 36px))",margin:"0 auto"},tag:{fontSize:11,fontWeight:900,letterSpacing:2.3,textTransform:"uppercase",color:"#B88A45"},link:{display:"inline-flex",alignItems:"center",justifyContent:"center",minHeight:48,padding:"12px 17px",fontSize:12,letterSpacing:1.2,fontWeight:900,textDecoration:"none",borderRadius:8,background:"#C8A15A",color:"#101010"}};
export default function TournamentPage(){
return <main style={type.base}><SiteNav/>
<section style={{background:"#111216",color:"#FAF7F0",padding:"clamp(55px,9vw,110px) 0"}}>
  <div style={type.inner}>
    <p style={type.tag}>MEMBER'S ELITE · SPORTS DIVISION</p>
    <h1 style={{fontSize:"clamp(40px,7vw,88px)",maxWidth:920,lineHeight:.97,letterSpacing:-2.2,margin:"18px 0",fontWeight:950}}>THE NEXT LEVEL IS <span style={{color:"#D7A952"}}>COMPETITION.</span></h1>
    <p style={{fontSize:17,lineHeight:1.7,color:"#D0D1D4",maxWidth:660}}>Basketball tournaments built for serious competition, organized brackets, multiple courts and a premium game-day experience.</p>
    <a href="#register" style={type.link}>CHOOSE A TOURNAMENT →</a>
    <p style={{fontSize:12,color:"#AFAFB6",marginTop:16}}>Interest submission does not guarantee acceptance, a confirmed date, or a paid reservation.</p>
  </div>
</section>
<section id="register" style={{padding:"clamp(42px,6vw,78px) 0"}}><div style={type.inner}>
  <p style={type.tag}>CHOOSE YOUR DIVISION</p>
  <h2 style={{fontSize:"clamp(26px,4vw,44px)",letterSpacing:-1.2,margin:"5px 0 28px"}}>REGISTER YOUR INTEREST.</h2>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,265px),1fr))",gap:15}}>
    {competitions.map(c=><article key={c.role} style={{padding:"25px 23px",borderRadius:15,background:c.featured?"#1C2431":"#FFFFFF",color:c.featured?"#F8F8F8":"#161616",border:"1px solid #DFD9CF",display:"flex",flexDirection:"column",minHeight:290,boxShadow:"0 7px 25px rgba(40,30,16,.05)"}}>
      <p style={{...type.tag,color:c.featured?"#DBB169":"#97733E",marginTop:0}}>{c.tag}</p>
      <h3 style={{fontSize:24,letterSpacing:-.8,margin:"0 0 12px",lineHeight:1.1}}>{c.title}</h3>
      <p style={{fontSize:14,lineHeight:1.55,color:c.featured?"#CFD3D9":"#565A62",margin:"0 0 25px"}}>{c.copy}</p>
      <div style={{marginTop:"auto"}}><a href={intake+c.role} style={{...type.link,width:"100%"}}>{c.action} →</a></div>
    </article>)}
  </div>
</div></section>
<section style={{background:"#FFFFFF",padding:"55px 0 70px"}}><div style={type.inner}>
  <p style={type.tag}>GET INVOLVED</p><h2 style={{fontSize:"clamp(27px,3.5vw,44px)",margin:"7px 0 22px",letterSpacing:-1}}>BUILD THE TOURNAMENT.</h2>
  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,220px),1fr))",gap:12}}>
    {operations.map(([label,title,role])=><a href={intake+role} key={role} style={{textDecoration:"none",color:"#1F2933",border:"1px solid #DED9D1",borderRadius:12,padding:"20px",background:"#FBFAF7"}}>
      <div style={{...type.tag,fontSize:10}}>{label}</div><div style={{fontSize:17,fontWeight:850,margin:"9px 0"}}>{title} →</div>
    </a>)}
  </div>
</div></section>
<SiteFooter/></main>;
}

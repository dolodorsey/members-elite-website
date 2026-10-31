import DivisionShell,{Section,Points,Related} from '../../components/DivisionPage';
import {Fixtures} from '../../components/Blocks';
import {STORAGE} from '../../lib/site';

export const metadata={title:"Sole Exchange Shoe Drive | Member's Elite",description:"Bring new or gently worn sneakers to any Member's Elite event. Every pair is cleaned and matched with someone who needs it, at no cost to them."};

export const revalidate=3600;
export default function Page(){return <DivisionShell>
<section className="mx-soleHero">
  <div className="mx-soleHeroCopy">
    <img src="/sole-exchange-logo.png" alt="The Sole Exchange" width="432" height="350" className="mx-soleHeroLogo"/>
    <h1>Bring a pair. Change a stride.</h1>
    <p className="mx-lead">The Sole Exchange shoe drive comes to Member’s Elite events. Drop off new or gently worn sneakers and they’re cleaned, sized and matched with athletes and community members who need them, at no cost to them.</p>
    <div className="mx-ctaRow"><a className="mx-btn" href="#events">Find a drop-off</a><a className="mx-btn mx-btnGhost" href="https://soleexchangeworldwide.com/" target="_blank" rel="noopener">Request a pair</a></div>
  </div>
  <figure><img src={`${STORAGE}/motion/sole-exchange-ani.jpg`} alt="White Air Force 1 sneakers moving through a cleaning line"/></figure>
</section>
<Section title="How the drive works">
  <ol className="mx-steps">
    <li><strong>Drop off</strong><p>Bring sneakers to the Sole Exchange table at any league night, camp or Championship Sunday.</p></li>
    <li><strong>Clean and sort</strong><p>Volunteers clean, photograph and catalog each pair by size and condition.</p></li>
    <li><strong>Match</strong><p>Requests are matched by size, urgency and use: school, work or sport.</p></li>
    <li><strong>Hand off</strong><p>Pairs go out through local drop-offs and partner organizations. No resale, no bidding.</p></li>
  </ol>
</Section>
<Section title="What to bring" tone="mx-tinted">
  <Points items={[["Sneakers in any size","Kids’ through adult. Basketball, running and everyday pairs all help."],["New or gently worn","Clean enough to wear tomorrow. No holes through the sole."],["Tied or banded together","Keeps pairs together while they’re sorted."],["Can’t make an event?","Donate or request a pair through soleexchangeworldwide.com."]]}/>
</Section>
<Fixtures title="Drop-off at these games" intro="Look for the Sole Exchange table at the door."/>
<Related keys={['playmakers','meb','wda','camps']}/>
</DivisionShell>}

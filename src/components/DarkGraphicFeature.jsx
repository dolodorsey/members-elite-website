import Link from 'next/link';
import Art from './Art';

// Management interruption: the one deliberately dark moment on the homepage.
export default function DarkGraphicFeature(){return <section className="mx-mgmtBreak">
  <Art kind="mgmt"/>
  <div className="mx-wrap mx-mgmtIn">
    <div>
      <p className="mx-dKicker"><b className="mx-chip t-management">MGMT</b>Sports Management</p>
      <h2>The athlete is more than an athlete.</h2>
      <p className="mx-lead">Career, brand, media, business and ownership. We can lead the whole team around an athlete, or make the team they already have stronger.</p>
      <div className="mx-ctaRow"><Link className="mx-btn" href="/management">Explore management</Link><Link className="mx-btn mx-btnGhost" href="/apply">Apply</Link></div>
    </div>
    <img src="/me-logo.webp" alt="" width="520" height="353" className="mx-mgmtLogo"/>
  </div>
</section>}

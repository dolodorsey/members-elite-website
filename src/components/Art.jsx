// Sport-surface artwork for each division. Pure SVG: decorative, aria-hidden.
const box = { viewBox: '0 0 600 700', preserveAspectRatio: 'xMidYMid slice', 'aria-hidden': true, focusable: 'false', className: 'art' };

function Court() {
  return <svg {...box}>
    <defs>
      <pattern id="planks" width="46" height="700" patternUnits="userSpaceOnUse">
        <rect width="46" height="700" fill="#c98b52" />
        <rect x="23" width="23" height="700" fill="#c2834a" />
        <path d="M0 0V700M23 0V700" stroke="#a96d38" strokeOpacity=".35" />
        <path d="M0 210H23M23 470H46M0 610H23" stroke="#a96d38" strokeOpacity=".4" />
      </pattern>
    </defs>
    <rect width="600" height="700" fill="url(#planks)" />
    <g fill="none" stroke="#fff" strokeOpacity=".82" strokeWidth="6">
      <rect x="190" y="-10" width="220" height="330" fill="#1b120a" fillOpacity=".18" />
      <circle cx="300" cy="320" r="110" />
      <path d="M40 -10V180A260 260 0 0 0 560 180V-10" />
      <path d="M0 700H600" />
      <circle cx="300" cy="700" r="90" />
    </g>
  </svg>;
}

function Rim() {
  return <svg {...box}>
    <rect width="600" height="700" fill="#45267a" />
    <path d="M-40 640C120 260 300 110 470 170" fill="none" stroke="#e8dcff" strokeOpacity=".35" strokeWidth="4" strokeDasharray="2 18" strokeLinecap="round" />
    <g fill="none" stroke="#fff" strokeWidth="6">
      <rect x="250" y="70" width="300" height="190" strokeOpacity=".9" />
      <rect x="350" y="150" width="100" height="80" strokeOpacity=".9" />
    </g>
    <ellipse cx="400" cy="262" rx="70" ry="14" fill="none" stroke="#f0a43a" strokeWidth="8" />
    <g stroke="#fff" strokeOpacity=".7" strokeWidth="2.5">
      <path d="M332 266L352 360M352 268L368 362M376 270L386 364M400 270L400 364M424 270L414 364M448 268L432 362M468 266L448 360" />
      <path d="M346 300H454M352 332H448" />
    </g>
    <circle cx="470" cy="170" r="34" fill="#f0a43a" />
    <path d="M438 165C455 174 485 174 502 165M470 136V204" stroke="#45267a" strokeWidth="3" fill="none" />
  </svg>;
}

function Track() {
  const lanes = Array.from({ length: 9 }, (_, i) => 120 + i * 58);
  return <svg {...box}>
    <rect width="600" height="700" fill="#b03a2b" />
    <g fill="none" stroke="#fff" strokeOpacity=".85" strokeWidth="4">
      {lanes.map(r => <path key={r} d={`M${600 - r} 760V420A${r} ${r} 0 0 1 ${600 + r} 420`} transform="translate(-40 0)" />)}
    </g>
    <g fill="#fff" fillOpacity=".9" fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="34" textAnchor="middle">
      {lanes.slice(0, 8).map((r, i) => <text key={r} x={560 - r - 29} y="680">{i + 1}</text>)}
    </g>
  </svg>;
}

function Turf() {
  return <svg {...box}>
    <defs>
      <pattern id="mow" width="600" height="140" patternUnits="userSpaceOnUse">
        <rect width="600" height="70" fill="#2f7b42" /><rect y="70" width="600" height="70" fill="#2a7140" />
      </pattern>
    </defs>
    <rect width="600" height="700" fill="url(#mow)" />
    <g stroke="#fff" strokeOpacity=".8" strokeWidth="5">
      {[70, 210, 350, 490, 630].map(y => <path key={y} d={`M0 ${y}H600`} />)}
      {[140, 280, 420, 560].map(y => <g key={y}><path d={`M210 ${y - 8}V${y + 8}M390 ${y - 8}V${y + 8}`} /></g>)}
    </g>
    <g fill="#fff" fillOpacity=".55" fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="64">
      <text x="40" y="232">3 0</text><text x="470" y="232">3 0</text>
    </g>
  </svg>;
}

function Cones() {
  const cones = [];
  for (let r = 0; r < 6; r++) for (let c = 0; c < 6; c++) cones.push([60 + c * 100 + (r % 2) * 50, 90 + r * 110]);
  return <svg {...box}>
    <rect width="600" height="700" fill="#1f4e79" />
    <g stroke="#fff" strokeOpacity=".2" strokeWidth="2">{[0, 1, 2, 3, 4, 5].map(i => <path key={i} d={`M0 ${130 + i * 110}H600`} />)}</g>
    {cones.map(([x, y], i) => <g key={i} transform={`translate(${x} ${y})`}>
      <path d="M-18 22L0 -24L18 22Z" fill="#f08a2c" /><rect x="-24" y="20" width="48" height="7" rx="2" fill="#f08a2c" />
      <path d="M-9 0H9" stroke="#fff" strokeWidth="4" />
    </g>)}
  </svg>;
}

function Plays() {
  return <svg {...box}>
    <rect width="600" height="700" fill="#0f6f6a" />
    <g fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="3"><rect x="30" y="30" width="540" height="640" /><path d="M30 350H570" /><circle cx="300" cy="350" r="80" /></g>
    <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round">
      <circle cx="150" cy="520" r="26" /><circle cx="300" cy="560" r="26" /><circle cx="450" cy="520" r="26" />
      <path d="M150 490C150 380 220 300 250 240" strokeDasharray="1 16" /><path d="M300 530V330" /><path d="M450 490C440 400 400 330 340 290" />
      <path d="M236 252L250 240L262 258M288 344L300 330L312 344M352 278L340 290L358 300" />
    </g>
    <g stroke="#ffd36b" strokeWidth="7" strokeLinecap="round">
      <path d="M190 150L230 190M230 150L190 190M370 130L410 170M410 130L370 170M280 80L320 120M320 80L280 120" />
    </g>
  </svg>;
}

function Mgmt() {
  return <svg {...box}>
    <rect width="600" height="700" fill="#000" />
    <g fill="none" stroke="#e9b949" strokeOpacity=".5" strokeWidth="2">
      {[120, 200, 280, 360, 440].map(r => <circle key={r} cx="420" cy="300" r={r} />)}
    </g>
  </svg>;
}

export default function Art({ kind }) {
  switch (kind) {
    case 'court': return <Court />;
    case 'rim': return <Rim />;
    case 'track': return <Track />;
    case 'turf': return <Turf />;
    case 'cones': return <Cones />;
    case 'plays': return <Plays />;
    case 'mgmt': return <Mgmt />;
    case 'sole': return <img className="art" src="https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/motion/sole-exchange-ani.jpg" alt="" />;
    default: return null;
  }
}

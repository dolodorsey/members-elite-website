const VIDEO='https://dzlmtvodpyhetvektfuo.supabase.co/storage/v1/object/public/brand-graphics/kollective/animations/MEMBERS_ELITE_ANI.mp4';

// NON-NEGOTIABLE HOMEPAGE RULE:
// The animation canvas is visual-only. Never place headlines, body copy, CTAs,
// badges, labels, counters, captions, navigation copy, or other marketing text
// over the video. All conversion content starts after this section.
export default function Hero(){
 return <section className="hero heroVisualOnly" id="top" aria-label="Member's Elite cinematic introduction">
   <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
     <source src={VIDEO} type="video/mp4"/>
   </video>
 </section>
}

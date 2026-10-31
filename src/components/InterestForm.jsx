'use client';
import {useState} from 'react';
const URL='https://dzlmtvodpyhetvektfuo.supabase.co';
const KEY='sb_publishable_ekvoOK6QQ05dUZuWgzQfUw_2RgbWPFR';

// Posts to members_elite_inquiries (same table and policy as the management form).
// options: [label, inquiry_type] where inquiry_type is one of the table's allowed values.
export default function InterestForm({division,title,options,button='Send',note}){
  const blank={choice:options[0][0],full_name:'',email:'',phone:'',level_team:'',message:''};
  const [f,setF]=useState(blank),[state,setState]=useState('idle');
  const set=k=>e=>setF({...f,[k]:e.target.value});
  async function submit(e){e.preventDefault();setState('loading');const type=(options.find(o=>o[0]===f.choice)||options[0])[1];
    try{const r=await fetch(URL+'/rest/v1/members_elite_inquiries',{method:'POST',headers:{apikey:KEY,Authorization:'Bearer '+KEY,'Content-Type':'application/json',Prefer:'return=minimal'},
      body:JSON.stringify({inquiry_type:type,full_name:f.full_name,email:f.email,phone:f.phone,sport:division,level_team:f.level_team,message:`[${division}] ${f.choice}${f.message?' — '+f.message:''}`,source:'memberseliteatl.com',status:'new'})});
      if(!r.ok)throw Error();setState('sent');setF(blank)}catch{setState('error')}}
  if(state==='sent')return <div className="mx-form mx-formDone" role="status"><h3>Sent.</h3><p>The {division} team has your details and will reach out by email.</p><button className="mx-btn mx-btnGhost" onClick={()=>setState('idle')}>Send another</button></div>;
  return <form className="mx-form" onSubmit={submit}>
    <h3>{title}</h3>
    <label className="wide"><span>I want to</span><select value={f.choice} onChange={set('choice')}>{options.map(([l])=><option key={l}>{l}</option>)}</select></label>
    <label><span>Full name</span><input required value={f.full_name} onChange={set('full_name')} autoComplete="name"/></label>
    <label><span>Email</span><input required type="email" value={f.email} onChange={set('email')} autoComplete="email"/></label>
    <label><span>Phone</span><input type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel"/></label>
    <label><span>Team, school or organization</span><input value={f.level_team} onChange={set('level_team')}/></label>
    <label className="wide"><span>Anything we should know</span><textarea rows="3" value={f.message} onChange={set('message')}/></label>
    <button className="mx-btn wide" disabled={state==='loading'}>{state==='loading'?'Sending…':button}</button>
    {state==='error'&&<p className="mx-formErr wide" role="alert">That didn’t go through. Check your connection and try again.</p>}
    {note&&<small className="wide">{note}</small>}
  </form>
}

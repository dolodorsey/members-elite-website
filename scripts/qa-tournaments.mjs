import fs from 'node:fs';
import {chromium} from 'playwright';
fs.mkdirSync('qa-tournament-proof',{recursive:true});
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const results=[];
for(const viewport of [{name:'desktop',width:1440,height:900},{name:'mobile',width:390,height:844}]){
 const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1,reducedMotion:'reduce'});
 const page=await context.newPage();
 await page.route('**/*',req=>['GET','HEAD','OPTIONS'].includes(req.request().method())?req.continue():req.abort('blockedbyclient'));
 try{
  const resp=await page.goto('https://members-elite-website.vercel.app/tournaments',{waitUntil:'domcontentloaded',timeout:30000});
  await page.getByText('REGISTER YOUR INTEREST.').first().waitFor({state:'visible',timeout:15000});
  const links=await page.locator('a[href*="forms.thekollectivehospitality.com/f/members-elite/"]').evaluateAll(as=>as.map(a=>a.href));
  const expected=['mens-5v5','mens-combo','youth','womens','sponsor','venue-partner','officials','vendor','media','team-captain'];
  const missing=expected.filter(x=>!links.some(l=>l.endsWith('/'+x)));
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+6);
  const sameDay=await page.getByText('3V3 + 2V2 + 1V1').count();
  const floatingInstallButton=await page.getByRole('button',{name:"Get Member's Elite app"}).count();
  const pass=resp?.status()===200&&!missing.length&&!overflow&&sameDay>0&&floatingInstallButton===0;
  await page.screenshot({path:'qa-tournament-proof/tournaments-'+viewport.name+'.png',fullPage:true,animations:'disabled'});
  results.push({viewport:viewport.name,status:resp?.status(),links:links.length,missing,overflow,floatingInstallButton,sameDay:sameDay>0,pass});
 }catch(e){results.push({viewport:viewport.name,pass:false,error:String(e)})}finally{await context.close();}
}
await browser.close();
fs.writeFileSync('qa-tournament-proof/QA_RESULTS.json',JSON.stringify(results,null,2));
console.log(JSON.stringify(results));
if(results.some(x=>!x.pass))process.exitCode=1;

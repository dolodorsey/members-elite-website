import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
const out = process.env.EVIDENCE_DIR || 'evidence';
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const sites = [
 { brand: 'members-elite', base: 'https://members-elite-website.vercel.app', routes: ['/', '/basketball', '/football', '/book', '/memberships', '/athlete-hq'] },
 { brand: 'fenyx', base: 'https://fenyx-gules.vercel.app', routes: ['/'] }
];
const results = [];
for (const site of sites) {
 for (const [device, width, height] of [['desktop',1440,1000], ['mobile',390,844]]) {
  const ctx = await browser.newContext({ viewport:{width,height}, deviceScaleFactor:1, reducedMotion:'reduce' });
  for (const route of site.routes) {
   const page = await ctx.newPage();
   const errors=[];
   page.on('pageerror', e=>errors.push(e.message));
   const slug=route==='/'?'home':route.slice(1).replaceAll('/','-');
   const name=`${site.brand}-${device}-${slug}`;
   const row={brand:site.brand,device,route,url:site.base+route,checkedAt:new Date().toISOString(),errors};
   try {
    const response=await page.goto(row.url,{waitUntil:'domcontentloaded',timeout:25000});
    row.status=response?.status();
    await page.waitForTimeout(2000);
    await page.evaluate(async()=>{
     for(const img of document.images) img.loading='eager';
     await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,2500))]);
     for(const v of document.querySelectorAll('video')) {v.pause();if(v.readyState>=2)v.currentTime=Math.min(2,v.duration||2);}
    });
    await page.waitForTimeout(900);
    row.finalUrl=page.url();row.title=await page.title();
    row.layout=await page.evaluate(()=>({viewport:innerWidth,scrollWidth:document.documentElement.scrollWidth,overflow:document.documentElement.scrollWidth>innerWidth+1,images:[...document.images].map(i=>({src:i.currentSrc,loaded:i.complete&&i.naturalWidth>0})),backgrounds:[...document.querySelectorAll('*')].map(e=>getComputedStyle(e).backgroundImage).filter(x=>x.includes('url('))}));
    row.headings=await page.locator('h1,h2').allTextContents();
    row.links=await page.locator('a').evaluateAll(links=>links.map(a=>({text:a.textContent.trim(),href:a.getAttribute('href')})));
    row.visibleText=(await page.locator('body').innerText()).slice(0,20000);
    await page.screenshot({path:path.join(out,name+'.png'),fullPage:true,animations:'disabled',timeout:20000});
    if(device==='desktop')await fs.writeFile(path.join(out,name+'.html'),await page.content());
    if(site.brand==='members-elite'&&route==='/book'){
     const football=page.getByRole('button',{name:'FOOTBALL',exact:true});
     if(await football.count()) {await football.click();row.footballSwitchWorks=(await page.locator('body').innerText()).includes('Football');}
     row.paymentDeferred=row.visibleText.includes('SUBMIT REQUEST')||row.visibleText.includes('SELECT YOUR TRACK');
    }
   } catch(e){row.error=e.message;}
   results.push(row);await page.close();
   await fs.writeFile(path.join(out,'report.json'),JSON.stringify(results,null,2));
  }
  await ctx.close();
 }
}
await browser.close();
console.log(JSON.stringify(results.map(({brand,device,route,status,error,layout})=>({brand,device,route,status,error,overflow:layout?.overflow})),null,2));
// No form submissions, live charges, account creation, or fulfillment operations.

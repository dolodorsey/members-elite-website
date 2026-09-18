const VERSION='members-elite-pwa-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>k.startsWith('members-elite-pwa-')&&k!==VERSION).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
// Intentionally no blanket fetch cache: schedules, registration, profiles, payments and availability stay network-fresh.
self.addEventListener('push',event=>{
  let p={};try{p=event.data?.json()||{}}catch{p={body:event.data?.text()||''}}
  event.waitUntil(self.registration.showNotification(p.title||"Member's Elite",{body:p.body||'A new training update is available.',icon:p.icon||'/api/pwa-icon?size=192',badge:p.badge||'/api/pwa-icon?size=192',data:{url:p.url||'/'}}));
});
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const target=event.notification.data?.url||'/';
  event.waitUntil((async()=>{
    const wins=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    const existing=wins.find(c=>'focus'in c);
    if(existing){await existing.focus();if('navigate'in existing)await existing.navigate(target);return;}
    await self.clients.openWindow(target);
  })());
});
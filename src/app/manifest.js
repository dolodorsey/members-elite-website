export default function manifest(){return {
  id:'/',
  name:"Member's Elite",
  short_name:"Member's Elite",
  description:'Elite training, athlete development, camps, recruiting and sports management.',
  start_url:'/?source=pwa',
  scope:'/',
  display:'standalone',
  display_override:['window-controls-overlay','standalone'],
  orientation:'portrait-primary',
  background_color:'#060706',
  theme_color:'#f0c865',
  categories:['sports','education','lifestyle'],
  prefer_related_applications:false,
  icons:[
    {src:'/api/pwa-icon?size=192',sizes:'192x192',type:'image/png',purpose:'any'},
    {src:'/api/pwa-icon?size=512',sizes:'512x512',type:'image/png',purpose:'any'},
    {src:'/api/pwa-icon?size=512',sizes:'512x512',type:'image/png',purpose:'maskable'}
  ],
  shortcuts:[
    {name:'Training Programs',short_name:'Training',url:'/training?source=pwa-shortcut'},
    {name:'Camps',short_name:'Camps',url:'/camps?source=pwa-shortcut'}
  ]
}};
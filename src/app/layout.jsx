import './globals.css';
import InstallAppPrompt from '../components/InstallAppPrompt';
export const metadata={
  title:'Member’s Elite | Training, Development & Sports Management',
  description:'Elite basketball and football training, athlete development, camps, recruiting and sports management. Train. Develop. Manage. Build.',
  metadataBase:new URL('https://memberseliteatl.com'),
  applicationName:"Member's Elite",
  manifest:'/manifest.webmanifest',
  appleWebApp:{capable:true,title:"Member's Elite",statusBarStyle:'black-translucent'},
  icons:{
    icon:[
      {url:'/api/pwa-icon?size=192',sizes:'192x192',type:'image/png'},
      {url:'/api/pwa-icon?size=512',sizes:'512x512',type:'image/png'}
    ],
    apple:[{url:'/api/pwa-icon?size=180',sizes:'180x180',type:'image/png'}]
  },
  openGraph:{title:'Member’s Elite',description:'Elite training. Measurable development. Athlete management built around the full career.',url:'https://memberseliteatl.com',siteName:'Member’s Elite',type:'website'},
  robots:{index:true,follow:true}
};
export const viewport={themeColor:'#060706',colorScheme:'dark',width:'device-width',initialScale:1,viewportFit:'cover'};
export default function RootLayout({children}){return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800;1,900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body>{children}<InstallAppPrompt/></body></html>}
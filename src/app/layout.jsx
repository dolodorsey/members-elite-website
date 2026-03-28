import './globals.css';
export const metadata = { title: 'Members Elite — Sports Agency', description: 'Full-service sports agency — contracts, NIL deals, brand partnerships, and career management.', themeColor: '#0A0A0E' };
export default function RootLayout({ children }) {
  return (<html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />
  </head><body suppressHydrationWarning>{children}</body></html>);
}

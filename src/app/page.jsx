import HomeV2 from '../components/HomeV2';
import {SiteNav,SiteFooter} from '../components/SiteChrome';

export const revalidate=3600;
export default function Home(){return <main><SiteNav/><HomeV2/><SiteFooter/></main>}

import { ImageResponse } from 'next/og';

export const runtime='edge';
export async function GET(request){
  const {searchParams}=new URL(request.url);
  const requested=Number(searchParams.get('size')||512);
  const size=[180,192,512].includes(requested)?requested:512;
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(145deg,#060706,#17321c)',color:'#111',fontFamily:'Arial',position:'relative'}}>
      <div style={{position:'absolute',inset:'7%',border:'2px solid rgba(240,200,101,.38)'}} />
      <div style={{width:'62%',height:'62%',display:'flex',alignItems:'center',justifyContent:'center',background:'#f0c865',fontWeight:900,fontSize:size*.22,letterSpacing:'-.06em',transform:'skew(-7deg)'}}>ME</div>
    </div>,
    {width:size,height:size}
  );
}
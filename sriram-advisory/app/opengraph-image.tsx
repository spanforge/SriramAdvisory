import {ImageResponse} from "next/og";
export const alt="Sriram Advisory — Product and market advisory";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function OpenGraphImage(){
 return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#FFFFFF",color:"#17212B",padding:"72px",borderLeft:"16px solid #174A73"}}><div style={{display:"flex",fontSize:30,color:"#174A73"}}>Sriram Advisory</div><div style={{display:"flex",flexDirection:"column",fontSize:60,lineHeight:1.15}}><span>Decide what to build.</span><span>Understand how it can</span><span>find customers.</span></div><div style={{display:"flex",fontSize:24}}>Product and market advisory</div></div>,size);
}


import type { ReactNode } from "react";
interface Props{

title?:string;

children:ReactNode;

}

export default function GlassCard({

title,

children,

}:Props){

return(

<div className="bg-[#111d31]/90 backdrop-blur-xl border border-slate-800 rounded-xl shadow-lg p-6">

{title && (

<h3 className="text-white text-lg mb-4">

{title}

</h3>

)}

{children}

</div>

)

}
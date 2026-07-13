import { ShieldAlert } from "lucide-react";

export default function EmptyState(){

return(

<div className="flex flex-col items-center justify-center h-60 text-slate-400">

<ShieldAlert size={60}/>

<p className="mt-4">

No data available

</p>

</div>

)

}
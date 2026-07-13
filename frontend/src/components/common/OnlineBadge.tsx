interface Props{

status:string;

}

export default function OnlineBadge({

status

}:Props){

const color=

status==="Online"

?"bg-green-500"

:"bg-red-500";

return(

<span
className={`${color} px-3 py-1 rounded-full text-xs font-semibold text-black`}
>

{status}

</span>

);

}
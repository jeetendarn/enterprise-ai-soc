interface Props{

score:number;

}

export default function RiskBadge({

score

}:Props){

let color="";

if(score>=80)

color="bg-red-500";

else if(score>=60)

color="bg-orange-500";

else if(score>=40)

color="bg-yellow-500";

else

color="bg-green-500";

return(

<span
className={`${color} text-black px-3 py-1 rounded-full text-xs font-semibold`}
>

{score}

</span>

);

}
import CountUp from "react-countup";

interface Props{

title:string;

value:number;

color:string;

}

export default function KPI({

title,

value,

color,

}:Props){

return(

<div className="rounded-xl p-6 bg-[#111d31] border border-slate-800">

<h4 className="text-slate-400">

{title}

</h4>

<p

className="text-4xl font-bold mt-3"

style={{color}}

>

<CountUp

end={value}

duration={2}

/>

</p>

</div>

)

}
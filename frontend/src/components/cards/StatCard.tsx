type Props={

title:string;

value:string;

color:string;

};

export default function StatCard({

title,

value,

color,

}:Props){

return(

<div
className="stat-card"
style={{

borderLeft:`5px solid ${color}`

}}
>

<h4>{title}</h4>

<h1>{value}</h1>

</div>

);

}
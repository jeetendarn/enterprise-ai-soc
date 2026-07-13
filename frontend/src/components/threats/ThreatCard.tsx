interface Props{

title:string;

count:number;

color:string;

}

export default function ThreatCard({

title,

count,

color,

}:Props){

return(

<div

className="threat-card"

style={{

borderTop:`4px solid ${color}`

}}

>

<h4>{title}</h4>

<h2>{count}</h2>

</div>

)

}
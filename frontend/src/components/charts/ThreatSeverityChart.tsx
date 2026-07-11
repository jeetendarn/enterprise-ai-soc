import {

PieChart,

Pie,

Cell,

ResponsiveContainer,

} from "recharts";

const data=[

{name:"Critical",value:35},

{name:"High",value:28},

{name:"Medium",value:18},

{name:"Low",value:19},

];

const colors=[

"#ff4d6d",

"#ff9800",

"#ffd54f",

"#00d4ff",

];

export default function ThreatSeverityChart(){

return(

<div className="chart-card">

<h3>Threat Severity</h3>

<ResponsiveContainer
width="100%"
height={300}
>

<PieChart>

<Pie

data={data}

dataKey="value"

outerRadius={100}

>

{

data.map((_,i)=>

<Cell
key={i}
fill={colors[i]}
/>

)

}

</Pie>

</PieChart>

</ResponsiveContainer>

</div>

);

}
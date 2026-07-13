import { useThreats } from "../../hooks/useThreats";

import SeverityBadge from "../cards/SeverityBadge";

import ThreatStatusBadge from "./ThreatStatusBadge";

export default function ThreatTable(){

const{

threats,

loading,

}=useThreats();

if(loading){

return <h2>Loading...</h2>

}

return(

<div className="table-card">

<table>

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Severity</th>

<th>MITRE</th>

<th>Source</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

threats.map(threat=>(

<tr key={threat.id}>

<td>{threat.id}</td>

<td>{threat.name}</td>

<td>

<SeverityBadge

severity={threat.severity}

/>

</td>

<td>{threat.mitre}</td>

<td>{threat.source}</td>

<td>

<ThreatStatusBadge

status={threat.status}

/>

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}
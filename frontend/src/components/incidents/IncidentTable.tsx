import {useIncidents} from "../../hooks/useIncidents";

import SeverityBadge from "../cards/SeverityBadge";

import IncidentStatusBadge from "./IncidentStatusBadge";

export default function IncidentTable(){

const{

incidents,

loading,

}=useIncidents();

if(loading){

return <h2>Loading...</h2>

}

return(

<div className="table-card">

<table>

<thead>

<tr>

<th>ID</th>

<th>Title</th>

<th>Severity</th>

<th>Status</th>

<th>Assigned</th>

<th>Source</th>

<th>Time</th>

</tr>

</thead>

<tbody>

{

incidents.map((incident)=>(

<tr key={incident.id}>

<td>{incident.id}</td>

<td>{incident.title}</td>

<td>

<SeverityBadge

severity={incident.severity}

/>

</td>

<td>

<IncidentStatusBadge

status={incident.status}

/>

</td>

<td>{incident.assignedTo}</td>

<td>{incident.source}</td>

<td>{incident.time}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}
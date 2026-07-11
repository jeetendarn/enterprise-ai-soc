const rows=[

["INC-1001","Critical","Open"],

["INC-1002","High","Investigating"],

["INC-1003","Medium","Resolved"],

["INC-1004","Low","Closed"],

];

export default function IncidentSection(){

return(

<div className="table-card">

<h3>

Recent Incidents

</h3>

<table>

<thead>

<tr>

<th>ID</th>

<th>Severity</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{

rows.map((r)=>(

<tr key={r[0]}>

<td>{r[0]}</td>

<td>{r[1]}</td>

<td>{r[2]}</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}
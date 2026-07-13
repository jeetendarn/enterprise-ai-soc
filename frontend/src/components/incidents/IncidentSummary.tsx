import ThreatCard from "../threats/ThreatCard";

export default function IncidentSummary(){

return(

<div className="threat-summary">

<ThreatCard
title="Open"
count={18}
color="#ef4444"
/>

<ThreatCard
title="Investigating"
count={9}
color="#f59e0b"
/>

<ThreatCard
title="Resolved"
count={6}
color="#22c55e"
/>

<ThreatCard
title="Total"
count={33}
color="#06b6d4"
/>

</div>

);

}
import GlassCard from "../../components/cards/GlassCard";

import IncidentToolbar from "../../components/incidents/IncidentToolbar";

import IncidentSummary from "../../components/incidents/IncidentSummary";

import IncidentTable from "../../components/incidents/IncidentTable";

export default function Incidents(){

return(

<>

<GlassCard>

<h1 className="text-3xl font-bold">

Incident Management

</h1>

<p className="text-slate-400 mt-2">

Monitor, investigate and respond to security incidents.

</p>

</GlassCard>

<div className="mt-6">

<IncidentToolbar/>

</div>

<div className="mt-6">

<IncidentSummary/>

</div>

<div className="mt-6">

<IncidentTable/>

</div>

</>

);

}
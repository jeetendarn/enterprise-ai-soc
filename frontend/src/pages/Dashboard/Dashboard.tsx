import StatCard from "../../components/cards/StatCard";
import ChartsSection from "../../components/dashboard/ChartsSection";
import IncidentSection from "../../components/dashboard/IncidentSection";
import ThreatFeed from "../../components/dashboard/ThreatFeed";

export default function Dashboard(){

return(

<>

<h1
style={{
marginBottom:30
}}
>

SOC Dashboard

</h1>

<div className="stats">

<StatCard title="Threats" value="328" color="#00d4ff"/>

<StatCard title="Incidents" value="91" color="#ff4d6d"/>

<StatCard title="Cases" value="41" color="#ff9800"/>

<StatCard title="Assets" value="1203" color="#00e29b"/>

</div>

<ChartsSection/>

<IncidentSection/>

<ThreatFeed/>

</>

);

}
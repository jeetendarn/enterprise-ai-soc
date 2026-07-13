import ThreatToolbar from "../../components/threats/ThreatToolbar";
import ThreatCard from "../../components/threats/ThreatCard";
import ThreatTable from "../../components/threats/ThreatTable";

export default function Threats(){

return(

<>

<h1
style={{
marginBottom:25,
}}
>

Threat Intelligence

</h1>

<ThreatToolbar/>

<div className="threat-summary">

<ThreatCard

title="Critical"

count={12}

color="#ef4444"

/>

<ThreatCard

title="High"

count={23}

color="#f97316"

/>

<ThreatCard

title="Medium"

count={61}

color="#eab308"

/>

<ThreatCard

title="Low"

count={149}

color="#22c55e"

/>

</div>

<ThreatTable/>

</>

);

}
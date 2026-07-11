import ThreatTrendChart from "../charts/ThreatTrendChart";
import ThreatSeverityChart from "../charts/ThreatSeverityChart";

export default function ChartsSection(){

return(

<div className="chart-grid">

<ThreatTrendChart/>

<ThreatSeverityChart/>

</div>

);

}
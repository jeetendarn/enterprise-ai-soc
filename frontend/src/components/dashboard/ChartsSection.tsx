import ThreatTrendChart from "../charts/ThreatTrendChart";
import ThreatSeverityChart from "../charts/ThreatSeverityChart";

import ThreatFeed from "./ThreatFeed";
import RecentIncidents from "./RecentIncidents";
import RecentCases from "./RecentCases";

export default function ChartsSection(){

    return(

        <>

            <div className="chart-grid">

                <ThreatTrendChart/>

                <ThreatSeverityChart/>

            </div>

            <div
                style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(3,1fr)",
                    gap:20,
                    marginTop:20,
                }}
            >

                <ThreatFeed/>

                <RecentIncidents/>

                <RecentCases/>

            </div>

        </>

    );

}
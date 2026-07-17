import KPISection from "../../components/dashboard/KPISection";
import ChartsSection from "../../components/dashboard/ChartsSection";
import IncidentSection from "../../components/dashboard/IncidentSection";
import ThreatFeed from "../../components/dashboard/ThreatFeed";

export default function Dashboard() {

    return (

        <>

            <h1
                style={{
                    marginBottom: 30,
                }}
            >
                SOC Dashboard
            </h1>

            <KPISection />

            <ChartsSection />

            <IncidentSection />

            <ThreatFeed />

        </>

    );

}
import ThreatToolbar from "../../components/threats/ThreatToolbar";
import ThreatFilters from "../../components/threats/ThreatFilters";
import ThreatSummary from "../../components/threats/ThreatSummary";
import ThreatTable from "../../components/threats/ThreatTable";
import ThreatPagination from "../../components/threats/ThreatPagination";

export default function Threats() {
    return (
        <>

            <h1
                style={{
                    marginBottom: 30,
                    fontSize: 30,
                    fontWeight: 700,
                }}
            >
                Threat Intelligence
            </h1>

            <ThreatToolbar />

            <ThreatFilters />

            <ThreatSummary />

            <ThreatTable />

            <ThreatPagination />

        </>
    );
}
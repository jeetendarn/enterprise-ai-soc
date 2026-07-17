import { useMemo, useState } from "react";

import ThreatToolbar from "../../components/threats/ThreatToolbar";
import ThreatFilters from "../../components/threats/ThreatFilters";
import ThreatSummary from "../../components/threats/ThreatSummary";
import ThreatTable from "../../components/threats/ThreatTable";
import ThreatPagination from "../../components/threats/ThreatPagination";

import { useThreats } from "../../hooks/useThreats";

export default function Threats() {

    const {
        data: threats = [],
        isLoading,
        error,
    } = useThreats();

    const [search, setSearch] = useState("");

    const filteredThreats = useMemo(() => {

        return threats.filter((threat: any) =>

            threat.name.toLowerCase().includes(search.toLowerCase()) ||

            threat.source.toLowerCase().includes(search.toLowerCase()) ||

            threat.status.toLowerCase().includes(search.toLowerCase())

        );

    }, [threats, search]);

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Failed to load threats.</div>;

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                Threat Intelligence
            </h1>

            <ThreatToolbar
                search={search}
                setSearch={setSearch}
            />

            <ThreatFilters />

            <ThreatSummary
                threats={filteredThreats}
            />

            <ThreatTable
                threats={filteredThreats}
            />

            <ThreatPagination
                total={filteredThreats.length}
            />

        </div>

    );

}
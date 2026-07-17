import StatCard from "../cards/StatCard";

import { useDashboard } from "../../hooks/useDashboard";

export default function KPISection(){

    const{

        data,

        isLoading,

    }=useDashboard();

    if(isLoading){

        return <h2>Loading Dashboard...</h2>;

    }

    return(

        <div className="stats">

            <StatCard

                title="Threats"

                value={data?.total_threats ?? 0}

                color="#00d4ff"

            />

            <StatCard

                title="Incidents"

                value={data?.total_incidents ?? 0}

                color="#ff4d6d"

            />

            <StatCard

                title="Cases"

                value={data?.total_cases ?? 0}

                color="#ff9800"

            />

            <StatCard

                title="Assets"

                value={data?.total_assets ?? 0}

                color="#00e29b"

            />

        </div>

    );

}
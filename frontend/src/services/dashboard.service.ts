import api from "../api/axios";

export interface DashboardSummary {

    total_assets:number;

    online_assets:number;

    total_incidents:number;

    open_incidents:number;

    total_threats:number;

    active_threats:number;

    total_cases:number;

    open_cases:number;

}

export const DashboardService={

    async summary(){

        const res=await api.get("/dashboard/summary");

        return res.data;

    },
    
async threatTrend(){

    const res=await api.get(
        "/dashboard/threat-trend"
    );

    return res.data;

},

async severity(){

    const res=await api.get("/dashboard/severity");

    return res.data;

},

async recentThreats() {

    const res = await api.get(
        "/dashboard/recent-threats"
    );

    return res.data;

},

async recentIncidents(){

    const res=await api.get(
        "/dashboard/recent-incidents"
    );

    return res.data;

},

async recentCases(){

    const res=await api.get(
        "/dashboard/recent-cases"
    );

    return res.data;

},

};

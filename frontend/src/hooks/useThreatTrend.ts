import { useQuery } from "@tanstack/react-query";

import { DashboardService } from "../services/dashboard.service";

export function useThreatTrend(){

    return useQuery({

        queryKey:["threat-trend"],

        queryFn:DashboardService.threatTrend,

    });

}
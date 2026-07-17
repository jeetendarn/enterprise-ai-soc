import { useQuery } from "@tanstack/react-query";

import { DashboardService } from "../services/dashboard.service";

export function useDashboard(){

    return useQuery({

        queryKey:["dashboard-summary"],

        queryFn:DashboardService.summary,

        refetchInterval:30000,

    });

}
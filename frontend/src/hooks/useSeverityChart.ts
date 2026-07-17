import { useQuery } from "@tanstack/react-query";

import { DashboardService } from "../services/dashboard.service";

export function useSeverityChart(){

    return useQuery({

        queryKey:["severity-chart"],

        queryFn:DashboardService.severity,

    });

}
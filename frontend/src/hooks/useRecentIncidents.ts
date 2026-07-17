import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboard.service";

export function useRecentIncidents(){

    return useQuery({

        queryKey:["recent-incidents"],

        queryFn:DashboardService.recentIncidents,

        refetchInterval:10000,

    });

}
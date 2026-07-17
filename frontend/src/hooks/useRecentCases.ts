import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboard.service";

export function useRecentCases(){

    return useQuery({

        queryKey:["recent-cases"],

        queryFn:DashboardService.recentCases,

        refetchInterval:10000,

    });

}
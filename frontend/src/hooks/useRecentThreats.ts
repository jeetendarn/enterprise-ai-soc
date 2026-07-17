import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../services/dashboard.service";

export function useRecentThreats() {
    return useQuery({
        queryKey: ["recent-threats"],
        queryFn: DashboardService.recentThreats,
        refetchInterval: 10000,
    });
}
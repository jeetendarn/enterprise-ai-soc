import { useQuery } from "@tanstack/react-query";
import { ThreatService } from "../services/threat.service";

export function useThreats() {

    return useQuery({

        queryKey: ["threats"],

        queryFn: ThreatService.getAll,

    });

}
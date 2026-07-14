import { useQuery } from "@tanstack/react-query";
import { AssetService } from "../services/asset.service";

export function useAssets() {
    return useQuery({
        queryKey: ["assets"],
        queryFn: AssetService.getAll,
    });
}
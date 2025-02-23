import { useQuery } from "@tanstack/react-query";
import { fetchServerStatus } from "@/lib/api";
import { MinecraftServerStatus } from "@/types/minecraft";

export const useServerStatus = () => {
  return useQuery<MinecraftServerStatus>({
    queryKey: ["serverStatus"],
    queryFn: fetchServerStatus,
    refetchInterval: 30000,
    retry: 2,
    staleTime: 10000,
  });
};

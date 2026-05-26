'use client'

import { useQuery } from "@tanstack/react-query";
import { getAvailableBalanceAction } from "@/_actions/transactions/get";

export function useAvailableBalance() {
  return useQuery({
    queryKey: ["summary", "availableBalance"],
    queryFn: async () => {
      const data = await getAvailableBalanceAction();
      return data;
    },
  });
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { getLatestTxAction } from "@/_actions/transactions/get";

export function useLatestTransactionQuery({limit = 5, initialData}:{limit?: number, initialData?: any} = {}) {
  return useQuery({
    queryKey: ["transactions", 'latest'],
    queryFn: async () => {
      const data = await getLatestTxAction(limit);
      return data;
    },
    placeholderData: initialData,
    staleTime: 0,
  });
}

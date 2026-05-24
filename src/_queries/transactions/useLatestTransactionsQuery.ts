"use client";

import { useQuery } from "@tanstack/react-query";
import { getLatestTxAction } from "@/_actions/transactions/get";

export function useLatestTransactionQuery(limit: number = 5) {
  return useQuery({
    queryKey: ["transactions", 'latest', limit],
    queryFn: async () => {
      const data = await getLatestTxAction();
      return data;
    },
  });
}

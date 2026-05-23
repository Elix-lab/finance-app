"use client";

import { useQuery } from "@tanstack/react-query";
import { getLatestTXAction } from "@/_actions/transactions/get";

export function TransactionQuery(userId: string) {
  return useQuery({
    queryKey: ["transactions", userId],
    queryFn: async () => {
      const data = await getLatestTXAction(userId);
      return data;
    },
  });
}

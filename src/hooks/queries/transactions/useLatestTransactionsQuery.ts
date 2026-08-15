/* 
Tanstack Query
Query to get the Latest Transactions
*/

"use client";

import { useQuery } from "@tanstack/react-query";
import { getLatestTxAction } from "@/_actions/transactions/get";

export const useLatestTransactionQuery=({limit = 5}:{limit?: number} = {}) => {
  return useQuery({
    queryKey: ["transactions", 'latest'],
    queryFn: async () => {
      const data = await getLatestTxAction(limit);
      return data;
    },
  });
}

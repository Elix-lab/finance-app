/* 
Tanstack Query
Query to get the Aviable Balance, Total Income & Total Expenses
*/

"use client";

import { useQuery } from "@tanstack/react-query";
import { getFinanceSummaryAction } from "@/_actions/transactions/get";

export const useFinanceSummaryQuery = () => {
  return useQuery({
    queryKey: ["finance-summary"],
    queryFn: async () => {
      const data = await getFinanceSummaryAction();
      return data;
    },
  });
}

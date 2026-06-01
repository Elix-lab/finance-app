"use client";

import { useQuery } from "@tanstack/react-query";
import { getFinanceSummaryAction } from "@/_actions/transactions/get";

export function useFinanceSummaryQuery() {
  return useQuery({
    queryKey: ["finance-summary"],
    queryFn: async () => {
      const data = await getFinanceSummaryAction();
      return data;
    },
  });
}

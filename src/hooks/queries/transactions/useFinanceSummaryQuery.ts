"use client";

import { useQuery } from "@tanstack/react-query";
import { getFinanceSummaryAction } from "@/_actions/transactions/get";

export function useFinanceSummaryQuery(initialData?) {
  return useQuery({
    queryKey: ["finance-summary"],
    queryFn: async () => {
      const data = await getFinanceSummaryAction();
      return data;
    },
    placeholderData: initialData,
    staleTime: 0,
  });
}

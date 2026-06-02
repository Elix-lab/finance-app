"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTxAction } from "@/_actions/transactions/update";

export function useEditTransactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: FormData) => await updateTxAction(payload),
    onSettled: async () => {
      return Promise.all([
        queryClient.invalidateQueries({ queryKey: ["transactions", "latest"] }),
        queryClient.invalidateQueries({ queryKey: ["finance-summary"] }),
      ]);
    },
  });
}

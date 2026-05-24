"use client";

import { createTxAction } from "@/_actions/transactions/insert";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTransactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: FormData) => await createTxAction(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions", "latest"],
      });
    },
  });
}

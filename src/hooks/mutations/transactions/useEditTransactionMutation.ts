"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTxAction } from "@/_actions/transactions/update";
import { toast } from "sonner";

export function useEditTransactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['edit-transaction'],
    mutationFn: async (payload: FormData) => await updateTxAction(payload),
    onError: () => {
      toast.error("Error editing the Transaction", { position: "top-center" });
    },
    onSuccess: () => {
      toast.success("Transaction edited successfully", {
        position: "top-center",
      });
    },
    onSettled: async () => {
      return Promise.all([
        queryClient.invalidateQueries({ queryKey: ["transactions", "latest"] }),
        queryClient.invalidateQueries({ queryKey: ["finance-summary"] }),
      ]);
    },
  });
}

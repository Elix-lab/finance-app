"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTxAction } from "@/_actions/transactions/delete";
import { toast } from "sonner";

export function useDeleteTransactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (transactionId: string) => {
      return await deleteTxAction(transactionId);
    },
    onError: () => {
      toast.error("Error deleting the Transaction", { position: "top-center" });
    },
    onSuccess: () => {
      toast.success("Transaction deleted successfully", {
        position: "top-center",
      });
    },
    onSettled: () => {
      return Promise.all([
        queryClient.invalidateQueries({ queryKey: ["transactions", "latest"] }),
        queryClient.invalidateQueries({ queryKey: ["finance-summary"] }),
      ]);
    },
  });
}

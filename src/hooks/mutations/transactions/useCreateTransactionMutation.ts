"use client";

import { createTxAction } from "@/_actions/transactions/insert";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateTransactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: FormData) => await createTxAction(payload),

    onMutate: async (payload) => {
      // Cancel queries in case there is a refetching in progress
      await Promise.all([
        queryClient.cancelQueries({queryKey:['transactions', 'latest']}),
        queryClient.cancelQueries({queryKey: ['summary', 'availableBalance']})
      ])
      
      // Get the current data
      const previousData = await queryClient.getQueryData([
        "transactions",
        "latest",
      ]);
      // Creating the optimistic transaciton
      const optimisticTx = {
        id: `optimistic-${crypto.randomUUID()}`,
        nature: String(payload.get("nature")),
        title: String(payload.get("title")),
        category: String(payload.get("category")),
        amount: Number(payload.get("amount")),
        date: new Date().toISOString(),
      };
      // Update cache with optimisticTx
      queryClient.setQueryData(["transactions", "latest"], (old: any) => {
        if (!old) {
          return [optimisticTx];
        }
        return [optimisticTx, ...old];
      });
      // Returning previous data to use in onError in case a revert is needed
      return { previousData };
    },

    onError: (err, payload, context) => {
      toast.error('Error creating the Transaction', {position:'top-center'})
      if (context?.previousData) {
        queryClient.setQueryData(
          ["transactions", "latest"],
          context.previousData,
        );
      }
    },

    onSuccess() {
      toast.success('Transaction created successfully', {position:'top-center'})
    },

    onSettled() {
      return Promise.all([
        queryClient.invalidateQueries({queryKey:['transactions', 'latest']}),
        queryClient.invalidateQueries({queryKey:['summary', 'availableBalance']})
      ])
    },
  });
}

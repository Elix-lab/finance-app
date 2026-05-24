"use client";

import { createTxAction } from "@/_actions/transactions/insert";
import {
  QueryClientProvider,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { date } from "drizzle-orm/mysql-core";

export function useCreateTransactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: FormData) => await createTxAction(payload),

    onMutate: async (payload) => {
      // Cancel queries in case there is a refetching in progress
      await queryClient.cancelQueries({
        queryKey: ["transactions", "latest"],
      });
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
      if (context?.previousData) {
        return queryClient.setQueryData(
          ["transactions", "latest"],
          context.previousData,
        );
      }
    },

    onSettled() {
      return queryClient.invalidateQueries({
        queryKey:['transactions', 'latest']
      })
    },
  });
}

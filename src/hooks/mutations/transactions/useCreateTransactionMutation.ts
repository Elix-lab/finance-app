"use client";

import { createTxAction } from "@/_actions/transactions/insert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Decimal from "decimal.js";
import { toast } from "sonner";

export function useCreateTransactionMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: FormData) => await createTxAction(payload),

    onMutate: async (payload) => {
      // Cancel queries in case there is a refetching in progress
      await Promise.all([
        queryClient.cancelQueries({ queryKey: ["transactions", "latest"] }),
        queryClient.cancelQueries({ queryKey: ["finance-summary"] }),
      ]);

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
        amount: String(payload.get("amount")),
        date: String(payload.get("date")),
      };

      // Update cache with optimisticTx
      // For Balance component
      queryClient.setQueryData(["finance-summary"], (old: any) => {
        const oldExpenses = new Decimal(old.expenses);
        const oldIncome = new Decimal(old.income);
        const oldAvailableBalance = new Decimal(old.availableBalance);
        const amount = new Decimal(optimisticTx.amount);

        const income =
          optimisticTx.nature === "income"
            ? oldIncome.plus(amount)
            : oldIncome.plus(0);
        const expenses =
          optimisticTx.nature === "expense"
            ? oldExpenses.plus(amount)
            : oldExpenses.plus(0);
        const availableBalance = oldAvailableBalance.plus(
          optimisticTx.nature === "income" ? amount : -amount,
        );

        return {
          income: income.toString(),
          expenses: expenses.toString(),
          availableBalance: availableBalance.toString(),
        };
      });

      // For TransactionTable component
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
      toast.error("Error creating the Transaction", { position: "top-center" });
      if (context?.previousData) {
        queryClient.setQueryData(
          ["transactions", "latest"],
          context.previousData,
        );
      }
    },

    onSuccess: () => {
      toast.success("Transaction created successfully", {
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

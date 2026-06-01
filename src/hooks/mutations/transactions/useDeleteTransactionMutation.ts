'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTxAction } from "@/_actions/transactions/delete";

export function useDeleteTransactionMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (transactionId: string) => {
            return await deleteTxAction(transactionId)
        },
        onSettled: () => {
            return Promise.all([
                queryClient.invalidateQueries({queryKey: ['transactions', 'latest']}),
                queryClient.invalidateQueries({queryKey: ['finance-summary']}),
            ])
        }
    })
}
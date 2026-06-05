import { Mutation, useMutationState } from "@tanstack/react-query";

export function useEditTxMutationState () {
    return useMutationState({
        filters: {mutationKey: ['edit-transaction']},
        select: (mutation: Mutation) => ({
            id: (mutation.state.variables as FormData)?.get('id'),
            status: mutation.state.status,
        })
    })
}
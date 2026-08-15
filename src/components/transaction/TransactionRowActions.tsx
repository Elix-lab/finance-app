/* 
Three dots menu used in every transaction line inside the TransactionTable.tsx
It allows the user to edit or delete the transaction
Edit: displays a form with the transactions info. If ther is no info, displays a spinner
*/

"use client";

import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { Spinner } from "../ui/shadCn/spinner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/shadCn/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/shadCn/dropdown-menu";
import { useDeleteTransactionMutation } from "@/hooks/mutations/transactions/useDeleteTransactionMutation";
import TransactionForm from "./TransactionForm";
import { useEditTransactionMutation } from "@/hooks/mutations/transactions/useEditTransactionMutation";
import { useEditTxMutationState } from "@/hooks/mutation_states/transactions/useEditTxMutationState";

type Transaction = {
  id: string;
  userId: string;
  nature: "income" | "expense";
  title: string;
  category: string;
  amount: string;
  date: string;
  createdAt: string | null;
};

const TransactionRowActions = ({ transaction }: {transaction: Transaction}) => {
  // States
  const [tx, setTx] = useState<Transaction | null>(null);
  const useDeleteTxMutation = useDeleteTransactionMutation();
  const isDeleting = useDeleteTxMutation.isPending;
  const isOptimistic = transaction.id.startsWith("optimistic-");

  // Checking if there is a transaction in Pending status
  const transactionState = useEditTxMutationState();
  const isEditing = transactionState.some(
    (t) => t.status === "pending" && t.id === transaction.id,
  );
  // Conditions to show spinner
  const showSpinner = isOptimistic || isDeleting || isEditing;

  //Event Handlers
  const handleDelete = () => {
    if (confirm("Are you sure you want to DELETE this transaction?")) {
      useDeleteTxMutation.mutate(transaction.id);
    }
  };
  const handleEdit = () => {
    setTx(transaction);
  };

  return (
    // Dropdown (delete, edit)
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* Conditional rendering: spinner | three dots */}
          {showSpinner ? (
            <button disabled={true} className="flex items-center justify-center shrink-0 size-8 rounded-lg transition">
              <Spinner />
            </button>
          ) : (
            <button className="flex items-center justify-center shrink-0 size-8 rounded-lg cursor-pointer text-muted-foreground/60 hover:text-foreground transition">
              <BsThreeDotsVertical />
            </button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            {/* Edit button - displays the form to edit the transaction */}
            <DialogTrigger className="w-full" onClick={handleEdit}>
              <DropdownMenuItem>
                <MdOutlineEdit />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuSeparator />
            {/* Delete */}
            <DropdownMenuItem onClick={handleDelete}>
              <MdOutlineDeleteForever />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Edition Form - Case => no transaction info:displays spinner, else: show form with transaction info*/}
      {!tx ? (
        <DialogContent className="flex gap-3 items-center">
          <DialogTitle>
            <span>
              <Spinner />
            </span>
          </DialogTitle>
          <DialogDescription>Preparing for edition</DialogDescription>
        </DialogContent>
      ) : (
        <DialogContent className="rounded-lg border border-edit sm:max-w-xl">
          <TransactionForm
            mutationHook={useEditTransactionMutation}
            txNature={transaction.nature}
            mode={"edit"}
            transaction={transaction}
          />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default TransactionRowActions;

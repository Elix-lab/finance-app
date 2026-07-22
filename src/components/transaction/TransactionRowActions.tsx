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
import { Button } from "../ui/shadCn/button";
import { useDeleteTransactionMutation } from "@/hooks/mutations/transactions/useDeleteTransactionMutation";
import TransactionForm from "./TransactionForm";
import { useEditTransactionMutation } from "@/hooks/mutations/transactions/useEditTransactionMutation";
import { useEditTxMutationState } from "@/hooks/mutation_states/transactions/useEditTxMutationState";

type transaction = {
  id: string;
  userId: string;
  nature: "income" | "expense";
  title: string;
  category: string;
  amount: string;
  date: string;
  createdAt: string | null;
};

const TransactionRowActions = ({ transaction }: {transaction: transaction}) => {
  // States
  const [tx, setTx] = useState<transaction | null>(null);
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
          {showSpinner ? (
            <button disabled={true}>
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
            <DialogTrigger className="w-full" onClick={handleEdit}>
              <DropdownMenuItem>
                <MdOutlineEdit />
                Edit
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>
              <MdOutlineDeleteForever />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Edition Form */}
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
        // className="rounded-lg border border-amber-300 sm:max-w-xl"
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

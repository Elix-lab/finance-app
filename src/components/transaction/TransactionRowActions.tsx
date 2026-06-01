"use client";

import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import TransactionFormFields from "./TransactionFormFields";
import TransactionFormFooter from "./TransactionFormFooter";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState, useTransition } from "react";
import { Spinner } from "../ui/spinner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { deleteTxAction } from "@/_actions/transactions/delete";
import { updateTxAction } from "@/_actions/transactions/update";
import { useDeleteTransactionMutation } from "@/hooks/mutations/transactions/useDeleteTransactionMutation";

const TransactionRowActions = ({
  transactionId,
}: {
  transactionId: string;
}) => {
  // States
  const [tx, setTx] = useState(null);
  const useDeleteTxMutation = useDeleteTransactionMutation()
  const isDeleting = useDeleteTxMutation.isPending
  const isOptimistic = transactionId.startsWith("optimistic-");
  const showSpinner = isOptimistic || isDeleting;

  //Event Handlers
  const handleDelete = () => {
    if (confirm("Are you sure you want to DELETE this transaction?")) {
      useDeleteTxMutation.mutate(transactionId);
    }
  };

  const handleEdit = async () => {
    const res = await fetch(`/api/transactions/${transactionId}`);
    const txData = await res.json();
    setTx(txData);
  };

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {showSpinner ? (
            <Button variant="ghost" disabled={true}>
              <Spinner />
            </Button>
          ) : (
            <Button variant="ghost">
              <BsThreeDotsVertical />
            </Button>
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
        <DialogContent>
          <DialogTitle>Edit Transaction</DialogTitle>
          <DialogDescription>
            Change the desired fields and save
          </DialogDescription>
          <form action={updateTxAction}>
            <TransactionFormFields existingTx={tx} />
            <TransactionFormFooter />
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default TransactionRowActions;

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
import { updateTxAction } from "@/_actions/transactions/update";
import { useDeleteTransactionMutation } from "@/hooks/mutations/transactions/useDeleteTransactionMutation";
import TransactionForm from "./TransactionForm";
import { useEditTransactionMutation } from "@/hooks/mutations/transactions/useEditTransactionMutation";
import { Edit } from "lucide-react";

const TransactionRowActions = ({
  transaction
}) => {
  // States
  const [tx, setTx] = useState(null);
  const useDeleteTxMutation = useDeleteTransactionMutation()
  const isDeleting = useDeleteTxMutation.isPending
  const isOptimistic = transaction.id.startsWith("optimistic-");
  const showSpinner = isOptimistic || isDeleting;

  //Event Handlers
  const handleDelete = () => {
    if (confirm("Are you sure you want to DELETE this transaction?")) {
      useDeleteTxMutation.mutate(transaction.id);
    }
  };

  const handleEdit =  () => {
    setTx(transaction);
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
        <DialogContent className="sm:max-w-xl rounded-2xl">
          <TransactionForm mutationHook={useEditTransactionMutation} txNature={transaction.nature} mode={'edit'} transaction={transaction}/>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default TransactionRowActions;

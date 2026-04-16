"use client";
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
import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../ui/button";
import {
  deleteTransactionAction,
  updateTransactionAction,
} from "@/actions/transactions/transactions";
import { useState, useTransition } from "react";
import { Spinner } from "../ui/spinner";
import TransactionFormFields from "./TransactionFormFields";
import TransactionFormFooter from "./TransactionFormFooter";

const TransactionRowActions = ({
  transactionId,
}: {
  transactionId: string;
}) => {
  // States
  const [isDeleting, startDeleteTransition] = useTransition();
  const [tx, setTx] = useState(null);

  //Event Handlers
  const handleDelete = () => {
    if (confirm("Are you sure you want to DELETE this transaction?")) {
      startDeleteTransition(() => deleteTransactionAction(transactionId));
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
          {!isDeleting ? (
            <Button variant="ghost">
              <BsThreeDotsVertical />
            </Button>
          ) : (
            <Button variant="ghost">
              <ImSpinner8 />
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
          <DialogDescription>
            Preparing for edition
          </DialogDescription>
        </DialogContent>
      ) : (
        <DialogContent>
          <DialogTitle>Edit Transaction</DialogTitle>
          <DialogDescription>
            Change the desired fields and save
          </DialogDescription>
          <form action={updateTransactionAction}>
            <TransactionFormFields existingTx={tx} />
            <TransactionFormFooter />
          </form>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default TransactionRowActions;

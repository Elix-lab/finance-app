"use client";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
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
import { deleteTransactionAction } from "@/actions/transactions/transactions";
import { useState, useTransition } from "react";
import TransactionFormHeader from "./TransactionFormHeader";
import TransactionFormFields from "./TransactionFormFields";
import TransactionFormFooter from "./TransactionFormFooter";

const TransactionRowActions = ({
transactionId,
}: {
  transactionId: string;
}) => {
  
  // States
  const [isPending, startTransition] = useTransition();
  const [tx, setTx] = useState(null);

  //Event Handlers
  const handleDelete = () => {
    if (confirm("Are you sure you want to DELETE this transaction?")) {
      startTransition(() => deleteTransactionAction(transactionId));
    }
  };

  const handleEdit = async () => {
    const res = await fetch(`/api/transactions/${transactionId}`)
    const txData = await res.json()
    console.log(txData)
    setTx(txData)
  }

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {!isPending ? (
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

      <DialogContent>
        <DialogTitle>
          Edit Transaction
        </DialogTitle>
        <DialogDescription>Change the desired fields and save</DialogDescription>
        {!tx ? 
        'Loading' :
        <form action="">
          {/* <TransactionFormHeader txNature='income' /> */}
          <TransactionFormFields existingTx={tx}/>
          <TransactionFormFooter />
        </form>
        }
      </DialogContent>
    </Dialog>
  );
};

export default TransactionRowActions;

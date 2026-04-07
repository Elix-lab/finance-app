"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./dropdown-menu";
import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { ImSpinner8 } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "./button";
import { deleteTransactionAction } from "@/actions/transactions/transactions";
import { useTransition } from "react";

const DropDownMenuTransaction = ({
  transactionId,
}: {
  transactionId: string;
}) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to DELETE this transaction?")) {
      startTransition(() => deleteTransactionAction(transactionId));
    }
  };

  return (
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
          <DropdownMenuItem>
            <MdOutlineEdit />
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDelete}>
            <MdOutlineDeleteForever />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenuTransaction;

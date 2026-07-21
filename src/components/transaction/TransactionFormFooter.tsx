"use client";

import { DialogFooter, DialogClose } from "../ui/shadCn/dialog";
import { Button } from "../ui/shadCn/button";
import clsx from "clsx";

const TransactionFormFooter = ({
  txNature,
  mode,
}: {
  txNature: "income" | "expense";
  mode: "create" | "edit";
}) => {
  return (
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>

      <DialogClose asChild>
        <Button
          type="submit"
          className={clsx({
            "bg-primary hover:bg-primary/90": txNature === "income" && mode ==='create',
            "bg-destructive hover:bg-destructive/90": txNature === "expense" && mode ==='create',
            'bg-edit hover:bg-edit/90': mode === 'edit'
          })}
        >
          Save
        </Button>
      </DialogClose>
    </DialogFooter>
  );
};

export default TransactionFormFooter;

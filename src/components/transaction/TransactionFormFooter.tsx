"use client";

import { DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";

const TransactionFormFooter = ({ mode }: { mode: "create" | "edit" }) => {
  return (
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>

      <DialogClose asChild>
        <Button type="submit">Save</Button>
      </DialogClose>
    </DialogFooter>
  );
};

export default TransactionFormFooter;

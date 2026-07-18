"use client";

import { DialogFooter, DialogClose } from "../ui/shadCn/dialog";
import { Button } from "../ui/shadCn/button";

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

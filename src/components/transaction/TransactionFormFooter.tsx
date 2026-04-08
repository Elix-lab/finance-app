'use client'

import { DialogFooter, DialogClose } from "../ui/dialog"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"

const TransactionFormFooter = () => {
    return(
        <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <SaveButton />
          </DialogFooter>
    )
}

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save"}
    </Button>
  );
}

export default TransactionFormFooter;
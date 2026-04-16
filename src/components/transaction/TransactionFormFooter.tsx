'use client'

import { DialogFooter, DialogClose } from "../ui/dialog"
import { useFormStatus } from "react-dom"
import { Spinner } from "../ui/spinner"
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
      {pending ? <Spinner/> : "Save"}
    </Button>
  );
}

export default TransactionFormFooter;
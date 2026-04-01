"use client";
// This is the modal that pop up when using the TransactionSummary buttons.
// For the modal we are using ShadCN UI library.
import { Button } from "../ui/button";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { insertTransactionAction } from "@/actions/transactions/transactions";

// Types
type Transaction = {
  nature: "income" | "expense";
  title: string;
  category: string;
  amount: number;
  date: string;
};
type Props = {
  buttonNature: "income" | "expense";
};

// COMPONENT
const TransactionButton = ({ buttonNature }: Props) => {
  //Variables and States
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  // default date for date input
  const [dateValue, setDateValue] = useState<Date | undefined>(
    () => new Date(),
  );

  // Form status
  const {pending} = useFormStatus();

  const config = {
    income: {
      bgColor: "bg-green-600",
      shadow: "shadow-green-300",
      text: "Add Income",
    },
    expense: {
      bgColor: "bg-red-600",
      shadow: "shadow-red-300",
      text: "Add Expense",
    },
  };

  const { bgColor, shadow, text } = config[buttonNature];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`h-20 rounded-2xl shadow-md hover:cursor-pointer ${shadow} ${bgColor}`}
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl rounded-2xl">
        <form action={insertTransactionAction}>
          <DialogHeader>
            <DialogTitle>{text}</DialogTitle>
            <DialogDescription>
              Add transaction details and save.
            </DialogDescription>
          </DialogHeader>

          {/* inputs */}
          <div className="flex flex-col gap-4 px-1.5 py-4">
            <div>
              <label className="block mb-1">Amount*</label>
              <input
                name="amount"
                type="number"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className="w-full border px-3 py-2 rounded-lg"
                step="0.01"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Title*</label>
              <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className="w-full border px-3 py-2 rounded-lg"
                maxLength={50}
                required
              />
            </div>

            <div>
              <label className="block mb-1">Category*</label>
              <input
                name="category"
                type="text"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="w-full border px-3 py-2 rounded-lg"
                maxLength={50}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Date</label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button className="flex w-1/3" variant="outline">
                    {dateValue ? dateValue.toLocaleDateString() : "Pick a date"}
                    <CalendarIcon className="ml-auto" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-5">
                  <Calendar
                    mode="single"
                    selected={dateValue}
                    onSelect={setDateValue}
                  />
                </PopoverContent>
              </Popover>

              <input
                type="hidden"
                name="date"
                value={
                  dateValue
                    ? dateValue.toISOString().slice(0, 10)
                    : new Date().toISOString().slice(0, 10)
                }
              />

              <input type="hidden" name="nature" value={buttonNature} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <SaveButton/>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};


function SaveButton() {
  const {pending} = useFormStatus();
  return(
    <Button type="submit" disabled={pending}>{pending ? 'Saving...' : 'Save'}</Button>
  )
}

export default TransactionButton;



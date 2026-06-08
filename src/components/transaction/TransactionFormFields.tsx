"use client";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { parseISOtoDate } from "@/lib/date";

const TransactionFormFields = ({
  txNature,
  existingTx,
}: {
  txNature?: "income" | "expense";
  existingTx?: any;
}) => {
  //Variables and States
  const [id, setId] = useState(existingTx?.id ?? "");
  const [title, setTitle] = useState(existingTx?.title ?? "");
  const [category, setCategory] = useState(existingTx?.category ?? "");
  const [amount, setAmount] = useState(existingTx?.amount ?? "");
  // default date for date input
  const [dateValue, setDateValue] = useState<Date | undefined>(existingTx?.date ? parseISOtoDate(existingTx?.date) : new Date(),);

  // //useEffect in case existingTx exist
  // useEffect(() => {
  //   setId(existingTx?.id ?? "");
  //   setTitle(existingTx?.title ?? "");
  //   setCategory(existingTx?.category ?? "");
  //   setAmount(existingTx?.amount ?? "");
  //   setDateValue(
  //     existingTx?.date ? parseISOtoDate(existingTx?.date) : new Date(),
  //   );
  // }, [existingTx]);

  return (
    // Inputs
    <div className="flex flex-col gap-4 py-4">
      {/* Amount */}
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

      {/* Title */}
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

      {/* Category */}
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

      {/* Date */}
      <div className="flex flex-col gap-1">
        <label>Date</label>

        <Popover>
          <PopoverTrigger asChild>
            <Button className="flex w-1/2" variant="outline">
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

        <input type="hidden" name="nature" value={txNature} />
        <input type="hidden" name="id" value={id} />
      </div>
    </div>
  );
};

export default TransactionFormFields;

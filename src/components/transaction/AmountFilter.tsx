/* 
Filter transactions based on min & max Amount
Uses Popover from ShadCN
*/

"use client";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/shadCn/popover";
import { Button } from "../ui/shadCn/button";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const AmountFilter = () => {
  // Getting params
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  // Inputs State
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [invalidRange, setInvalidRange] = useState(false);

  // Handle Input Changes
  const handleMinAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinAmount(e.target.value);
  };
  const handleMaxAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxAmount(e.target.value);
  };
  // Handle Submit
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (minAmount && maxAmount && minAmount > maxAmount) {
      setInvalidRange(true);
      return;
    } else {
      setInvalidRange(false);
      minAmount
        ? params.set("minAmount", minAmount)
        : params.delete("minAmount");
      maxAmount
        ? params.set("maxAmount", maxAmount)
        : params.delete("maxAmount");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <article>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className="flex gap-1 border-border bg-card"
            variant="outline"
          >
            <span className="text-sm font-light">Amount</span>
            <FaCaretDown className="ml-auto" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 text-sm font-medium px-3 py-3"
          >
            {/* Inputs */}
            <div className="flex gap-1.5">
              {/* Min Amount */}
              <div className="flex flex-col">
                <label htmlFor="from">Min</label>
                <input
                  type="number"
                  id="minAmount"
                  step={0.01}
                  className="w-full border px-2 py-1 rounded-lg"
                  value={minAmount}
                  onChange={handleMinAmount}
                />
              </div>
              {/* Max Amount */}
              <div className="flex flex-col">
                <label htmlFor="to">Max</label>
                <input
                  type="number"
                  id="maxAmount"
                  step={0.01}
                  className="w-full border px-2 py-1 rounded-lg"
                  value={maxAmount}
                  onChange={handleMaxAmount}
                />
              </div>
            </div>
            {/* Button & Error message */}
            <div className="text-center">
              {/* Button */}
              <button className="w-fit mx-auto px-5 py-1 rounded-lg bg-primary text-primary-foreground font-medium cursor-pointer hover:bg-primary/90 transition-colors">
                Apply
              </button>
              {/* Error message */}
              {invalidRange ? (
                <p className="text-xs font-light text-destructive mt-1.5">
                  Invalid amount range
                </p>
              ) : null}
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </article>
  );
};

export default AmountFilter;

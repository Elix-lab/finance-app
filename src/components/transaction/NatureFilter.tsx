'use client'

import { Popover, PopoverTrigger, PopoverContent } from "../ui/shadCn/popover";
import { Button } from "../ui/shadCn/button";
import { FaCaretDown } from "react-icons/fa";
import { Checkbox } from "../ui/shadCn/checkbox";
import { useState } from "react";

const NatureFilter = () => {
    const [checkIncome, setCheckIncome] = useState(false)
    const [checkExpense, setCheckExpense] = useState(false)

    const handleCheck = (nature: 'income' | 'expense') => {
        nature === 'income' ? setCheckIncome(!checkIncome) : setCheckExpense(!checkExpense)
    }

  return (
    <article>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex border-border bg-card" variant="outline">
            <span className="text-sm">Nature</span>
            <FaCaretDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-5 gap-2">
          <label className="flex gap-x-1 items-center">
            <Checkbox checked={checkIncome} onCheckedChange={()=>handleCheck('income')}/>
            Income
          </label>
          <label className="flex gap-x-1 items-center">
            <Checkbox checked={checkExpense} onCheckedChange={()=>handleCheck('expense')}/>
            Expense
          </label>
        </PopoverContent>
      </Popover>
    </article>
  );
};

export default NatureFilter;

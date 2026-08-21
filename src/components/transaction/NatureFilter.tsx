"use client";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/shadCn/popover";
import { Button } from "../ui/shadCn/button";
import { FaCaretDown } from "react-icons/fa";
import { Checkbox } from "../ui/shadCn/checkbox";
import { useSearchParams, useRouter } from "next/navigation";

const NatureFilter = () => {
  const searchParams = useSearchParams();
  // Getting params with 'nature' key
  const natureParams = searchParams.getAll("nature");
  // Booleans for checked={} in Chackbox
  const checkIncome = natureParams.includes("income");
  const checkExpense = natureParams.includes("expense");
  const router = useRouter();

  // Cahnge handler
  const handleChange = (nature: "income" | "expense") => {
    const params = new URLSearchParams(searchParams);
    // Chacks if params has the nature passed as the function parameter
    const isChecked = natureParams.includes(nature);

    params.delete("nature");

    // Because is a checkbox, if the function parameter exists in the URL it should deleted. Else it should be added.
    const newValues = isChecked
      ? natureParams.filter((n) => n !== nature)
      : [...natureParams, nature];

    newValues.forEach((n) => {
      params.append("nature", n);
    });

    router.push(`?${params.toString()}`);
  };

  return (
    <article>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex border-border bg-card" variant="outline">
            <span className="text-xs font-light">Nature</span>
            <FaCaretDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-5 gap-2">
          <label className="flex gap-x-1 items-center">
            <Checkbox
              checked={checkIncome}
              onCheckedChange={() => handleChange("income")}
            />
            Income
          </label>
          <label className="flex gap-x-1 items-center">
            <Checkbox
              checked={checkExpense}
              onCheckedChange={() => handleChange("expense")}
            />
            Expense
          </label>
        </PopoverContent>
      </Popover>
    </article>
  );
};

export default NatureFilter;

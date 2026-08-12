"use client";

import { Popover, PopoverTrigger, PopoverContent } from "../ui/shadCn/popover";
import { Calendar } from "../ui/shadCn/calendar";
import { Button } from "../ui/shadCn/button";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { addDays } from "date-fns";
import { type DateRange } from "react-day-picker";
import { format } from "date-fns";

const DateFilter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const handleClick = () => {
    const from = dateRange?.from ? format(dateRange?.from, "yyyy-MM-dd") : "";
    const to = dateRange?.to ? format(dateRange?.to, "yyyy-MM-dd") : "";
    if (!from) {
        params.delete("from");
        params.delete("to");
    } else {
      params.set("from", from);
    }

    if (!to) {
        params.delete("to");
    } else {
      params.set("to", to);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex gap-1 border-border" variant="outline">
            <span className="text-sm">Date</span>
            <FaCaretDown className="ml-auto" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-5">
          <Calendar mode="range" selected={dateRange} onSelect={setDateRange} />
          <button onClick={handleClick} className="w-fit mx-auto px-5 py-1 rounded-lg bg-primary text-primary-foreground font-medium cursor-pointer hover:bg-primary/90 transition-colors">Save</button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateFilter;

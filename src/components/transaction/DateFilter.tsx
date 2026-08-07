import { Popover, PopoverTrigger, PopoverContent } from "../ui/shadCn/popover";
import { Calendar } from "../ui/shadCn/calendar";
import { Button } from "../ui/shadCn/button";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { addDays } from "date-fns";
import { type DateRange } from "react-day-picker";

const DateFilter = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  return (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex gap-1 border-border" variant="outline">
            <span className="text-sm">Date</span>
            <FaCaretDown className="ml-auto" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-5">
          <Calendar mode="range" selected={dateRange} onSelect={setDateRange} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateFilter;

"use client";

import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { LuArrowUpRight, LuArrowDownRight  } from "react-icons/lu";
import { formatCurrency } from "@/lib/currencyFormat";
import { useFinanceSummaryQuery } from "@/hooks/queries/transactions/useFinanceSummaryQuery";

type Props = {
  nature: "income" | "expenses";
};

const TransactionSummary = ({ nature }: Props) => {
  const { data } = useFinanceSummaryQuery();
  const amount = nature === "income" ? data?.income : data?.expenses;

  // Conditional rendering data
  const config = {
    income: {
      label: "Total Income",
      Icon: LuArrowUpRight,
      bgClass: "bg-accent",
      textClass: "text-primary",
    },
    expenses: {
      label: "Total Expenses",
      Icon: LuArrowDownRight ,
      bgClass: "bg-destructive/10",
      textClass: "text-destructive",
    },
  };

  const { label, Icon, bgClass, textClass } = config[nature];

  return (
    <div className="flex items-center gap-3 border border-border rounded-xl bg-background p-3">
      {/* Icon */}
      <span
        className={`flex justify-center items-center shrink-0 rounded-lg size-10 ${bgClass}`}
      >
        <Icon className={`${textClass} w-5 h-5 stroke-2`} />
      </span>
      <div>
        {/* Income/expenses label */}
        <p className="text-xs text-muted-foreground">{label}</p>
        {/* Amount */}
        <span className={`text-lg font-semibold ${textClass}`}>
          {formatCurrency(amount ?? '0')}
        </span>
      </div>
    </div>
  );
};

export default TransactionSummary;

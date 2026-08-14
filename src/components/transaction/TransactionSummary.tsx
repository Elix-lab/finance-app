/* 
Renders Total Income or Total Expenses cards based on the props recived(income | expense)
*/

"use client";

import { LuArrowUpRight, LuArrowDownRight  } from "react-icons/lu";
import { formatCurrency } from "@/lib/currencyFormat";
import { useFinanceSummaryQuery } from "@/hooks/queries/transactions/useFinanceSummaryQuery";
import TxNatureIcon from "../ui/TxNatureIcon";

// Types
type Props = {
  nature: "income" | "expense";
};


const TransactionSummary = ({ nature }: Props) => {
  // Getting necessary data
  const { data } = useFinanceSummaryQuery();
  // Change amount value based on the Prop received
  const amount = nature === "income" ? data?.income : data?.expenses;

  // Conditional rendering of Styles
  const config = {
    income: {
      label: "Total Income",
      textClass: "text-primary",
    },
    expense: {
      label: "Total Expenses",
      textClass: "text-destructive",
    },
  };

  const { label, textClass } = config[nature];

  return (
    <article className="flex items-center gap-3 border border-border rounded-xl bg-background p-3">
      {/* Icon */}
      <TxNatureIcon txNature={nature}/>

      <div>
        {/* Label */}
        <p className="text-xs text-muted-foreground">{label}</p>
        {/* Amount */}
        <span className={`text-lg font-semibold ${textClass}`}>
          {formatCurrency(amount ?? '0')}
        </span>
      </div>
    </article>
  );
};

export default TransactionSummary;

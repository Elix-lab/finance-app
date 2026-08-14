/* 
User's Aviable Balance - Result of the subtracting of Total Expenses from Total Income 
*/

"use client";

import { LuWallet } from "react-icons/lu";
import { formatCurrency } from "@/lib/currencyFormat";
import { useFinanceSummaryQuery } from "@/hooks/queries/transactions/useFinanceSummaryQuery";

const AvailableBalance = () => {
  // Gets the necessary data
  const { data } = useFinanceSummaryQuery();
  return (
    <article className="flex flex-col gap-2">
      {/* Icon & lable */}
      <div className="flex items-center gap-2">
        <LuWallet className="size-4 text-muted-foreground"/>
        <p className="text-sm font-medium text-muted-foreground">Available Balance</p>
      </div>
      {/* Aviable Balance amount */}
      <p className="text-3xl font-bold tracking-tight sm:text-5xl">
        {formatCurrency(data?.availableBalance ?? "0")}
      </p>
    </article>
  );
}

export default AvailableBalance;

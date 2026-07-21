"use client";

import { LuWallet } from "react-icons/lu";
import { formatCurrency } from "@/lib/currencyFormat";
import { useFinanceSummaryQuery } from "@/hooks/queries/transactions/useFinanceSummaryQuery";

function AvailableBalance() {
  const { data } = useFinanceSummaryQuery();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <LuWallet className="size-4 text-muted-foreground"/>
        <p className="text-sm font-medium text-muted-foreground">Available Balance</p>
      </div>
      <p className="text-3xl font-bold tracking-tight sm:text-5xl">
        {formatCurrency(data?.availableBalance ?? "0")}
      </p>
    </div>
  );
}

export default AvailableBalance;

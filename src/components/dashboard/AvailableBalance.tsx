"use client";

import { formatCurrency } from "@/lib/currencyFormat";
import { useFinanceSummaryQuery } from "@/hooks/queries/transactions/useFinanceSummaryQuery";

function AvailableBalance() {
    const {data} = useFinanceSummaryQuery();
  return (
    <>
      <p className="text-sm">Available Balance</p>
      <p className="text-2xl font-extrabold">
        {formatCurrency(data?.availableBalance ?? 0)}
      </p>
    </>
  );
}

export default AvailableBalance;

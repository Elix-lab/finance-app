"use client";

import { formatCurrency } from "@/lib/currencyFormat";
import { useFinanceSummaryQuery } from "@/hooks/queries/transactions/useFinanceSummaryQuery";

function AvailableBalance({initialData}) {
    const {data} = useFinanceSummaryQuery(initialData);
  return (
    <>
      <p className="text-sm mb-1">Available Balance</p>
      <p className="text-5xl font-extrabold">
        {formatCurrency(data?.availableBalance ?? 0)}
      </p>
    </>
  );
}

export default AvailableBalance;

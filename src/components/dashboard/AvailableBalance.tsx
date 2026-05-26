"use client";
import { formatCurrency } from "@/lib/currencyFormat";
import { useAvailableBalance } from "@/hooks/queries/transactions/useAvailableBalanceQuery";

function AvailableBalance() {
    const {data: availableBalance} = useAvailableBalance();
  return (
    <>
      <p className="text-sm mb-1">Available Balance</p>
      <p className="text-5xl font-extrabold">
        {formatCurrency(availableBalance ?? 0)}
      </p>
    </>
  );
}

export default AvailableBalance;

"use client";

import TransactionTable from "./TransactionTable";
import { useLatestTransactionQuery } from "@/hooks/queries/transactions/useLatestTransactionsQuery";

const LatestTransactions = () => {
  // Get transactions
  const { data: transactions } = useLatestTransactionQuery();

  // CASE: there is no transactions
  if (!transactions || transactions.length === 0) {
    return (
      <section className="flex justify-center">
        <span className="text-xs font-light text-zinc-700 sm:text-sm">
          Add a new transaction
        </span>
      </section>
    );
  }

  return (
    // TransactionTable
    <TransactionTable transactions={transactions} title="Latest Transactions"/>

  );
};

export default LatestTransactions;

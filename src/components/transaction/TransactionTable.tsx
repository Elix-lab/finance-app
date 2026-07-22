"use client";

import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import TransactionRowActions from "./TransactionRowActions";
import { formatDate, parseISOtoDate } from "@/lib/date";
import { formatCurrency } from "@/lib/currencyFormat";
import { useLatestTransactionQuery } from "@/hooks/queries/transactions/useLatestTransactionsQuery";
import TxNatureIcon from "../ui/TxNatureIcon";

const TransactionTable = () => {
  // Get transactions
  const { data: transactions } = useLatestTransactionQuery();

  // Conditional styling configuration
  const config = {
    income: {
      Icon: IoIosTrendingUp,
      iconBgClass: "bg-green-100",
      iconSymbolColor: "text-primary",
      amountColorClass: "text-primary",
    },
    expense: {
      Icon: IoIosTrendingDown,
      iconBgClass: "bg-red-100",
      iconSymbolColor: "text-destructive",
      amountColorClass: "text-destructive",
    },
  };

  // CASE: there is no transactions
  if (!transactions || transactions.length === 0) {
    return (
      <div className="flex justify-center">
        <span className="text-xs font-light text-zinc-700 sm:text-sm">
          Add a new transaction
        </span>
      </div>
    );
  }

  return (
    <section className="flex flex-col bg-card rounded-2xl p-4 sm:p-6 border border-border gap-2">
      {/* Title */}
      <span className="text-base font-semibold">Last transactions</span>

      {/* Transaction list */}
      <ul>
        {transactions.map((tx) => {
          // style variables
          const { Icon, iconBgClass, iconSymbolColor, amountColorClass } =
            config[tx.nature];

          return (
            <li key={tx.id} className="flex items-center gap-3 px-2 py-3 sm:px-3 hover:bg-muted transition rounded-xl">
              {/* FIRST HALF */}
              {/* icon */}
              <TxNatureIcon txNature={tx.nature} />

              {/* SECOND HALF */}
              <div className="min-w-0 flex-1">
                {/* title */}
                <p className="truncate text-sm font-semibold">
                  {tx.title}
                </p>
                {/* cathegory */}
                <p className="text-xs inline-flex text-muted-foreground bg-muted rounded-full px-2 py-0.5">{tx.category}</p>
              </div>

              {/* THIRD HALF */}
              <div className="text-right">
                {/* amount */}
                <p
                  className={`${amountColorClass} text-sm font-semibold`}
                >
                  {tx.nature === 'income' ? '+' : '-'}{formatCurrency(tx.amount)}
                </p>
                {/* date */}
                <p className="text-xs text-muted-foreground">{formatDate(parseISOtoDate(tx.date))}</p>
              </div>
              <TransactionRowActions transaction={tx} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TransactionTable;

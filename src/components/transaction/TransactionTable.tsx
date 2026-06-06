"use client";

import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import TransactionRowActions from "./TransactionRowActions";
import { formatDate, parseISOtoDate } from "@/lib/date";
import { formatCurrency } from "@/lib/currencyFormat";
import { useLatestTransactionQuery } from "@/hooks/queries/transactions/useLatestTransactionsQuery";

const TransactionTable = () => {
  // Get transactions
  const { data: transactions } = useLatestTransactionQuery();

  // Conditional styling configuration
  const config = {
    income: {
      Icon: IoIosTrendingUp,
      iconBgClass: "bg-green-100",
      iconSymbolColor: "text-income",
      amountColorClass: "text-income",
    },
    expense: {
      Icon: IoIosTrendingDown,
      iconBgClass: "bg-red-100",
      iconSymbolColor: "text-expenses",
      amountColorClass: "text-expenses",
    },
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="flex flex-col gap-1 w-full h-auto bg-card shadow-md rounded-card p-8">
        <span className="text-xl font-bold mb-5">
          Enter a transaction to see it here
        </span>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col gap-1 w-full h-auto bg-card shadow-md rounded-card p-6">
      <span className="text-md font-medium">Last transactions</span>

      <ul>
        {transactions.map((tx) => {
          const { Icon, iconBgClass, iconSymbolColor, amountColorClass } =
            config[tx.nature];

          return (
            <li key={tx.id} className="grid grid-cols-2 border-b py-3">
              {/* first half */}
              <div className="flex items-center gap-2">
                {/* icon */}
                <span
                  className={`flex justify-center items-center p-2  ${iconBgClass} rounded-md`}
                >
                  <Icon className={`text-lg ${iconSymbolColor}`} />
                </span>
                {/* title */}
                <div className="min-w-0">
                  <span className="text-sm font-medium truncate block">
                    {tx.title}
                  </span>
                  {/* cathegory */}
                  <p className="text-xs">{tx.category}</p>
                </div>
              </div>
              {/* second half */}
              <div className="flex justify-end items-center gap-2">
                <div className="text-right">
                  {/* amount */}
                  <span
                    className={`${amountColorClass} text-md font-medium`}
                  >
                    {formatCurrency(Number(tx.amount))}
                  </span>
                  {/* date */}
                  <p className="text-xs">
                    {formatDate(parseISOtoDate(tx.date))}
                  </p>
                </div>
                <TransactionRowActions transaction={tx} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionTable;

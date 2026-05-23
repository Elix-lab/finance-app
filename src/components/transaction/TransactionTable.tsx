import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { auth } from "@/lib/auth";
import { getLatestTxAction } from "@/_actions/transactions/get";
import TransactionSummary from "./TransactionSummary";
import TransactionRowActions from "./TransactionRowActions";
import { formatDate, parseISOtoDate } from "@/lib/date";
import { formatCurrency } from "@/lib/currencyFormat";

const TransactionTable = async () => {
  // Check user session
  const session = await auth();

  // Get transactions
  const transactions = await getLatestTxAction();

  // Conditional styling configuration
  const config = {
    income: {
      Icon: IoIosTrendingUp,
      iconBgClass: "bg-green-100",
      iconSymbolColor: "text-green-500",
      amountColorClass: "text-green-500",
    },
    expense: {
      Icon: IoIosTrendingDown,
      iconBgClass: "bg-red-100",
      iconSymbolColor: "text-red-500",
      amountColorClass: "text-red-500",
    },
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
        <span className="text-xl font-bold mb-5">
          Enter a transaction to see it here
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
        <span className="text-xl font-bold mb-5">Last transactions</span>

        <ul>
          {transactions.map((tx) => {
            const { Icon, iconBgClass, iconSymbolColor, amountColorClass } =
              config[tx.nature];

            return (
              <li key={tx.id} className="grid grid-cols-2 border-b-2 py-5">
                <div className="flex gap-3">
                  <span
                    className={`flex justify-center items-center h-10 w-10 min-h-10 min-w-10  ${iconBgClass} rounded-lg`}
                  >
                    <Icon className={`text-lg ${iconSymbolColor}`} />
                  </span>
                  <div className="min-w-0">
                    <span className="text-base font-semibold truncate block">
                      {tx.title}
                    </span>
                    <p className="text-xs">{tx.category}</p>
                  </div>
                </div>
                <div className="flex justify-end items-center gap-3">
                  <div className="text-right">
                    <span
                      className={`${amountColorClass} text-base font-semibold`}
                    >
                      {formatCurrency(tx.amount.toNumber())}
                    </span>
                    <p className="text-xs">{formatDate(parseISOtoDate(tx.date))}</p>
                  </div>
                  <TransactionRowActions transactionId={tx.id}/>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default TransactionTable;

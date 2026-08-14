/* 
Show a table with user's transactions
*/

import TransactionRowActions from "./TransactionRowActions";
import { formatDate, parseISOtoDate } from "@/lib/date";
import { formatCurrency } from "@/lib/currencyFormat";
import { Transactions } from "@/types/transaction";
import TxNatureIcon from "../ui/TxNatureIcon";
import TransactionTableHeader from "./TransactionTableHeader";

// Props type
type TableProps = {
  transactions: Transactions;
  title: string;
  currentPage?: number;
  hasNextPage?: boolean;
};

const TransactionTable = ({ transactions, title, currentPage, hasNextPage}: TableProps) => {
  // Styles configuration
  const config = {
    income: {
      amountColorClass: "text-primary",
    },
    expense: {
      amountColorClass: "text-destructive",
    },
  };
  return (
    <section className="flex flex-col bg-card rounded-2xl p-4 sm:p-6 border border-border gap-2">
      <TransactionTableHeader title={title} currentPage={currentPage} hasNextPage={hasNextPage}/>
      {/* Transaction list */}
      <ul>
        {transactions
          ? transactions.map((tx) => {
              // style variables
              const { amountColorClass } = config[tx.nature];

              return (
                <li
                  key={tx.id}
                  className="flex items-center gap-3 px-2 py-3 sm:px-3 hover:bg-muted transition rounded-xl"
                >
                  {/* FIRST HALF */}
                  {/* icon */}
                  <TxNatureIcon txNature={tx.nature} />

                  {/* SECOND HALF */}
                  <div className="min-w-0 flex-1">
                    {/* title */}
                    <p className="truncate text-sm font-semibold">{tx.title}</p>
                    {/* cathegory */}
                    <p className="text-xs inline-flex text-muted-foreground bg-muted rounded-full px-2 py-0.5">
                      {tx.category}
                    </p>
                  </div>

                  {/* THIRD HALF */}
                  <div className="text-right">
                    {/* amount */}
                    <p className={`${amountColorClass} text-sm font-semibold`}>
                      {tx.nature === "income" ? "+" : "-"}
                      {formatCurrency(tx.amount)}
                    </p>
                    {/* date */}
                    <p className="text-xs text-muted-foreground">
                      {formatDate(parseISOtoDate(tx.date))}
                    </p>
                  </div>
                  <TransactionRowActions transaction={tx} />
                </li>
              );
            })
          : null}
      </ul>
    </section>
  );
};

export default TransactionTable;

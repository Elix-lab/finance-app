import TransactionSummary from "./TransactionSummary";
import { formatCurrency } from "@/lib/currencyFormat";
import { getSumByNature } from "@/lib/data/transactions";

type Props = {
  balance: number;
  income: number;
  expenses: number;
};

// { balance, income, expenses }: Props
const CurrentBalance = async () => {
  return (
    <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
      {/* Total Balance */}
      <div>
        <p className="text-sm mb-1">Available Balance</p>
        <p className="text-5xl font-extrabold">Aqui va el Aviable Balance</p>
      </div>
      {/* Income and Expenses Totals */}
      <div className="flex flex-wrap gap-5">
        <TransactionSummary nature={"income"} />
        <TransactionSummary nature={"expenses"} />
      </div>
    </div>
  );

  //   return (
  //     <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
  //       {/* Total Balance */}
  //       <div>
  //         <p className="text-sm mb-1">Available Balance</p>
  //         <p className="text-5xl font-extrabold">{formatCurrency(balance)}</p>
  //       </div>
  //       {/* Income and Expenses Totals */}
  //       <div className="flex flex-wrap gap-5">
  //         <TransactionSummary type={"income"} amount={income} />
  //         <TransactionSummary type={"expenses"} amount={expenses} />
  //       </div>
  //     </div>
  //   );
};

export default CurrentBalance;

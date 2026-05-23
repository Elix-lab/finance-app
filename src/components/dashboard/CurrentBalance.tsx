import TransactionSummary from "../transaction/TransactionSummary";
import { formatCurrency } from "@/lib/currencyFormat";
import { getAvailableBalanceAction } from "@/_actions/transactions/get";

type Props = {
  balance: number;
  income: number;
  expenses: number;
};

// { balance, income, expenses }: Props
const CurrentBalance = async () => {
  const aviableBalance = await getAvailableBalanceAction();

  return (
    <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
      {/* Total Balance */}
      <div>
        <p className="text-sm mb-1">Available Balance</p>
        <p className="text-5xl font-extrabold">{formatCurrency(aviableBalance)}</p>
      </div>
      {/* Income and Expenses Totals */}
      <div className="flex flex-wrap gap-5">
        <TransactionSummary nature={"income"} />
        <TransactionSummary nature={"expenses"} />
      </div>
    </div>
  );
};

export default CurrentBalance;

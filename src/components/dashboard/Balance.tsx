import TransactionSummary from "../transaction/TransactionSummary";
import AvailableBalance from "./AvailableBalance";

// { balance, income, expenses }: Props
const Balance = async () => {
  return (
    <div className="flex flex-col gap-1 w-full h-auto bg-card border border-gray-300 shadow-md shadow-gray-100 rounded-card p-6">
      {/* Total Balance */}
      <AvailableBalance />
      {/* Income and Expenses Totals */}
      <div className="flex flex-wrap gap-2">
        <TransactionSummary nature={"income"} />
        <TransactionSummary nature={"expenses"} />
      </div>
    </div>
  );
};

export default Balance;

import TransactionSummary from "../transaction/TransactionSummary";
import AvailableBalance from "./AvailableBalance";

// { balance, income, expenses }: Props
const Balance = async () => {
  return (
    <section className="flex flex-col border border-border rounded-2xl p-6 sm:p-8 bg-card gap-3 sm:gap-6">
      {/* Total Balance */}
      <AvailableBalance />
      {/* Income and Expenses Totals */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1 sm:gap-4">
        <TransactionSummary nature={"income"} />
        <TransactionSummary nature={"expenses"} />
      </div>
    </section>
  );
};

export default Balance;

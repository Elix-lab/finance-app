/* 
  Contains user's Aviable Balance, Total Amount of Income, Total Amount of expenses.
*/

import TransactionSummary from "../transaction/TransactionSummary";
import AvailableBalance from "./AvailableBalance";

const Balance = () => {
  return (
    <section className="flex flex-col border border-border rounded-2xl p-6 sm:p-8 bg-card gap-3 sm:gap-6">
      {/* Total Balance */}
      <AvailableBalance />
      {/* Total income & Total Expenses */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1 sm:gap-4">
        <TransactionSummary nature={"income"} />
        <TransactionSummary nature={"expense"} />
      </div>
    </section>
  );
};

export default Balance;


import TransactionSummary from "../transaction/TransactionSummary";
import AvailableBalance from "./AvailableBalance";
import { getFinanceSummaryAction } from "@/_actions/transactions/get";
type Props = {
  balance: number;
  income: number;
  expenses: number;
};

// { balance, income, expenses }: Props
const Balance = async () => {
  // Using server action to bring data instantly in first render
  const financeSummary = await getFinanceSummaryAction();
  
  return (
    <div className="flex flex-col gap-3 w-full h-auto bg-white shadow-md rounded-xl p-8">
      {/* Total Balance */}
      <AvailableBalance initialData={financeSummary}/>
      {/* Income and Expenses Totals */}
      <div className="flex flex-wrap gap-5">
        <TransactionSummary nature={"income"} />
        <TransactionSummary nature={"expenses"} />
      </div>
    </div>
  );
};

export default Balance;

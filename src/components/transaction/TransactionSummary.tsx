import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { formatCurrency } from "@/lib/currencyFormat";
import { getSumByNatureAction } from "@/_actions/transactions/get";
type Props = {
  nature: "income" | "expenses";
};

const TransactionSummary = async ({ nature }: Props) => {
  const totals = await getSumByNatureAction();
  const amount = nature === "income" ? totals.income : totals.expenses;

  // Conditional rendering data
  const config = {
    income: {
      label: "Total Income",
      Icon: IoIosTrendingUp,
      bgClass: "bg-green-100",
      textClass: "text-green-500",
    },
    expenses: {
      label: "Total Expenses",
      Icon: IoIosTrendingDown,
      bgClass: "bg-red-100",
      textClass: "text-red-500",
    },
  };

  const { label, Icon, bgClass, textClass } = config[nature];

  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <span className={`inline-block p-3 rounded-2xl ${bgClass}`}>
        <Icon className={`text-2xl ${textClass}`} />
      </span>
      <div>
        {/* Income/expenses label */}
        <p className="text-xs">{label}</p>
        {/* Amount */}
        <span className={`text-xl font-semibold ${textClass}`}>
          {formatCurrency(amount)}
        </span>
      </div>
    </div>
  );
};

export default TransactionSummary;

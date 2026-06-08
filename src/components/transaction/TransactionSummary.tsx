'use client'

import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { formatCurrency } from "@/lib/currencyFormat";
import { useFinanceSummaryQuery } from "@/hooks/queries/transactions/useFinanceSummaryQuery";

type Props = {
  nature: "income" | "expenses";
};

const TransactionSummary = ({ nature }: Props) => {
  const {data} = useFinanceSummaryQuery();
  const amount = nature === "income" ? data?.income : data?.expenses;

  // Conditional rendering data
  const config = {
    income: {
      label: "Total Income",
      Icon: IoIosTrendingUp,
      bgClass: "bg-green-100",
      textClass: "text-income",
    },
    expenses: {
      label: "Total Expenses",
      Icon: IoIosTrendingDown,
      bgClass: "bg-red-100",
      textClass: "text-expenses",
    },
  };

  const { label, Icon, bgClass, textClass } = config[nature];

  return (
    <div className="flex items-center gap-2">
      {/* Icon */}
      <span className={`flex justify-center items-center p-2 rounded-md ${bgClass}`}>
        <Icon className={`text-lg ${textClass} sm:text-xl`} />
      </span>
      <div>
        {/* Income/expenses label */}
        <p className="text-xs sm:text-sm">{label}</p>
        {/* Amount */}
        <span className={`text-base font-medium ${textClass} sm:text-lg`}>
          {formatCurrency(amount ?? 0)}
        </span>
      </div>
    </div>
  );
};

export default TransactionSummary;

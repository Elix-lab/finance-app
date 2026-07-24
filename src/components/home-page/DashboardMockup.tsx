import TxNatureIcon from "../ui/TxNatureIcon";
import TxsTableMockup from "./TxsTableMokup";
import { Transaction } from "@/types/transaction";

// Types
type Summaries = {
  nature: "income" | "expense";
  label: string;
  amount: string;
  textColor: string;
}[];
type Buttons = {
  label: string;
  textColor: string;
  bgColor: string;
}[];

// .map data
const summaries: Summaries = [
  {
    nature: "income",
    label: "Total Income",
    amount: "$3,150",
    textColor: "text-primary",
  },
  {
    nature: "expense",
    label: "Total Expenses",
    amount: "$40",
    textColor: "text-destructive",
  },
];
const buttons: Buttons = [
  {
    label: "Add Income",
    textColor: "text-primary-foreground",
    bgColor: "bg-primary",
  },
  {
    label: "Add Expense",
    textColor: "text-white",
    bgColor: "bg-destructive",
  },
];
const transactions: Transaction[] = [
  {
    nature: "income",
    title: "Commissions",
    category: "Income",
    amount: "$650",
    date: "Jun 13",
  },
  {
    nature: "income",
    title: "Salary",
    category: "Income",
    amount: "$2,500",
    date: "Jun 12",
  },
  {
    nature: "expense",
    title: "Streaming Subscription",
    category: "Entertainment",
    amount: "$20",
    date: "Jun 10",
  },
  {
    nature: "expense",
    title: "Cola-Drink 500 Ml",
    category: "Drinks",
    amount: "$5",
    date: "Jun 4",
  },
  {
    nature: "expense",
    title: "Finance book",
    category: "Book",
    amount: "$15",
    date: "Jun 3",
  },
];

function DashboardMockup() {
  return (
    <div className="max-w-md mx-auto lg:max-w-none space-y-4">
      {/* Balance */}
      <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-primary/10 sm:p-6">
        {/* Title */}
        <p className="text-sm font-semibold">Aviable Balance</p>
        {/* Amount */}
        <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          $3,110
        </p>
        {/* Summaries */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-4">
          {summaries.map((summary) => (
            <div key={summary.nature} className="flex items-center gap-2.5">
              <TxNatureIcon txNature={summary.nature} size="small" />
              <div>
                <p className="text-xs text-muted-foreground">{summary.label}</p>
                <p className={`text-sm font-semibold ${summary.textColor}`}>
                  {summary.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {buttons.map((btn) => (
          <div
            key={btn.label}
            className={`flex items-center justify-center rounded-2xl ${btn.bgColor} py-3.5 text-sm font-semibold ${btn.textColor} shadow-sm`}
          >
            <span>{btn.label}</span>
          </div>
        ))}
      </div>
      {/* Transactions */}
      {/* <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-primary/10 sm:p-6">
        <p className="text-sm font-semibold">Last Transactions</p>
        <ul className="mt-3 divide-y divide-border">
        {transactions.map(t => (
            <li key={t.title} className="flex items-center gap-3 py-3">
                <TxNatureIcon txNature={t.nature} size="small"/>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.category}</p>
                </div>
                <div className="text-right">
                    <p className={clsx("text-sm font-semibold", (t.nature === 'income' ? 'text-primary' : 'text-destructive'))}>{t.amount}</p>
                    <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
            </li>
        ))}
        </ul>
      </div> */}
      <TxsTableMockup transactions={transactions}/>
    </div>
  );
}

export default DashboardMockup;

/* 
Iconography of transactions & amount summaries - Home page
*/

import TxsTableMockup from "./TxsTableMokup";
import { Transaction } from "@/types/transaction";
import TxNatureIcon from "../ui/TxNatureIcon";

// Transactions data
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
]

const TxsAndSummaries = () => {
    return(
        <div className="relative max-w-sm mx-auto w-full">
            {/* Transaction table */}
            <TxsTableMockup transactions={transactions}/>
            {/* Income summary */}
            <article className="absolute -top-6 -right-5 flex items-center rounded-2xl px-4 py-3 bg-card border border-border gap-2 shadow-lg">
                <TxNatureIcon txNature='income' size="small"/>
                <div>
                    <p className="text-xs font-semibold">Total Income</p>
                    <p className="text-primary text-sm">$3150</p>
                </div>
            </article>
            {/* Expenses summary */}
            <article className="absolute -bottom-6 -left-5 flex items-center rounded-2xl px-4 py-3 bg-card border border-border gap-2 shadow-lg">
                <TxNatureIcon txNature='expense' size="small"/>
                <div>
                    <p className="text-xs font-semibold">Total Expenses</p>
                    <p className="text-destructive text-sm">$40</p>
                </div>
            </article>
        </div>
    )
}

export default TxsAndSummaries;
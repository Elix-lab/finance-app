import clsx from "clsx";
import TxNatureIcon from "../ui/TxNatureIcon";
import { Transaction } from "@/types/transaction";

type TxsTableMockupProps = {
  transactions: Transaction[];
};

function TxsTableMockup({ transactions }: TxsTableMockupProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-primary/10 sm:p-6">
      <p className="text-sm font-semibold">Last Transactions</p>
      <ul className="mt-3 divide-y divide-border">
        {transactions.map((t) => (
          <li key={t.title} className="flex items-center gap-3 py-3">
            <TxNatureIcon txNature={t.nature} size="small" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{t.title}</p>
              <p className="text-xs text-muted-foreground">{t.category}</p>
            </div>
            <div className="text-right">
              <p
                className={clsx(
                  "text-sm font-semibold",
                  t.nature === "income" ? "text-primary" : "text-destructive",
                )}
              >
                {t.amount}
              </p>
              <p className="text-xs text-muted-foreground">{t.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TxsTableMockup;

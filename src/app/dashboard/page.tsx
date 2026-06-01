import { getFinanceSummaryAction, getLatestTxAction } from "@/_actions/transactions/get";
import TransactionButton from "../../components/transaction/TransactionButton";
import TransactionTable from "@/components/transaction/TransactionTableTxs";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/getQueryClient";
import Balance from "@/components/dashboard/Balance";

type Transaction = {
  id: string;
  nature: "income" | "expense";
  name: string;
  category: string;
  amount: number;
  date: string;
};

const Page = async () => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({queryKey: ["finance-summary"],queryFn: () => getFinanceSummaryAction(),}),
    queryClient.prefetchQuery({queryKey: ["transactions", 'latest'], queryFn: () => getLatestTxAction(),}),
  ])

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex justify-center p-10">
        <div className="flex flex-col gap-6 w-3xl">
          {/* Balance summary component*/}
          <Balance />
          {/* Buttons to manage income and expenses */}
          <div className="grid grid-cols-2 gap-1">
            <TransactionButton buttonNature="income" />
            <TransactionButton buttonNature="expense" />
          </div>
          <TransactionTable />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Page;

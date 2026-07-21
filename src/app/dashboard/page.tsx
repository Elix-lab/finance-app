import {
  getFinanceSummaryAction,
  getLatestTxAction,
} from "@/_actions/transactions/get";
import TransactionButton from "../../components/transaction/TransactionButton";
import TransactionTable from "@/components/transaction/TransactionTable";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/getQueryClient";
import Balance from "@/components/dashboard/Balance";

const Page = async () => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["finance-summary"],
      queryFn: () => getFinanceSummaryAction(),
    }),
    queryClient.prefetchQuery({
      queryKey: ["transactions", "latest"],
      queryFn: () => getLatestTxAction(),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex justify-center">
        <div className="flex flex-col gap-5 w-full max-w-3xl px-4 sm:px-6 pt-6 sm:pt-10">
          {/* Balance summary component*/}
          <Balance />
          {/* Buttons to manage income and expenses */}
          <div className="flex flex-col gap-0.5 sm:grid grid-cols-2">
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

/* Main Dashboard page */

import {
  getFinanceSummaryAction,
  getLatestTxAction,
} from "@/_actions/transactions/get";
import TransactionButton from "../../../components/transaction/TransactionButton";
import LatestTransactions from "@/components/transaction/LatestTransactions";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/getQueryClient";
import Balance from "@/components/dashboard/Balance";

const Page = async () => {
  // queyClient passed to HydrationBoundary
  const queryClient = getQueryClient();

  // Prefetching Dashboard components' data to have everything when it first renders
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
    // HydrationBoundary allow us to work with the Server Cached data
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex justify-center">
        <div className="flex flex-col gap-5 w-full max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
          {/* Balance component*/}
          <Balance />
          {/* Add Income & Add Expenses buttons */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:grid grid-cols-2">
            <TransactionButton buttonNature="income" />
            <TransactionButton buttonNature="expense" />
          </div>
          {/* Last transactions */}
          <LatestTransactions />
        </div>
      </main>
    </HydrationBoundary>
  );
};

export default Page;

/* Main Transactions page - authenticated view */

import TransactionFilters from "@/components/transaction/TransactionFilters";
import TransactionTable from "@/components/transaction/TransactionTable";
import { getTxsAction } from "@/_actions/transactions/get";
import SearchBar from "@/components/transaction/SearchBar";
import { GetTxsParams } from "@/types/transaction";

const Page = async ({searchParams}: {searchParams: Promise<GetTxsParams>}) => {
  // Getting URL params
  const params = await searchParams
  // Making sure is always a number > 0
  const currentPage = Math.max(1, Number(params.page) || 1)
  const txsParams = {
    page: currentPage,
    from: params.from,
    to: params.to,
    minAmount: params.minAmount,
    maxAmount: params.maxAmount,
    nature: params.nature,
    search: params.search
  }
  // Getting the transactions and a boolean in case there are no more pages
  const {transactions, hasNextPage} = await getTxsAction(txsParams);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-2 w-full max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
        <SearchBar />
        {/* Filters */}
        <TransactionFilters />
        {/* Transactions */}
        <TransactionTable transactions={transactions} title="Transactions" currentPage={currentPage} hasNextPage={hasNextPage}/>
      </div>
    </main>
  );
};

export default Page;

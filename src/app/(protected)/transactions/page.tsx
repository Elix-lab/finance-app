import TransactionFilters from "@/components/transaction/TransactionFilters";
import TransactionTable from "@/components/transaction/TransactionTable";
import { getTxsAction } from "@/_actions/transactions/get";
import SearchBar from "@/components/transaction/SearchBar";

const Page = async ({searchParams}: {searchParams: Promise<{page?: string}>}) => {
  const params = await searchParams
  const currentPage = Math.max(1, Number(params.page) || 1)
  const {transactions, hasNextPage} = await getTxsAction(currentPage);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-5 w-full max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
        {/* <SearchBar /> */}
        <TransactionFilters />
        <TransactionTable transactions={transactions} title="Transactions" currentPage={currentPage} hasNextPage={hasNextPage}/>
      </div>
    </main>
  );
};

export default Page;

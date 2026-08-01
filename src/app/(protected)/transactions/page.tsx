import SearchBar from "@/components/transaction/SearchBar";
import { getTxsAction } from "@/_actions/transactions/get";
import TransactionTable from "@/components/transaction/TransactionTable";

const Page = async () => {
  const transactions = await getTxsAction();

  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-5 w-full max-w-3xl px-4 sm:px-6 py-6 sm:py-10">
        <SearchBar />
        {/* <TransactionTable /> */}
        <TransactionTable transactions={transactions} title="Transactions"/>
      </div>
    </main>
  );
};

export default Page;

import SearchBar from "@/components/transaction/SearchBar";
import { getTxsAction } from "@/_actions/transactions/get";

const Page = async () => {
  const transactions = await getTxsAction();

  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-5 w-full max-w-3xl px-4 sm:px-6 pt-6 sm:pt-10">
        <SearchBar />
        {/* <TransactionTable /> */}
        <div className="bg-fuchsia-950 p-10 rounded-xl">
          <ul>
            {transactions
              ? transactions.map((t) => 
              <li key={t.id} className="border">
                <p>{t.title}</p>
                <p>{t.category}</p>
                <p>{t.amount}</p>
                <p>{t.date}</p>
              </li>
            )
              : null}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Page;

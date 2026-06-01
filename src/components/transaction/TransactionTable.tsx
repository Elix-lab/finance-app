import { getLatestTxAction } from "@/_actions/transactions/get";
import TransactionTableTxs from "./TransactionTableTxs";

async function TransactionTable() {
  // Using server action to bring data instantly in first render
  const lastFiveTxs = await getLatestTxAction();

  return <TransactionTableTxs initialData={lastFiveTxs} />;
}

export default TransactionTable;

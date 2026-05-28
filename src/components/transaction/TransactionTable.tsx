import { getLatestTxAction } from "@/_actions/transactions/get";
import TransactionTableTxs from "./TransactionTableTxs";

async function TransactionTable() {
  const lastFiveTxs = await getLatestTxAction();

  return <TransactionTableTxs initialData={lastFiveTxs}/>;
}

export default TransactionTable;

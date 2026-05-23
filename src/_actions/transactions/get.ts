/** GET seerver actions */

'use server'

import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { transactions } from "@/db/schema";
import { getLatestTx, getSingleTx, getAvailableBalance } from "@/lib/data/transactions";

// Get MULTIPLE transactions.
// It has more steps than needed because of thinking about using this query in the transactions page; where the user can see the hisrotic of transactions
export async function getLatestTxAction(
  transactionsLimit: number = 5,
) {
  //Check session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  //Managing filters for selecting the data
  const filters = [eq(transactions.userId, session.user?.id!)];

  //Getting transactions
  return await getLatestTx(filters, transactionsLimit);
}

// Get Aviable Balance
export async function getAvailableBalanceAction() {
  // Check user session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  // Getting Aviable Balance
  return await getAvailableBalance(session!.user!.id!);
}
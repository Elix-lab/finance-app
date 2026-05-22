/** GET seerver actions */

'use server'

import { auth } from "@/lib/auth";
import { eq, gte, lte } from "drizzle-orm";
import { transactions } from "@/db/schema";
import { getTransactions, getSingleTransaction, getAviableBalance } from "@/lib/data/transactions";

// Get SINGLE transaction
export async function getSingleTransactionAction(transactionId: string) {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("Unautorized");
  }
  // Getting transaction
  return await getSingleTransaction(session!.user!.id!, transactionId);
}

// Get MULTIPLE transactions.
// It has more steps than needed because of thinking about using this query in the transactions page; where the user can see the hisrotic of transactions
export async function getTransactionByUserIdAction(
  userId: string,
  transactionsLimit: number = 5,
  startDate?: string | Date,
  endDate?: string | Date,
) {
  //Check session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  //Managing filters for selecting the data
  const filters = [eq(transactions.userId, userId)];

  //Getting transactions
  return await getTransactions(filters, transactionsLimit);
}

// Get Aviable Balance
export async function getAviableBalanceAction() {
  // Check user session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  // Getting Aviable Balance
  return await getAviableBalance(session!.user!.id!);
}
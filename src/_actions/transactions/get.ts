/** GET server actions */

"use server";

import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { transactions } from "@/db/schema";
import {
  getLatestTxs,
  getAvailableBalance,
  getSumByNature,
  getFinanceSummary,
} from "@/lib/data/transactions";

// Get MULTIPLE transactions.
// It has more steps than needed because of thinking about using this query in the transactions page; where the user can see the hisrotic of transactions
export const getLatestTxAction = async (transactionsLimit: number = 5) => {
  //Check session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  //Managing filters for selecting the data
  const filters = [eq(transactions.userId, session.user?.id!)];

  //Getting transactions
  return await getLatestTxs(filters, transactionsLimit);
};

// Get Aviable Balance
export const getAvailableBalanceAction = async () => {
  // Check user session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  // Getting Aviable Balance
  return await getAvailableBalance(session!.user!.id!);
};

// Get sum of Transactions by nature
export const getSumByNatureAction = async () => {
  // Check user session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  // Getting sum by nature
  return getSumByNature(session.user?.id!);
};

// Get Aviable Balance and Totals of income and expenses
export const getFinanceSummaryAction = async () => {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const data = await getFinanceSummary(session.user?.id!);
  return data;
};

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
  getTxs,
} from "@/lib/data/transactions";

// Get last transactions.
export const getLatestTxAction = async (transactionsLimit: number = 5) => {
  //Check session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  const userId = session.user?.id!;

  //Getting transactions
  return await getLatestTxs(userId, transactionsLimit);
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

// Get Transactions
export const getTxsAction = async (page: number = 1, rowNum: number = 20) => {
  // Session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");
  const userId = session.user?.id!;

  const offsetNum = (page - 1) * rowNum 

  const txs = await getTxs(userId, rowNum + 1, offsetNum)

  const hasNextPage = txs.length > rowNum
  const transactions = hasNextPage ? txs.slice(0, rowNum) : txs

  return {transactions, hasNextPage}
};

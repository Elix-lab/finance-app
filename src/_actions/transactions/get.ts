/** GET server actions */

"use server";

import { auth } from "@/lib/auth";
import { type SQL, between, eq, gte, lte } from "drizzle-orm";
import {
  getLatestTxs,
  getAvailableBalance,
  getSumByNature,
  getFinanceSummary,
  getTxs,
} from "@/lib/data/transactions";
import { GetTxsParams } from "@/types/transaction";
import { transactions } from "@/db/schema";

// Get last transactions.
export const getLatestTxAction = async (transactionsLimit: number = 5) => {
  //Check session
  const session = await auth();
  if (!session?.user?.id)
    throw new Error(
      "[_actions/transactions/get][getLatestTxAction] Unauthorized",
    );
  const userId = session.user.id;

  //Getting transactions
  return await getLatestTxs(userId, transactionsLimit);
};

// Get Aviable Balance
export const getAvailableBalanceAction = async () => {
  // Check user session
  const session = await auth();
  if (!session?.user?.id)
    throw new Error(
      "[_actions/transactions/get][getAvailableBalanceAction] Unauthorized",
    );
  const userId = session.user.id;

  // Getting Aviable Balance
  return await getAvailableBalance(userId);
};

// Get sum of Transactions by nature
export const getSumByNatureAction = async () => {
  // Check user session
  const session = await auth();
  if (!session?.user?.id)
    throw new Error(
      "[_actions/transactions/get][getSumByNatureAction] Unauthorized",
    );
  const userId = session.user.id;

  // Getting sum by nature
  return getSumByNature(userId);
};

// Get Aviable Balance and Totals of income and expenses
export const getFinanceSummaryAction = async () => {
  // Check session
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error(
      "[_actions/transactions/get][getFinanceSummaryAction] Unauthorized",
    );
  }
  const userId = session.user.id;

  const data = await getFinanceSummary(userId);
  return data;
};

// Get Transactions
export const getTxsAction = async ({
  page = 1,
  rowNum = 20,
  from,
  to,
  minAmount,
  maxAmount,
}: GetTxsParams) => {
  const filters: SQL[] = [];
  // Session
  const session = await auth();
  if (!session?.user?.id)
    throw new Error("[_actions/transactions/get][getTxsAction] Unauthorized");
  // UserID
  const userId = session.user.id;
  // Rows offset
  const offsetNum = (page - 1) * rowNum;

  // FILTERS MANAGEMENT
  // Date
  if (from) {
    if (!to) {
      filters.push(eq(transactions.date, from));
    } else {
      filters.push(between(transactions.date, from, to));
    }
  }

  // Amount
  if (minAmount && maxAmount) {
    if (minAmount <= maxAmount) {
      filters.push(between(transactions.amount, minAmount, maxAmount));
    } else {
      throw new Error("[_actions/transactions/get][getTxsAction] maxAmount can't be lower than minAmount")
    }
  } else {
    if (minAmount) {
      filters.push(gte(transactions.amount, minAmount));
    }
    if (maxAmount) {
      filters.push(lte(transactions.amount, maxAmount));
    }
  }

  // Query -> rowNum+1 to see if there is any other transaction to show
  const txs = await getTxs(userId, rowNum + 1, offsetNum, filters);
  // Is there a new page? true | false
  const hasNextPage = txs.length > rowNum;
  // Returning the right amount of transactions
  const transactionsResult = hasNextPage ? txs.slice(0, rowNum) : txs;

  return { transactions: transactionsResult, hasNextPage };
};

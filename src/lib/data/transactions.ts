import { db } from "@/db";
import { transactions } from "@/db/schema";
import { sql, eq, desc, and } from "drizzle-orm";
import Decimal from "decimal.js";

// Insert a new Transaction
export async function createTx({
  data,
}: {
  data: {
    userId: string;
    nature: "income" | "expense";
    title: string;
    category: string;
    amount: number;
    date: string;
  };
}) {
  return await db.insert(transactions).values({
    userId: data.userId,
    nature: data.nature,
    title: data.title,
    category: data.category,
    amount: data.amount.toString(),
    date: data.date,
  });
}

// Get MULTIPLE transactions
export async function getLatestTxs(filters: any[], transactionsLimit: number) {
  const LatestTxs = await db
    .select()
    .from(transactions)
    .where(and(...filters))
    .orderBy(desc(transactions.date))
    .limit(transactionsLimit);

  return LatestTxs;
}

// Get a SINGLE transaction
export async function getSingleTx(userId: string, transactionId: string) {
  const SingleTx = await db
    .select()
    .from(transactions)
    .where(
      and(eq(transactions.id, transactionId), eq(transactions.userId, userId)),
    );

  return SingleTx;
}

// Delete transaction
export async function deleteTx(userId: string, transactionId: string) {
  return await db
    .delete(transactions)
    .where(
      and(eq(transactions.id, transactionId), eq(transactions.userId, userId)),
    );
}

// Update transaction
export async function updateTx({
  data,
}: {
  data: {
    id: string;
    userId: string;
    title: string;
    category: string;
    amount: string;
    date: string;
  };
}) {
  return await db
    .update(transactions)
    .set({
      amount: data.amount,
      title: data.title,
      category: data.category,
      date: data.date,
    })
    .where(
      and(eq(transactions.userId, data.userId), eq(transactions.id, data.id)),
    );
}

// Get Sum of transactions by nature
export async function getSumByNature(userId: string) {
  const result = await db
    .select({
      nature: transactions.nature,
      total: sql<number>`SUM(${transactions.amount})`.mapWith(Number),
    })
    .from(transactions)
    .where(eq(transactions.userId, userId))
    .groupBy(transactions.nature);

  return {
    income: result.find((r) => r.nature === "income")?.total ?? 0,
    expenses: result.find((r) => r.nature === "expense")?.total ?? 0,
  };
}

// Get Aviable Balance (income - expenses)
export async function getAvailableBalance(userId: string) {
  const [result] = await db
    .select({
      balance: sql<number>`
      SUM(CASE WHEN ${transactions.nature} = 'income' THEN ${transactions.amount} ELSE 0 END) -
      SUM(CASE WHEN ${transactions.nature} = 'expense' THEN ${transactions.amount} ELSE 0 END)
      `.mapWith(Number),
    })
    .from(transactions)
    .where(eq(transactions.userId, userId));

  return result.balance ?? 0;
}

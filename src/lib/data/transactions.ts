import { db } from "@/db";
import { transactions } from "@/db/schema";
import { sql, eq } from "drizzle-orm";


// Insert a new Transaction
export async function insertTransaction ({data}: {data: {
  userId: string;
  nature: 'income' | 'expense';
  title: string;
  category: string;
  amount: number;
  date: string;
}})
{
    await db.insert(transactions).values({
    userId: data.userId,
    nature: data.nature,
    title: data.title,
    category: data.category,
    amount: data.amount.toString(),
    date: data.date,
  });
}

// Get Sum of transactions by nature
export async function  getSumByNature(userId: string) {
  const result = await db
  .select({
    nature: transactions.nature,
    total: sql<number>`SUM(${transactions.amount})`
  })
  .from(transactions)
  .where(eq(transactions.userId, userId))
  .groupBy(transactions.nature)

  return {
    income: result.find(r => r.nature === 'income')?.total ?? 0,
    expenses: result.find(r=> r.nature === 'expense')?.total ?? 0,
  }
}

// Get Aviable Balance (income - expenses)
export async function getAviableBalance(userId: string) {
  const [result] = await db.select({
    balance:
      sql<number>`
      SUM(CASE WHEN ${transactions.nature} = 'income' THEN ${transactions.amount} ELSE 0 END) -
      SUM(CASE WHEN ${transactions.nature} = 'expense' THEN ${transactions.amount} ELSE 0 END)
      `
  })
  .from(transactions)
  .where(eq(transactions.userId, userId));

  return result.balance ?? 0;
}
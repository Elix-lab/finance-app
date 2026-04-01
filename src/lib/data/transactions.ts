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

  console.log("🔥 SERVER ACTION EJECUTADO");

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
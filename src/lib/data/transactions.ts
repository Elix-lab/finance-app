import { db } from "@/db";
import { transactions } from "@/db/schema";

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
import { db } from "@/db";
import { transactions } from "@/db/schema";

export async function insertTransaction ({data}: {data:any})  {
    await db.insert(transactions).values({
    userId: data.userId,
    nature: data.nature,
    name: data.name,
    category: data.category,
    amount: data.amount.toString(),
    date: data.date,
  });
}
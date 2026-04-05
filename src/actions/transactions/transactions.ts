"use server";

import { db } from "@/db";
import { transactions } from "@/db/schema";
import { auth } from "@/lib/auth";
import { getTransaction, insertTransaction } from "@/lib/data/transactions";
import { revalidatePath } from "next/cache";
import { eq, gte, lte } from "drizzle-orm";

// Insert a new Transaction
export async function insertTransactionAction(formData: FormData) {
  // Bring session
  const session = await auth();
  // Check if user is logged in
  if (!session) {
    throw new Error("You must be logged in to perform this action");
  }
  const userId = session.user?.id;
  if (!userId) {
    throw new Error("User ID is required");
  }
  const amountValue = formData.get("amount");
  if (typeof amountValue !== "string") {
    throw new Error("Invalid amount value");
  }
  const amount = Number(amountValue);
  if (isNaN(amount)) {
    throw new Error("Invalid amount format");
  }
  const nature = String(formData.get("nature")) ?? "";
  const title = String(formData.get("title")) ?? "";
  const category = String(formData.get("category")) ?? "";
  const date = String(formData.get("date")) ?? "";

  const newTransactionData = { amount, title, category, date, userId, nature };

  await insertTransaction({ data: newTransactionData });

  revalidatePath('/dashboard');
}

// Get transactions by userId
export async function getTransactionByUserIdAction(
  userId: string, 
  transactionsLimit: number = 5,
  startDate?: string | Date,
  endDate?: string | Date,
) 
{
  const filters = [eq(transactions.userId, userId)]

  if (startDate && endDate) {
    let fromDate = new Date(startDate);
    let toDate = new Date(endDate);

    if (fromDate > toDate) {
      [fromDate ,toDate] = [toDate, fromDate];
    }

    filters.push(gte(transactions.date, fromDate.toISOString().slice(0,10)));
    filters.push(lte(transactions.date, toDate.toISOString().slice(0,10)));
  
  }

  if (startDate && !endDate) {
    const d = typeof startDate === 'string' ? startDate : startDate.toISOString().slice(0,10);
   
    filters.push(eq(transactions.date, d));
  }
  
  return await getTransaction(filters, transactionsLimit)
}

/** Here are all the server actions that work with Transactions */

"use server";

import { transactions } from "@/db/schema";
import { auth } from "@/lib/auth";
import Decimal from 'decimal.js'
import {
  getTransactions,
  insertTransaction,
  getAviableBalance,
  deleteTransaction,
  updateTransaction,
  getSingleTransaction,
} from "@/lib/data/transactions";
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
  // Creating new transaction object
  const userId = session.user?.id;
  if (!userId) {
    throw new Error("User ID is required");
  }
  const amountValue = formData.get("amount");

  const amount = Number(amountValue);
  if (isNaN(amount)) {
    throw new Error("Invalid amount format");
  }
  const nature = String(formData.get("nature")) ?? "";
  const title = String(formData.get("title")) ?? "";
  const category = String(formData.get("category")) ?? "";
  const date = String(formData.get("date")) ?? "";

  const newTransactionData = { amount, title, category, date, userId, nature };

  const inserted = await insertTransaction({ data: newTransactionData });

  return inserted;
}

// Get MULTIPLE transactions
export async function getTransactionByUserIdAction(
  userId: string,
  transactionsLimit: number = 5,
  startDate?: string | Date,
  endDate?: string | Date,
) {
  //Check user session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const filters = [eq(transactions.userId, userId)];

  if (startDate && endDate) {
    let fromDate = new Date(startDate);
    let toDate = new Date(endDate);

    if (fromDate > toDate) {
      [fromDate, toDate] = [toDate, fromDate];
    }

    filters.push(gte(transactions.date, fromDate.toISOString().slice(0, 10)));
    filters.push(lte(transactions.date, toDate.toISOString().slice(0, 10)));
  }

  if (startDate && !endDate) {
    const d =
      typeof startDate === "string"
        ? startDate
        : startDate.toISOString().slice(0, 10);

    filters.push(eq(transactions.date, d));
  }

  return await getTransactions(filters, transactionsLimit);
}

// Get SINGLE transaction
export async function getSingleTransactionAction(transactionId: string) {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("Unautorized");
  }

  return await getSingleTransaction(session!.user!.id!, transactionId);
}

//Delete transaction
export async function deleteTransactionAction(transactionId: string) {
  //Check session
  const session = await auth();
  if (!session) throw new Error("You must be logged in to perform this action");

  await deleteTransaction(session!.user!.id!, transactionId);

  revalidatePath("/dashboard");
}

// Update transaction
export async function updateTransactionAction(formData: FormData) {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in to perform this action");
  }
  const userId = session.user?.id

  const id = String(formData.get("id")) ?? "";
  const title = String(formData.get("title")) ?? "";
  const category = String(formData.get("category")) ?? "";
  const date = String(formData.get("date")) ?? "";
  const amount = String(formData.get("amount"));
  if(!amount || amount.trim() === '') {
    throw new Error ('Amount required');
  }
  try {
    new Decimal(amount)
  } catch {
    throw new Error('Invalid amount')
  }

  const updatedTransaction = { id, userId , title, category, date, amount };

  await updateTransaction({data: updatedTransaction})

  revalidatePath("/dashboard");
}

// Get Aviable Balance
export async function getAviableBalanceAction() {
  // Check user session
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  // Getting Aviable Balance
  return await getAviableBalance(session!.user!.id!);
}

"use server";

import { db } from "@/db";
import { transactions } from "@/db/schema";
import { getCurrentUser } from "@/lib/auth";

type CreateTransactionInput = {
  userId: string;
  nature: "income" | "expense";
  name: string;
  category: string;
  amount: number;
  date: string;
};

export async function createTransaction(data: CreateTransactionInput) {
  const user = await getCurrentUser();
  await db.insert(transactions).values({
    userId: user.id,
    nature: data.nature,
    name: data.name,
    category: data.category,
    amount: data.amount.toString(),
    date: data.date,
  });
}

"use server";

import { db } from "@/db";
import { transactions } from "@/db/schema";

type CreateTransactionInput = {
  userId: string;
  nature: "income" | "expense";
  name: string;
  category: string;
  amount: number;
  date: string;
};

export async function createTransaction(data: CreateTransactionInput) {
  await db.insert(transactions).values({
    userId: data.userId,
    nature: data.nature,
    name: data.name,
    category: data.category,
    amount: data.amount.toString(),
    date: data.date,
  });
}

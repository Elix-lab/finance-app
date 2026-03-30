"use server";

import { db } from "@/db";
import { transactions } from "@/db/schema";
import { auth } from "@/lib/auth";
import { insertTransaction } from "@/lib/data/transactions";

// Server actions
export async function insertTransactionAction(formData: FormData) {
  // Bring session
  const session = await auth();

  // Check if user is logged in
  if (!session) {
    throw new Error("You must be logged in to perform this action");
  }

  const userId = session.user?.existingId;
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
}

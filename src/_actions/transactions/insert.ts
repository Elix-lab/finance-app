/** INSERT seerver actions */

"use server";

import { auth } from "@/lib/auth";
import { createTx } from "@/lib/data/transactions";

// Create/insert a new Transaction
export async function createTxAction(formData: FormData) {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in to perform this action");
  }

  // Creating new transaction object
  const userId = session.user?.id;
  if (!userId) {
    throw new Error("User ID is required");
  }
  const amount = String(formData.get("amount"));
  // Checking if amount if valid
  const amountValue = Number(amount);
  if (isNaN(amountValue)) {
    throw new Error("Invalid amount format");
  }
  
  const nature = formData.get("nature") as "income" | "expense";
  const title = String(formData.get("title")) ?? "";
  const category = String(formData.get("category")) ?? "";
  const date = String(formData.get("date")) ?? "";

  const newTransactionData = { amount, title, category, date, userId, nature };

  //Inserting transaction
  const inserted = await createTx({ data: newTransactionData });
  return inserted;
}

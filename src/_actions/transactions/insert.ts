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

  //Inserting transaction
  const inserted = await createTx({ data: newTransactionData });
  return inserted;
}

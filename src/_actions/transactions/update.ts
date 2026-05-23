/** UPDATE seerver actions */

"use server";

import { auth } from "@/lib/auth";
import Decimal from "decimal.js";
import { updateTx } from "@/lib/data/transactions";
import { revalidatePath } from "next/cache";

// Update transaction
export async function updateTxAction(formData: FormData) {
  // Check session
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in to perform this action");
  }

  // Creating updated transaction object
  const userId = session.user?.id;
  const id = String(formData.get("id")) ?? "";
  const title = String(formData.get("title")) ?? "";
  const category = String(formData.get("category")) ?? "";
  const date = String(formData.get("date")) ?? "";
  const amount = String(formData.get("amount"));
  if (!amount || amount.trim() === "") {
    throw new Error("Amount required");
  }
  try {
    new Decimal(amount);
  } catch {
    throw new Error("Invalid amount");
  }
  const updatedTransaction = { id, userId, title, category, date, amount };

  // Updating transaction
  await updateTx({ data: updatedTransaction });
  revalidatePath("/dashboard");
}

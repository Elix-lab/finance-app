/** INSERT server actions */

"use server";

import { auth } from "@/lib/auth";
import { createTx } from "@/lib/data/transactions";

// Create/insert a new Transaction
export const createTxAction = async (formData: FormData) => {
  // Check session
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("[_actions/transactions/insert][createTxAction] Unauthorized");
  }

  // Creating new transaction object
  const userId = session.user.id;
  
  const amount = String(formData.get("amount"));
  // Checking if amount if valid
  const amountValue = Number(amount);
  if (isNaN(amountValue)) {
    throw new Error("[_actions/transactions/insert][createTxAction] Invalid amount format");
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

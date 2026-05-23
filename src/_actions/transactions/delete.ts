/** DELETE seerver actions */

"use server";

import { auth } from "@/lib/auth";
import { deleteTx } from "@/lib/data/transactions";

//Delete transaction
export async function deleteTxAction(transactionId: string) {
  //Check session
  const session = await auth();
  if (!session) throw new Error("You must be logged in to perform this action");

  await deleteTx(session!.user!.id!, transactionId);
}

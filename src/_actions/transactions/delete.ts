/** DELETE server actions */

"use server";

import { auth } from "@/lib/auth";
import { deleteTx } from "@/lib/data/transactions";
import { revalidatePath } from "next/cache";

//Delete transaction
export const deleteTxAction = async (transactionId: string) => {
  //Check session
  const session = await auth();
  if (!session?.user?.id) throw new Error('[_actions/transactions/delete][deleteTxAction] Unauthorized');
  const userId = session.user.id

  await deleteTx(userId, transactionId);

  revalidatePath('/dashboard')
}

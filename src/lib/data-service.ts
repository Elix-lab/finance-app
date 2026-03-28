import { db } from "@/db";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";

export async function getUserByEmail(email: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  return user ?? null;
}

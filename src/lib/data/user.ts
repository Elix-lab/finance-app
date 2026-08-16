/* 
Database operations for managing Users Table
Organized under the acronym CRUD
*/

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";

// CREATE
// Create user
export const createUser = async (newUser: {
  name?: string;
  email: string;
  image?: string;
}) => {
  const user = await db
    .insert(users)
    .values({
      name: newUser.name ?? undefined,
      email: newUser.email,
      image: newUser.image ?? undefined,
    })
    .onConflictDoNothing()
    .returning();
  return user[0] ?? null;
}

// READ
// Get user by email
export const getUserByEmail = async (email: string) => {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);
  return user[0] ?? null;
}

// UPDATE
// DELETE
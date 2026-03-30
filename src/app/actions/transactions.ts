"use server";

import { db } from "@/db";
import { transactions } from "@/db/schema";
import { auth } from "@/lib/auth";


// Type definitions
type InsertTransactionInput = {
  nature: "income" | "expense";
  name: string;
  category: string;
  amount: number;
  date: string;
};

// Server actions
export async function insertTransactionAction(data: InsertTransactionInput) {
  const session = await auth();
  if(!session) {
    throw new Error('You must be logged in to perform this action');
  }

  
  
}

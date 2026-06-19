import {
  pgTable,
  uuid,
  text,
  numeric,
  date,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { users } from "../schema";
import { sql } from "drizzle-orm";

const txNatureEnum = pgEnum('transaction_nature', ['income', 'expense'])

export const transactions = pgTable("transactions", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  nature: txNatureEnum().notNull(),
  title: text().notNull(),
  category: text().notNull(),
  amount: numeric().notNull(),
  date: date().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

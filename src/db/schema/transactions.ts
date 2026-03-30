import {
  pgTable,
  uuid,
  text,
  numeric,
  date,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "../schema";
import { sql } from "drizzle-orm";

export const transactions = pgTable("transactions", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  nature: text().notNull(),
  title: text().notNull(),
  category: text().notNull(),
  amount: numeric().notNull(),
  date: date().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

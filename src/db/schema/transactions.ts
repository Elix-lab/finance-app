import { pgTable, uuid, text, numeric, date, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const transactions = pgTable("transactions", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  userId: text("user_id").notNull(),
  nature: text().notNull(),
  name: text().notNull(),
  category: text().notNull(),
  amount: numeric().notNull(),
  date: date().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});
import {
  pgTable,
  text,
  numeric,
  uuid,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const transactions = pgTable("transactions", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: text("user_id").notNull(),

  nature: text("nature", {
    enum: ["income", "expense"],
  }).notNull(),

  name: text("name").notNull(),

  category: text("category").notNull(),

  amount: numeric("amount").notNull(),

  date: date("date").notNull(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
});

import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm"


function generateId(length = 10) {
  // Generate a UUID, remove hyphens, and slice the desired length
  return crypto.randomUUID().replace(/-/g, "").slice(0, length)
}


export const bloodsugar = sqliteTable("bloodsugar", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateId()),
  number: text().notNull(),
  timestamp: text().default(sql`(CURRENT_TIMESTAMP)`),

});

export const insulin = sqliteTable("insulin", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateId()),
  number: text().notNull(),
  type: text("type", { enum: ["long", "short"] }).notNull(),
  timestamp: text().default(sql`(CURRENT_TIMESTAMP)`),
});

export const carbs = sqliteTable("carbs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => generateId()),
  number: text().notNull(),
  timestamp: text().default(sql`(CURRENT_TIMESTAMP)`),
});

import { text, int, sqliteTable } from "drizzle-orm/sqlite-core";

export const clickTable = sqliteTable('clickTracking', {
    id: int().primaryKey({ autoIncrement: true }),
    ipAddress: text().notNull(),
    date: text().notNull(),
    pokeName: text().notNull(),
});
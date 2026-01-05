import * as schema from '~~/server/db/schema';

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle({ connection: { url: process.env.DATABASE_URL! } });

export function useDrizzle() {
    return db;
}

export type ClickTrackTable = typeof schema.clickTable;
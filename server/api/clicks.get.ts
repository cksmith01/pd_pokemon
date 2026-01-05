import { sql } from 'drizzle-orm';
import { useDrizzle } from "~~/server/utils/drizzle";
import { clickTable } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
    const topPokemon = await useDrizzle()
        .select({
            pokeName: clickTable.pokeName,
            clicks: sql<number>`COUNT(*)`
        })
        .from(clickTable)
        .groupBy(clickTable.pokeName)
        .orderBy(sql`COUNT(*) DESC`)
        .limit(10);

    return topPokemon;
});

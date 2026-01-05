import axios from "axios";
import { defineEventHandler, getRequestIP } from 'h3';
import { useDrizzle } from "~~/server/utils/drizzle";
import { format } from 'date-fns';
import { clickTable } from "~~/server/db/schema";


export default defineEventHandler(async (event) => {
    let id = getRouterParam(event, 'id');
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = resp.data;

    const clickTrack: typeof clickTable.$inferInsert = {
        ipAddress: getRequestIP(event) || 'unknown',
        date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        pokeName: data.name,
    };

    //console.log('???', clickTrack); // wip

    await useDrizzle().insert(clickTable).values(clickTrack);

    return data;
});

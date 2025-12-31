import axios from "axios";
import { capitalizer } from '~/assets/js/utils.js';

export default defineEventHandler(async (event) => {

    // UNCOMMENT THIS TO SEE THE SPINNER ON THE CLIENT
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // UNCOMMENT THIS TO SEE THE ERROR RESPONSE ON THE CLIENT;
    // return sendError(event, createError({
    //     statusCode: 500,
    //     statusMessage: "Simulated error message!",
    // }));

    // NOTE: I LIMITED THIS TO 1K RECORDS B/C THE DATA HAS MISSING ELEMENTS HIGHER IN THE ID RANGE
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000');

    const list = new Array();
    res.data.results.forEach((item: { url: string; name: string; }, index: number) => {
        const split = item.url.split('/');
        const pId = split[split.length - 2];
        list.push({
            name: capitalizer(item.name),
            id: pId,
        });
    });
    return list;
});

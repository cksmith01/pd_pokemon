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
    const resp = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000');

    const list = resp.data.results.map(({ url, name }: { url: string; name: string; }) => ({
        name: capitalizer(name),
        id: url.split('/').at(-2),
    }));

    return list;
});

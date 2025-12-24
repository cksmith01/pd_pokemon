import axios from "axios";
import { capitalizer } from '~/assets/js/utils.js';

export default defineCachedEventHandler(async (event) => {

    // await new Promise((resolve) => setTimeout(resolve, 4000));
    // return sendError(event, createError({
    //     statusCode: 500,
    //     statusMessage: "Something went wrong"
    // }));


    //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1350');
    // return res.data.results;

    const list = new Array();
    res.data.results.forEach((item: { url: string; name: string; }, index: any) => {
        const split = item.url.split('/');
        list.push({
            name: capitalizer(item.name),
            id: split[split.length - 2],
        });
    });
    console.log('list', list); // wip
    return list;
}, {
    maxAge: (60 * 60)
});


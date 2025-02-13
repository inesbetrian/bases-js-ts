import { type GIFResponsio } from "../interfaces/gif.responsio";


const apikey = 'HJP3v5iIZzr1TWHX5aOzCkTAWfnjpSCU';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
    .then( response => response.json())
    .then((body: GIFResponsio) => {
        console.log(body.data.images.downsized_still.url)
    })
    .catch(error => console.log(error))
    

    // https://api.giphy.com/v1/gifs/random?api_key=HJP3v5iIZzr1TWHX5aOzCkTAWfnjpSCU
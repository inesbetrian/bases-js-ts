
import axios from 'axios'
// import type { GIFResponsio } from '../interfaces/gif.responsio';

const apikey = 'HJP3v5iIZzr1TWHX5aOzCkTAWfnjpSCU';

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apikey
    }
});

giphyApi.get<GIFResponsio>('/random')
.then( response => console.log( response.data.data.images.downsized_large.url ))
.catch(error => console.log( error ))
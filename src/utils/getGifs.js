const URL = 'https://api.giphy.com/v1/gifs/';
const APIKEY = 'bHWFGmDYKUIMvTL4lB4RWkf86dTvzak1';
const LIMIT = 10;

const getGifs = async(param, type) => {

    const urlSearch = `${URL}search?q=${param}&api_key=${APIKEY}&limit=${LIMIT}`;
    const urlId = `${URL}${param}?api_key=bHWFGmDYKUIMvTL4lB4RWkf86dTvzak1`;

    const url = type === 'categories' ? urlSearch : urlId;
    const res = await fetch(url);
    const data = await res.json();
    const {data: images} = data;

    const gifs = Array.isArray(images) ? images.map(img => {
        return {
            id: img.id,
            src: img.images.downsized.url,
            title: img.title
        }
    }) : {
        id: images.id,
        src: images.images.downsized.url,
        title: images.title
    }

    return gifs;
}

export default getGifs;
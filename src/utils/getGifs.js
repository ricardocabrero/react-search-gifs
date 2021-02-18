
const URL = 'https://api.giphy.com/v1/gifs/search';
const APIKEY = 'bHWFGmDYKUIMvTL4lB4RWkf86dTvzak1';
const LIMIT = 10;

const getGifs = async(categories) => {

    const url = `${URL}?q=${categories}&api_key=${APIKEY}&limit=${LIMIT}`;
    const res = await fetch(url);
    const data = await res.json();
    const {data: images} = data;

    const gifs = images.map(img => {
        return {
            id: img.id,
            src: img.images.downsized.url,
            title: img.title
        }
    });

    return gifs;
}

export default getGifs;
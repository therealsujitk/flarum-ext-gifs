const limit = 20; // The maximum number of gifs per request
var apiKey;

/*
    Function to get an array of trending searches
 */
export async function getTrendingSearches() {
    var searches;
    var url = 'https://api.giphy.com/v1/trending/searches?api_key=' + apiKey;

    await fetch(url)
        .then((response) => response.json())
        .then((content) => {
            if (typeof content.data === 'undefined') {
                console.error('Sorry, there was something wrong with the Giphy API Key.');
                return;
            }

            searches = content['data'];
        });

    return searches;
}

/*
    Function to get an object of trending GIFs
 */
export async function getTrendingGifs(offset = 0, limit = limit) {
    var gifs;

    var url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey + '&limit=' + limit + '&offset=' + offset;

    await fetch(url)
        .then((response) => response.json())
        .then((content) => {
            if (typeof content.data === 'undefined') {
                console.error('Sorry, there was something wrong with the Giphy API Key.');
                return;
            }

            gifs = content['data'];
        });

    return gifs;
}

/*
    Funciton to get an object of GIFs
 */
export async function getGifs(query, offset = 0, limit = limit) {
    var gifs;
    var url =
        'https://api.giphy.com/v1/gifs/search?api_key=' +
        apiKey +
        '&q=' +
        query +
        '&limit=' +
        limit +
        '&offset=' +
        offset;

    await fetch(url)
        .then((response) => response.json())
        .then((content) => {
            if (typeof content.data === 'undefined') {
                console.error('Sorry, there was something wrong with the Giphy API Key.');
                return;
            }

            gifs = content['data'];
        });

    return gifs;
}

/*
    Function to extract the url and title from the object
 */
export function extractGif(gif) {
    var gifType = 'downsized';
    var gif = {
        title: gif['title'],
        url: gif['images'][gifType]['url']
    };

    return gif;
}

/*
    Function to set the Giphy API key
 */
export function setApiKey(key) {
    apiKey = key;
    return true;
}

/*
    Function to return the maximum number of gifs per request
 */
export function getLimit() {
    return limit;
}

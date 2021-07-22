const defaultLimit = 20; // The maximum number of gifs per request
var apiKey;

/*
    Function to get an array of trending searches
 */
export async function getTrendingSearches() {
    var searches;
    var url = 'https://g.tenor.com/v1/trending_terms?key=' + apiKey;

    await fetch(url)
        .then((response) => response.json())
        .then((content) => {
            if (typeof content['results'] === 'undefined') {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
            }

            searches = content['results'];
        });

    return searches;
}

/*
    Function to get an object of trending GIFs
 */
export async function getTrendingGifs(pos = 0, limit = 0) {
    var gifs;

    var url =
        'https://g.tenor.com/v1/trending?key=' +
        apiKey +
        '&media_filter=minimal' +
        '&limit=' +
        (limit != 0 ? limit : defaultLimit) +
        (pos != 0 ? '&pos=' + pos : '');

    await fetch(url)
        .then((response) => response.json())
        .then((content) => {
            if (typeof content['results'] === 'undefined') {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
            }

            gifs = content['results'];
        });

    return gifs;
}

/*
    Funciton to get an object of GIFs
 */
export async function getGifs(query, pos = 0, limit = 0) {
    var gifs;
    var url =
        'https://g.tenor.com/v1/search?key=' +
        apiKey +
        '&media_filter=minimal' +
        '&q=' +
        query +
        '&limit=' +
        (limit != 0 ? limit : defaultLimit) +
        (pos != 0 ? '&pos=' + pos : '');

    await fetch(url)
        .then((response) => response.json())
        .then((content) => {
            if (typeof content['results'] === 'undefined') {
                console.error('Sorry, there was something wrong with the Tenor API Key.');
                return;
            }

            gifs = content['results'];
        });

    return gifs;
}

/*
    Function to extract the url and title from the object
 */
export function extractGif(gif) {
    var gif = {
        id: gif['id'],
        title: gif['title'],
        url: gif['media'][0]['gif']['url']
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
    return defaultLimit;
}

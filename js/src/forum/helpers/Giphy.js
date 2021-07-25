export function initialize(apiKey) {
    this.baseUrl = 'https://api.giphy.com/v1';
    this.defaultLimit = 10;

    this.apiKey = apiKey;
}

export async function getTrendingTerms() {
    var terms;
    var url = `${this.baseUrl}/trending/searches?api_key=${this.apiKey}`;

    await fetch(url)
    .then((response) => response.json())
    .then((content) => {
        if (content.data === undefined) {
            console.error('Sorry, there was something wrong with the Giphy API Key.');
            return;
        }

        terms = content.data;
    });

    return terms;
}

export async function getTrendingGIFs(offset, limit) {
    var obj;
    var url = `${this.baseUrl}/gifs/trending?api_key=${this.apiKey}&limit=${limit || this.defaultLimit}${offset ? `&offset=${offset}` : ''}`;

    await fetch(url)
    .then((response) => response.json())
    .then((content) => {
        if (content.data === undefined) {
            console.error('Sorry, there was something wrong with the Tenor API Key.');
            return;
        }

        obj = {
            gifs: content.data,
            next: offset + (limit || this.defaultLimit)
        };
    });
    
    return obj;
}

export async function getGIFs(query, offset, limit) {
    var obj;
    var url = `${this.baseUrl}/gifs/search?api_key=${this.apiKey}&q=${query}&limit=${limit || this.defaultLimit}${offset ? `&offset=${offset}` : ''}`;

    await fetch(url)
    .then((response) => response.json())
    .then((content) => {
        if (content.data === undefined) {
            console.error('Sorry, there was something wrong with the Tenor API Key.');
            return;
        }

        obj = {
            gifs: content.data,
            next: offset + (limit || this.defaultLimit)
        };
    });
    
    return obj;
}

export async function getGIFsByIDs(ids) {
    var gifs;
    var url = `${this.baseUrl}/gifs?api_key=${this.apiKey}&ids=${ids}`;

    await fetch(url)
    .then((response) => response.json())
    .then((content) => {
        gifs = content.data;
    });

    return gifs;
}

export function extractGIF(gif) {
    return {
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url
    };
}

export function getLimit() {
    return this.defaultLimit;
}


// const limit = 20; // The maximum number of gifs per request
// var apiKey;

// /*
//     Function to get an array of trending searches
//  */
// export async function getTrendingSearches() {
//     var searches;
//     var url = 'https://api.giphy.com/v1/trending/searches?api_key=' + apiKey;

//     await fetch(url)
//         .then((response) => response.json())
//         .then((content) => {
//             if (typeof content.data === 'undefined') {
//                 console.error('Sorry, there was something wrong with the Giphy API Key.');
//                 return;
//             }

//             searches = content['data'];
//         });

//     return searches;
// }

// /*
//     Function to get an object of trending GIFs
//  */
// export async function getTrendingGIFs(offset = 0, limit = limit) {
//     var gifs;

//     var url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey + '&limit=' + limit + '&offset=' + offset;

//     await fetch(url)
//         .then((response) => response.json())
//         .then((content) => {
//             if (typeof content.data === 'undefined') {
//                 console.error('Sorry, there was something wrong with the Giphy API Key.');
//                 return;
//             }

//             gifs = content['data'];
//         });

//     return gifs;
// }

// /*
//     Funciton to get an object of GIFs
//  */
// export async function getGIFs(query, offset = 0, limit = limit) {
//     var gifs;
//     var url =
//         'https://api.giphy.com/v1/gifs/search?api_key=' +
//         apiKey +
//         '&q=' +
//         query +
//         '&limit=' +
//         limit +
//         '&offset=' +
//         offset;

//     await fetch(url)
//         .then((response) => response.json())
//         .then((content) => {
//             if (typeof content.data === 'undefined') {
//                 console.error('Sorry, there was something wrong with the Giphy API Key.');
//                 return;
//             }

//             gifs = content['data'];
//         });

//     return gifs;
// }

// /*
//     Function to get an object of GIFs by their id's
//  */
// export async function getGIFsByIDs(ids) {
//     var gifs;
//     var url =
//         'https://api.giphy.com/v1/gifs?api_key=' +
//         apiKey +
//         '&ids=' +
//         ids;

//     await fetch(url)
//         .then((response) => response.json())
//         .then((content) => {
//             gifs = content['data'];
//         });

//     return gifs;
// }

// /*
//     Function to extract the url and title from the object
//  */
// export function extractGIF(gif) {
//     var gif = {
//         id: gif['id'],
//         title: gif['title'],
//         url: gif['images']['original']['url']
//     };

//     return gif;
// }

// /*
//     Function to set the Giphy API key
//  */
// export function setApiKey(key) {
//     apiKey = key;
//     return true;
// }

// /*
//     Function to return the maximum number of gifs per request
//  */
// export function getLimit() {
//     return limit;
// }

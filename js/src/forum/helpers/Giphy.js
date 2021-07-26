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

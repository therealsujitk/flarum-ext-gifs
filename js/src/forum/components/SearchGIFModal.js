import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

var GifEngine; // Dynamically imported when the modal is created

var textArea, lastQuery, lastOffset;

/*
    Function to append GIFs to the gif columns
 */
function appendGifs(gifs) {
    if (typeof gifs === 'undefined') {
        return;
    }

    var container = document.getElementById('therealsujitk-gifs-container');
    var columns = container.getElementsByClassName('therealsujitk-gifs-gif-column');
    var loadingIndicator = container.getElementsByClassName('LoadingIndicator-container')[0];
    var endMessage = container.getElementsByClassName('therealsujitk-gifs-end')[0];

    for (var i = 0; i < columns.length; ++i) {
        columns[i].style.display = 'inline-block';
    }

    for (var i = 0; i < GifEngine.getLimit(); ++i) {
        var img = document.createElement('img');

        // If the object is undefined, there are no more results
        if (typeof gifs[i] === 'undefined') {
            loadingIndicator.style.display = 'none';
            endMessage.style.display = 'inline-block';

            break;
        }

        var gif = GifEngine.extractGif(gifs[i]);

        img.src = gif['url'];
        img.alt = gif['title'];
        img.addEventListener('click', (e) => {
            var gifEngine = app.forum.attribute('therealsujitk-gifs.gif_engine');
            var embed = `'![${gifEngine[0].toUpperCase()}${gifEngine.slice(1)} - ${e.target.alt}](${e.target.src})`;
            textArea.insertAtCursor(embed);
            app.modal.close();

            // For the Tenor API, it is required to register the shared GIF
            if (gifEngine === 'tenor') {
                var apiKey = app.forum.attribute('therealsujitk-gifs.api_key');
                var url = `https://g.tenor.com/v1/registershare?&key=${apiKey}&q=${lastQuery}&id=${gif['id']}`;
                fetch(url);
            }
        });

        // Currently all screen sizes have 2 columns
        columns[i % 2].insertAdjacentElement('beforeend', img);
    }
}

/*
    Function to clear the gif columns
 */
function clearGifColumns() {
    var container = document.getElementById('therealsujitk-gifs-container');
    var columns = container.getElementsByClassName('therealsujitk-gifs-gif-column');
    var loadingIndicator = container.getElementsByClassName('LoadingIndicator-container')[0];
    var endMessage = container.getElementsByClassName('therealsujitk-gifs-end')[0];

    if (lastOffset == 0) {
        for (var i = 0; i < columns.length; ++i) {
            columns[i].innerHTML = '';
        }

        endMessage.style.display = 'none';
        loadingIndicator.style.display = 'flex';
    }
}

/*
    Function to hide all columns in the container
 */
function hideColumns() {
    var container = document.getElementById('therealsujitk-gifs-container');
    var suggestionColumns = container.getElementsByClassName('therealsujitk-gifs-suggestion-column');
    var gifColumns = container.getElementsByClassName('therealsujitk-gifs-gif-column');
    var favouriteColumns = container.getElementsByClassName('therealsujitk-gifs-favourite-column');

    for (var i = 0; i < suggestionColumns.length; ++i) {
        suggestionColumns[i].style.display = 'none';
        gifColumns[i].style.display = 'none';
        favouriteColumns[i].style.display = 'none';
    }
}

/*
    Function to change the title text (Trending & Favourites)
 */
function changeTitle(text) {
    var title = document.getElementById('therealsujitk-gifs-title');
    var input = document.getElementById('therealsujitk-gifs-search-input');
    var searchButton = document.getElementById('therealsujitk-gifs-search-button');

    title.innerText = text;
    input.style.display = 'none';
    searchButton.style.display = 'none';
    title.style.display = 'block';
}

/*
    Function to go back to the home layout
 */
function goBack() {
    hideColumns();
    clearGifColumns();

    var title = document.getElementById('therealsujitk-gifs-title');
    var input = document.getElementById('therealsujitk-gifs-search-input');
    var backButton = document.getElementById('therealsujitk-gifs-back-button');
    var searchButton = document.getElementById('therealsujitk-gifs-search-button');
    var container = document.getElementById('therealsujitk-gifs-container');
    var suggestionColumns = container.getElementsByClassName('therealsujitk-gifs-suggestion-column');
    var loadingIndicator = container.getElementsByClassName('LoadingIndicator-container')[0];

    input.style.display = 'block';
    searchButton.style.display = 'block';
    backButton.style.display = 'none';
    title.style.display = 'none';
    loadingIndicator.style.display = 'none';

    for (var i = 0; i < suggestionColumns.length; ++i) {
        suggestionColumns[i].style.display = 'inline-block';
    }
}

/*
    Function to display the back button
 */
function showBack() {
    document.getElementById('therealsujitk-gifs-back-button').style.display = 'block';
}

export default class SearchGIFModal extends Modal {
    className() {
        return 'SearchGIFModal';
    }

    title() {
        return app.translator.trans('therealsujitk.forum.gifs.title');
    }

    content() {
        return m(
            '.Modal-body',
            {
                oncreate: async () => {
                    textArea = this.attrs.textArea;
                    var gifEngine = app.forum.attribute('therealsujitk-gifs.gif_engine');

                    if (gifEngine === 'tenor') {
                        GifEngine = require('../helpers/Tenor');
                    } else {
                        GifEngine = require('../helpers/Giphy');
                    }

                    const apiKey = app.forum.attribute('therealsujitk-gifs.api_key');
                    GifEngine.setApiKey(apiKey);

                    var columns = document
                        .getElementById('therealsujitk-gifs-container')
                        .getElementsByClassName('therealsujitk-gifs-suggestion-column');

                    /*
                        Adding the Favourites button
                     */
                    var div = document.createElement('div');

                    div.innerHTML = app.translator.trans('therealsujitk.forum.gifs.favourites');
                    div.addEventListener('click', () => {
                        alert('TBD');
                    });

                    columns[0].insertAdjacentElement('beforeend', div);

                    /*
                        Adding the Trending GIFs button
                     */
                    var gifs = await GifEngine.getTrendingGifs(0, 1);
                    var div = document.createElement('div');

                    var gif = GifEngine.extractGif(gifs[0]);

                    div.innerHTML = app.translator.trans('therealsujitk.forum.gifs.trending');
                    div.style.backgroundImage = 'url(' + gif['url'] + ')';
                    div.addEventListener('click', async (e) => {
                        lastOffset = 0;

                        hideColumns();
                        clearGifColumns();
                        changeTitle(e.target.innerText);
                        showBack();

                        var gifs = await GifEngine.getTrendingGifs();
                        appendGifs(gifs);
                    });

                    columns[1].insertAdjacentElement('beforeend', div);

                    /*
                        Adding buttons for the trending searches along
                        with the first GIF from each search
                     */
                    var trendingSearches = await GifEngine.getTrendingSearches();

                    for (var i = 0; i < trendingSearches.length; ++i) {
                        var gifs = await GifEngine.getGifs(trendingSearches[i], 0, 1);
                        var div = document.createElement('div');

                        var gif = GifEngine.extractGif(gifs[0]);

                        div.innerText = trendingSearches[i];
                        div.style.backgroundImage = 'url(' + gif['url'] + ')';
                        div.addEventListener('click', (e) => {
                            document
                                .getElementById('therealsujitk-gifs-search-input')
                                .getElementsByTagName('input')[0].value = e.target.innerText;
                            document.getElementById('therealsujitk-gifs-search-button').click();
                        });

                        // Currently all screen sizes have 2 columns
                        columns[i % 2].insertAdjacentElement('beforeend', div);
                    }
                }
            },
            m(
                'div',
                {
                    style: 'display: flex;'
                },
                [
                    Button.component({
                        id: 'therealsujitk-gifs-back-button',
                        className: 'Button Button--icon hasIcon',
                        style: 'display: none;',
                        icon: 'fas fa-long-arrow-alt-left',
                        onclick: () => goBack()
                    }),
                    m('div', {
                        id: 'therealsujitk-gifs-title',
                        style: 'display: none;'
                    }),
                    m(
                        'div',
                        {
                            id: 'therealsujitk-gifs-search-input',
                            className: 'Search-input'
                        },
                        [
                            m('input', {
                                className: 'FormControl',
                                placeholder: (() => {
                                    var gifEngine = app.forum.attribute('therealsujitk-gifs.gif_engine');

                                    if (gifEngine === 'tenor') {
                                        return app.translator.trans('therealsujitk.forum.gifs.searchTenor');
                                    } else {
                                        return app.translator.trans('therealsujitk.forum.gifs.searchGiphy');
                                    }
                                })(),
                                onkeydown: (e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault(); // To prevent the page from reloading
                                        document.getElementById('therealsujitk-gifs-search-button').click();
                                    }
                                }
                            })
                        ]
                    ),
                    Button.component(
                        {
                            id: 'therealsujitk-gifs-search-button',
                            className: 'Button Button--primary hasIcon',
                            onclick: async () => {
                                lastQuery = document
                                    .getElementById('therealsujitk-gifs-search-input')
                                    .getElementsByTagName('input')[0]
                                    .value.trim();
                                lastOffset = 0;

                                if (lastQuery === '') {
                                    goBack();
                                    return;
                                }

                                hideColumns();
                                clearGifColumns();
                                showBack();

                                var gifs = await GifEngine.getGifs(lastQuery, lastOffset);
                                appendGifs(gifs);
                            }
                        },
                        app.translator.trans('therealsujitk.forum.gifs.search')
                    )
                ]
            ),
            m(
                'div',
                {
                    id: 'therealsujitk-gifs-container',
                    oncreate: () => {
                        var container = document.getElementById('therealsujitk-gifs-container');

                        container.addEventListener('scroll', async () => {
                            if (
                                container.getElementsByClassName('therealsujitk-gifs-gif-column')[0].style.display ===
                                'none'
                            ) {
                                return;
                            }

                            if (container.scrollTop === container.scrollHeight - container.offsetHeight) {
                                lastOffset += GifEngine.getLimit();

                                var gifs = await (async () => {
                                    var title = document.getElementById('therealsujitk-gifs-title');

                                    if (title.style.display != 'none') {
                                        if (title.innerText == 'Trending GIFs') {
                                            return await GifEngine.getTrendingGifs(lastOffset);
                                        }
                                    }

                                    return await GifEngine.getGifs(lastQuery, lastOffset);
                                })();

                                appendGifs(gifs);
                            }
                        });
                    }
                },
                [
                    m('div', {
                        className: 'therealsujitk-gifs-suggestion-column'
                    }),
                    m('div', {
                        className: 'therealsujitk-gifs-suggestion-column'
                    }),
                    m('div', {
                        className: 'therealsujitk-gifs-gif-column',
                        style: 'display: none'
                    }),
                    m('div', {
                        className: 'therealsujitk-gifs-gif-column',
                        style: 'display: none'
                    }),
                    m('div', {
                        className: 'therealsujitk-gifs-favourite-column',
                        style: 'display: none'
                    }),
                    m('div', {
                        className: 'therealsujitk-gifs-favourite-column',
                        style: 'display: none'
                    }),
                    LoadingIndicator.component(),
                    m(
                        'span',
                        {
                            className: 'therealsujitk-gifs-end',
                            style: 'display: none'
                        },
                        app.translator.trans('therealsujitk.forum.gifs.end')
                    )
                ]
            ),
            m(
                'div',
                {
                    id: 'therealsujitk-gifs-footer'
                },
                [
                    m('img', {
                        src: (() => {
                            var baseUrl = app.forum.attribute('baseUrl');
                            var gifEngine = app.forum.attribute('therealsujitk-gifs.gif_engine') || 'giphy';
                            return baseUrl + '/assets/extensions/therealsujitk-gifs/powered_by_' + gifEngine + '.svg';
                        })()
                    })
                ]
            )
        );
    }
}

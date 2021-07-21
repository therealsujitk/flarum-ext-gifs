import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

const giphyLimit = 20;
var textArea, giphyAPI, query, offset;

function getGiphy() {
    var url = (() => {
        if (query === '') {
            return (
                'https://api.giphy.com/v1/gifs/trending?api_key=' +
                giphyAPI +
                '&limit=' +
                giphyLimit +
                '&offset=' +
                offset
            );
        }

        return (
            'https://api.giphy.com/v1/gifs/search?api_key=' +
            giphyAPI +
            '&q=' +
            query +
            '&limit=' +
            giphyLimit +
            '&offset=' +
            offset
        );
    })();

    var container = document.getElementById('therealsujitk-gifs-container');
    var columns = container.getElementsByClassName('therealsujitk-gifs-column');
    var loadingIndicator = container.getElementsByClassName('LoadingIndicator-container')[0];
    var endMessage = container.getElementsByClassName('therealsujitk-gifs-end')[0];

    if (offset == 0) {
        for (var i = 0; i < columns.length; ++i) {
            columns[i].innerHTML = '';
        }

        endMessage.style.display = 'none';
        loadingIndicator.style.display = 'flex';
    }

    fetch(url)
        .then((response) => response.json())
        .then((content) => {
            if (typeof content.data === 'undefined') {
                console.error('Sorry, there was something wrong with the Giphy API Key.');
                return;
            }

            for (var i = 0; i < giphyLimit; ++i) {
                var gif = document.createElement('img');

                if (typeof content.data[i] === 'undefined') {
                    loadingIndicator.style.display = 'none';
                    endMessage.style.display = 'inline-block';

                    break;
                }

                gif.src = content.data[i].images.downsized.url;
                gif.alt = content.data[i].title;
                gif.addEventListener('click', (e) => {
                    var embed = '![Giphy - ' + e.target.alt + ']' + '(' + e.target.src + ')';
                    textArea.insertAtCursor(embed);
                    app.modal.close();
                });

                // Currently all screen sizes have 2 columns
                columns[i % 2].insertAdjacentElement('beforeend', gif);
            }
        });
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
                oncreate: () => {
                    textArea = this.attrs.textArea;
                    giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
                    query = '';
                    offset = 0;

                    getGiphy();
                }
            },
            m(
                'div',
                {
                    id: 'therealsujitk-gifs-search'
                },
                [
                    m(
                        'div',
                        {
                            className: 'Search-input'
                        },
                        [
                            m('input', {
                                className: 'FormControl',
                                placeholder: app.translator.trans('therealsujitk.forum.gifs.searchGiphy'),
                                onkeydown: (e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault(); // To prevent the page from reloading

                                        query = document
                                            .getElementById('therealsujitk-gifs-search')
                                            .getElementsByTagName('input')[0].value;
                                        offset = 0;

                                        getGiphy();
                                    }
                                }
                            })
                        ]
                    ),
                    Button.component(
                        {
                            className: 'Button Button--primary hasIcon',
                            onclick: () => {
                                query = document
                                    .getElementById('therealsujitk-gifs-search')
                                    .getElementsByTagName('input')[0].value;
                                offset = 0;

                                getGiphy();
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

                        container.addEventListener('scroll', () => {
                            if (container.scrollTop === container.scrollHeight - container.offsetHeight) {
                                offset += giphyLimit;
                                getGiphy();
                            }
                        });
                    }
                },
                [
                    m('div', {
                        className: 'therealsujitk-gifs-column'
                    }),
                    m('div', {
                        className: 'therealsujitk-gifs-column'
                    }),
                    LoadingIndicator.component(),
                    m(
                        'span',
                        {
                            className: 'therealsujitk-gifs-end'
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
                        src:
                            app.forum.attribute('baseUrl') +
                            '/assets/extensions/therealsujitk-gifs/powered_by_giphy.svg'
                    })
                ]
            )
        );
    }
}

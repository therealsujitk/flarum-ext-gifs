import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

const giphyLimit = '40';

var lastResult = 0;

function getGiphyURL(textarea, giphyAPI) {
  let query = document.getElementById('GIFSearchBar').value.trim();
  let url;
  if(query != '')
    url = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyAPI + '&q=' + query + '&limit=' + giphyLimit + '&offset=' + lastResult.toString(10);
  else
    url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + giphyAPI + '&limit=' + giphyLimit + '&offset=' + lastResult.toString(10);

  fetch(url).then(response => response.json()).then(content => {
    let resultsLeft = document.getElementById('LeftResults');
    let resultsRight = document.getElementById('RightResults');

    for(var i=0; i<parseInt(giphyLimit)+lastResult; i+=2) {
      let imgL = document.createElement('img');
      let imgR = document.createElement('img');

      document.getElementsByClassName('temp-text')[0].textContent = '';

      if(typeof content.data[0] === 'undefined') {
        document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.noresults');
      }

      imgL.src = content.data[i].images.downsized.url;
      imgL.alt = content.data[i].title;
      imgL.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0%; margin-right: 0.3125%; vertical-align: top; cursor: pointer;';
      resultsLeft.insertAdjacentElement("beforeend", imgL);
      imgL.onclick = () => {
        let embed = '![Giphy - ' + imgL.alt + ']' + '(' + imgL.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };
      imgR.src = content.data[i+1].images.downsized.url;
      imgR.alt = content.data[i+1].title;
      imgR.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0.3125%; margin-right: 0%; vertical-align: top; cursor: pointer;';
      resultsRight.insertAdjacentElement("beforeend", imgR);
      imgR.onclick = () => {
        let embed = '![Giphy - ' + imgR.alt + ']' + '(' + imgR.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };
    }
    document.getElementById('LoadMore').style.visibility = 'visible';
  });
}

export default class SearchGIFModal extends Modal {
  className() {
    return '';
  }

  title() {
    return app.translator.trans('therealsujitk.forum.gifs.title');
  }

  content() {
    return m('.Modal-body[style]', m('span[style = position: absolute; left: 50%; top: 200px; transform: translate(-50%, -50%);]', {
      id: 'flarum-loading',
      class: 'temp-text'
    }),
    m('div', [m('table[style = vertical-align: top; horizontal-align: right;]', {
      align: 'center',
      width: '100%'
    },[
      m('td', [
        m('div[style = margin-right: 1.25%;]', { class: 'Search-input' }, [
          m('input[style = width: 100%;]', {
            id: 'GIFSearchBar',
            class: 'FormControl',
            type: 'search',
            autocomplete: 'off',
            placeholder: app.translator.trans('therealsujitk.forum.gifs.searchbar')
        })])]),
      m('td[style = width: 0px;]', [
        m('.Form-group[style = margin-left: 1.25%;]', [
          Button.component({
            className: 'Button Button--primary',
            children: 'Search',
            onclick: () => {
              lastResult = 0;
              document.getElementById('LeftResults').innerHTML = '';
              document.getElementById('RightResults').innerHTML = '';
              document.getElementById('LeftResults').scrollTop = 0;
              document.getElementsByClassName('temp-text')[0].textContent = app.translator.trans('therealsujitk.forum.gifs.loading');
              document.getElementById('LoadMore').style.visibility = 'hidden';
              const textarea = this.props.textArea;
              const giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
							getGiphyURL(textarea, giphyAPI);
            }
          })
        ])
      ])])]), m('div[style = margin-top: 10px; margin-bottom: 10px; min-height: 45vh; height: 45vh; overflow: auto;]', [
          m('table', {
            width: '100%'
          }, [
            m('td', {
              id: 'LeftResults',
              width: '50%'
            }),
            m('td', {
              id: 'RightResults',
              width: '50%'
            })
          ]),
          m('buttonspan[style = position: relative; left: 50%; transform: translate(-50%, 0%); margin-top: 10px; visibility: hidden;]', {
            class: 'Button',
            type: 'Button',
            title: 'Load More',
            onclick: () => {
              lastResult += parseInt(giphyLimit);
              const textarea = this.props.textArea;
              const giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
							getGiphyURL(textarea, giphyAPI);
            }
          }, [m('span', {class: 'Button-label', id: 'LoadMore'}, 'Load More')])
        ]), m('div[style = padding-top: 10px; padding-bottom: 30px;]', [m('img[style = float: right;]', {
          src: '../vendor/therealsujitk/flarum-ext-gifs/assets/powered_by_giphy.png'
        })])
    );
  }
}

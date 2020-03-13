import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

//const giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy-api-key');
//const giphyAPI = 'EaAoOgAPBLHeUOenh1Dx7GZ0qMMoO6M3';
const giphyLimit = '100';

function getGiphyURL(textarea, giphyAPI) {
  let query = document.getElementById('GIFSearchBar').value;
  let url;
  if(query != '')
    url = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyAPI + '&q=' + query +'&limit=' + giphyLimit;
  else
    url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + giphyAPI + '&limit=' + giphyLimit;

  console.log(url);
  fetch(url).then(response => response.json()).then(content => {
    let resultsLeft = document.getElementById('LeftResults');
    let resultsRight = document.getElementById('RightResults');
    resultsLeft.innerHTML = '';
    resultsRight.innerHTML = '';

    for(var i=0; i<parseInt(giphyLimit, 10); i+=2) {
      if(query != document.getElementById('GIFSearchBar').value)
        getGiphyURL(textarea, giphyAPI);

      let imgL = document.createElement('img');
      let imgR = document.createElement('img');

      imgL.src = content.data[i].images.downsized.url;
      imgL.alt = content.data[i].title;
      imgL.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0%; margin-right: 0.625%; vertical-align: top; cursor: pointer;';
      resultsLeft.insertAdjacentElement("beforeend", imgL);
      imgL.onclick = () => {
        let embed = '![Giphy - ' + imgL.alt + ']' + '(' + imgL.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };
      imgR.src = content.data[i+1].images.downsized.url;
      imgR.alt = content.data[i+1].title;
      imgR.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0.625%; margin-right: 0%; vertical-align: top; cursor: pointer;';
      resultsRight.insertAdjacentElement("beforeend", imgR);
      imgR.onclick = () => {
        let embed = '![Giphy - ' + imgR.alt + ']' + '(' + imgR.src + ')';
        app.modal.close();
        textarea.insertAtCursor(embed);
      };
    }
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
    return m('.Modal-body', m('div', { class: 'Search', align: 'center' }, [
        m('div', { class: 'Search-input' }, [
          m('input[style = width: 100%;]', {
            id: 'GIFSearchBar',
            class: 'FormControl',
            type: 'search',
            autocomplete: 'off',
            placeholder: app.translator.trans('therealsujitk.forum.gifs.searchGiphy'),
            oninput: () => {
							const textarea = this.props.textArea;
              const giphyAPI = app.forum.attribute('therealsujitk-gifs.giphy_api_key');
							getGiphyURL(textarea, giphyAPI);
            }
        })])]), m('div[style = "margin-top: 10px; margin-bottom: 10px; min-height: 40vh; height: 40vh; overflow: auto;"]', [
          m('table', [
            m('td', {
              id: 'LeftResults',
              width: '50%'
            }),
            m('td', {
              id: 'RightResults',
              width: '50%'
            })
          ])
        ]), m('div[style = padding-top: 10px; padding-bottom: 30px;]', [m('img[style = float: right;]', {
          src: '../vendor/therealsujitk/flarum-ext-gifs/assets/powered_by_giphy.png'
        })])
    );
  }
}

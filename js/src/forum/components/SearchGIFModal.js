import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

const giphyAPI = '';
const giphyLimit = '200';

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
            placeholder: app.translator.trans('therealsujitk.forum.gifs.searchGiphy'),
            oninput: () => {
              let query = document.getElementById('GIFSearchBar').value;
              let url;

              if(query == '')
                url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + giphyAPI + '&limit=' + giphyLimit;
              else
                url = 'https://api.giphy.com/v1/gifs/search?api_key=' + giphyAPI + '&q=' + query +'&limit=' + giphyLimit;

              fetch(url).then(response => response.json()).then(content => {
                let resultsLeft = document.getElementById('LeftResults');
                let resultsRight = document.getElementById('RightResults');
                resultsLeft.innerHTML = '';
                resultsRight.innerHTML = '';

                for(var i=0; i<parseInt(giphyLimit, 10); i+=2) {
                  if(document.getElementById('GIFSearchBar').value != query)
                    break;

                  let imgL = document.createElement('img');
                  let imgR = document.createElement('img');

                  imgL.src = content.data[i].images.downsized.url;
                  imgL.alt = content.data[i].title;
                  imgL.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0%; margin-right: 0.625%; vertical-align: top; cursor: pointer;';
                  resultsLeft.insertAdjacentElement("beforeend", imgL);
                  imgL.onclick = () => {
                    let embed = '![Giphy - ' + imgL.alt + ']' + '(' + imgL.src + ')';
                    app.modal.close();
                    this.props.textArea.insertAtCursor(embed);
                  };
                  imgR.src = content.data[i+1].images.downsized.url;
                  imgR.alt = content.data[i+1].title;
                  imgR.style = 'min-width: 97.5%; width: 97.5%; border-radius: 5px; margin: 1.25%; margin-left: 0.625%; margin-right: 0%; vertical-align: top; cursor: pointer;';
                  resultsRight.insertAdjacentElement("beforeend", imgR);
                  imgR.onclick = () => {
                    let embed = '![Giphy - ' + imgR.alt + ']' + '(' + imgR.src + ')';
                    app.modal.close();
                    this.props.textArea.insertAtCursor(embed);
                  };
                }
              });
            }
        })])]), m('div[style = "margin-top: 10px; margin-bottom: 10px; min-height: 40vh; max-height: 50vh; overflow: auto;"]', [
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
        ])
    );
  }
}

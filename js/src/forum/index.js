import {extend} from 'flarum/extend';
import app from 'flarum/app';
import Button from 'flarum/components/Button';
import TextEditor from 'flarum/components/TextEditor';
import SearchGIFModal from './components/SearchGIFModal';

app.initializers.add('therealsujitk/flarum-ext-gifs', () => {
	extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add('therealsujitk-gifs', m('button', {
					type: 'buton',
					class: 'Button Button--icon Button--link hasIcon',
					title: app.translator.trans('therealsujitk.forum.gifs.title'),
					onclick: () => {
						app.modal.show(new SearchGIFModal({
							textArea: this
						}));
					}
				}, [
				m('i', { class: 'fas fa-photo-video' }),
				m('span', { class: 'Button-label' }, app.translator.trans('therealsujitk.forum.gifs.label')),
			]),
		10);
    });
});

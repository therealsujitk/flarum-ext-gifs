import SettingsModal from 'flarum/components/SettingsModal';

export default class GIFsSettingsModal extends SettingsModal {
	className() {
		return 'Modal--small';
	}

	title() {
		return app.translator.trans('therealsujitk.admin.gifs.title');
	}

	form() {
		return [
				m('div[class = Form-group]', [
					m('label', app.translator.trans('therealsujitk.admin.gifs.giphyAPIkey')),
					m('input', {
						class: 'FormControl',
						bidi: this.setting('therealsujitk-gifs.giphy_api_key')
					}),
					m('hr'), m('div', [
						m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringA')), m('a', { href: 'https://github.com/therealsujitk', target: '_blank' }, '@therealsujitk'), 
						m('br'),
						m('p[style = display: inline;]', app.translator.trans('therealsujitk.admin.about.stringB')), m('a', { href: 'https://paypal.me/suchitrakumar', target: '_blank' }, 'PayPal')
					])
				])
    	];
	}
}

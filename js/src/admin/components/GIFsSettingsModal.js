import SettingsModal from 'flarum/components/SettingsModal';

export default class GIFsSettingsModal extends SettingsModal {
	title() {
		return 'Hello World!';
	}

	form() {
		return [
        m('.Form-group', 'Hello World')
    ];
	}
}

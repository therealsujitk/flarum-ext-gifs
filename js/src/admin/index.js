import app from 'flarum/app';
import GIFsSettingsModal from './components/GIFsSettingsModal';

app.initializers.add('therealsujitk/flarum-ext-gifs', () => {
  app.extensionSettings['therealsujitk-gifs'] = () => app.modal.show(new GIFsSettingsModal());
});

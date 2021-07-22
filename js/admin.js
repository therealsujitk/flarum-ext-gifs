import app from 'flarum/common/app';

app.initializers.add('therealsujitk-gifs', (app) => {
    app.extensionData.for('therealsujitk-gifs')
        .registerSetting({
            setting: 'therealsujitk-gifs.gif_engine',
            type: 'select',
            options: {
                'giphy': 'Giphy',
                'tenor': 'Tenor'
            },
            default: 'giphy',
            label: app.translator.trans('therealsujitk.admin.gifs.gifEngine')
        })
        .registerSetting({
            setting: 'therealsujitk-gifs.api_key',
            type: 'text',
            label: app.translator.trans('therealsujitk.admin.gifs.apiKey')
        });
});

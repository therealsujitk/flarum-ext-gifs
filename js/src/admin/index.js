import app from 'flarum/common/app';

const prefix = 'therealsujitk-gifs';

app.initializers.add(prefix, (app) => {
    app.extensionData.for(prefix)
        .registerSetting({
            setting: `${prefix}.engine`,
            type: 'select',
            options: {
                'giphy': 'Giphy',
                'tenor': 'Tenor'
            },
            default: 'giphy',
            label: app.translator.trans(`${prefix}.admin.engine`)
        })
        .registerSetting({
            setting: `${prefix}.api_key`,
            type: 'text',
            label: app.translator.trans(`${prefix}.admin.apiKey`)
        });
});

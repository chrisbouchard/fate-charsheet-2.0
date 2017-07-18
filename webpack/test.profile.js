const { DefinePlugin } = require('webpack');

module.exports = resolve => ({
    appEntry: resolve('src/index.dynamic'),

    typescriptLoaders: [
        {
            loader: 'awesome-typescript-loader',
            options: {
                useBabel: true,
                useCache: false
            }
        },
        { loader: 'ng-router-loader' }
    ],

    extraConfig: {
        devtool:  '#cheap-module-source-map',
        plugins: [
            new DefinePlugin({
                __PRODUCTION__: false
            })
        ]
    }
});

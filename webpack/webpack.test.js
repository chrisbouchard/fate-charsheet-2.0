const { DefinePlugin } = require('webpack');

module.exports = resolve => ({
    entry: {
        'app': [resolve('src/index.dynamic')],
    },
    plugins: [
        new DefinePlugin({
            __PRODUCTION__: false
        })
    ]
});

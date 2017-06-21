const webpack = require('webpack');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;

module.exports = require => ({
    plugins: [
        new DefinePlugin({
            __PRODUCTION__: false
        }),
        new CommonsChunkPlugin({
            names: ['polyfill', 'manifest'],
            minChunks: Infinity
        })
    ]
});

const webpack = require('webpack');

const { CheckerPlugin } = require('awesome-typescript-loader');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;

module.exports = require => ({
    devtool:  '#cheap-module-source-map',
    plugins: [
        new CheckerPlugin(),
        new DefinePlugin({
            __PRODUCTION__: false
        }),
        new CommonsChunkPlugin({
            names: ['polyfill', 'manifest'],
            minChunks: Infinity
        })
    ]
});

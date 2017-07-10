const webpack = require('webpack');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;

module.exports = require => ({
    devtool:  '#cheap-module-source-map',
    plugins: [
        new DefinePlugin({
            __PRODUCTION__: false
        }),
        new CommonsChunkPlugin({
            names: ['polyfill', 'manifest'],
            minChunks: Infinity
        })
    ],

    devServer: {
        historyApiFallback: true,
        publicPath: '',
        stats: {
            children: false,
            chunks: false,
            colors: true,
            hash: false,
            timings: true,
            version: false,

            maxModules: Infinity,
            exclude: [
                /\.\/node_modules\//
            ]
        }
    }
});

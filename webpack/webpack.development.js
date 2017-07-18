const { CheckerPlugin } = require('awesome-typescript-loader');

const webpack = require('webpack');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;

module.exports = resolve => ({
    entry: {
        'app': [resolve('src/index.dynamic')],
    },
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

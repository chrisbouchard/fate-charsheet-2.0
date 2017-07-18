const { NgcWebpackPlugin } = require('ngc-webpack');

const webpack = require('webpack');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin, NoEmitOnErrorsPlugin, UglifyJsPlugin } = webpack.optimize;

module.exports = resolve => ({
    entry: {
        'app': [resolve('src/index.aot')],
    },
    devtool: 'hidden-source-map',
    plugins: [
        new NgcWebpackPlugin({
            tsConfig: resolve('tsconfig.json')
        }),
        new DefinePlugin({
            __PRODUCTION__: true
        }),
        new NoEmitOnErrorsPlugin(),
        new CommonsChunkPlugin({
            names: ['polyfill', 'manifest'],
            minChunks: Infinity
        }),
        new UglifyJsPlugin()
    ]
});

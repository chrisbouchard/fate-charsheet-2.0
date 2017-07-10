const webpack = require('webpack');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin, NoEmitOnErrorsPlugin, UglifyJsPlugin } = webpack.optimize;

module.exports = require => ({
    devtool: 'hidden-source-map',
    plugins: [
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

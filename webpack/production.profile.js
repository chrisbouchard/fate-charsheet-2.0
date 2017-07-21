const { NgcWebpackPlugin } = require('ngc-webpack');

const webpack = require('webpack');

const { DefinePlugin, NoEmitOnErrorsPlugin } = webpack;
const { CommonsChunkPlugin, UglifyJsPlugin } = webpack.optimize;

module.exports = resolve => ({
    appEntry: resolve('src/index.aot'),

    typescriptLoaders: [
        {
            loader: 'awesome-typescript-loader',
            options: {
                useBabel: true,
                useCache: false
            }
        },
        {
            loader: 'ng-router-loader',
            options: {
                aot: true,
                genDir: 'aot'
            }
        }
    ],

    extraConfig: {
        devtool: 'source-map',
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
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    ie8: false
                }
            })
        ]
    }
});

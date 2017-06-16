const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { AotPlugin } = require('@ngtools/webpack');
const { ContextReplacementPlugin, NoEmitOnErrorsPlugin, ProgressPlugin, ProvidePlugin } = require('webpack');

const extractCssPluginInstance = new ExtractTextPlugin('[name].css');


module.exports = resolve => ({
    entry: {
        'app': ['./src'],
        'polyfill': ['./src/polyfill']
    },

    output: {
        chunkFilename: 'chunk-[name].js',
        filename: '[name].js',
        path: resolve('dist'),
        publicPath: '',
        sourceMapFilename: '[name].js.map'
    },

    stats: {
        children: false,
        chunks: false,
        colors: true,
        hash: false,
        timings: true,
        version: false
    },

    resolve: {
        alias: {
            'semantic': resolve('semantic/dist')
        },
        extensions: ['.ts', '.js']
    },

    module: {
        noParse: [
            /node_modules\/jquery/,
            /node_modules\/reflect-metadata/,
            /node_modules\/zone\.js/
        ],

        rules: [
            {
                include: [
                    resolve('src'),
                    resolve('test')
                ],
                rules: [
                    {
                        test: /\.ts$/,
                        use: [
                            { loader: 'babel-loader' },
                            { loader: '@ngtools/webpack' },
                            { loader: 'tslint-loader' }
                        ]
                    },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader'
                    },

                    {
                        test: /\.html$/,
                        loader: 'raw-loader'
                    },
                    {
                        test: /\.haml$/,
                        loader: 'haml-haml-loader'
                    },

                    {
                        test: /\.css$/,
                        loader: 'raw-loader'
                    },
                    {
                        test: /\.less/,
                        use: [
                            { loader: 'raw-loader' },
                            { loader: 'less-loader' }
                        ]
                    }
                ]
            },

            {
                include: [
                    resolve('node_modules'),
                    resolve('semantic')
                ],
                rules: [
                    {
                        test: /\.css$/,
                        loader: extractCssPluginInstance.extract(['css-loader'])
                    },
                    {
                        test: /\.less$/,
                        loader: extractCssPluginInstance.extract(['css-loader', 'less-loader'])
                    }
                ]
            },

            {
                test: /\.(eot|png|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new NoEmitOnErrorsPlugin(),
        new ProgressPlugin(),
        new AotPlugin({
            tsConfigPath: resolve('tsconfig.json')
        }),
        new ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            resolve('src'),
            {} // a map of your routes
        ),
        extractCssPluginInstance,
        new ProvidePlugin({ 'jQuery': 'jquery', '$': 'jquery' }),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: '!!haml-haml-loader!./src/index.haml'
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
            version: false
        }
    }
});

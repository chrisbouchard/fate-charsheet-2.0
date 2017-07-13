const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WatchIgnorePlugin = require('watch-ignore-webpack-plugin');

const { NgcWebpackPlugin } = require('ngc-webpack');
const { ContextReplacementPlugin, ProvidePlugin } = require('webpack');

const extractCssPluginInstance = new ExtractTextPlugin('[name].css');

const fileList = [
    'manifest.js',
    'polyfill.js',
    'app.js'
];

function indexOfOrInfinity(array, object) {
    const index = array.indexOf(object);

    if (index === -1) {
        return Infinity;
    }

    return index;
}


module.exports = resolve => ({
    entry: {
        'app': [resolve('src')],
        'polyfill': [resolve('src/polyfill')]
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
        version: false,

        maxModules: Infinity,
        exclude: [
            /\.\/node_modules\//
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        noParse: [
            /node_modules\/jquery/,
            /node_modules\/web-animations-js/,
            /node_modules\/zone\.js/
        ],

        rules: [
            {
                include: [
                    resolve('aot'),
                    resolve('src'),
                    resolve('test')
                ],
                rules: [
                    {
                        test: /\.ts$/,
                        use: [
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
                            },
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
                        test: /\.less$/,
                        use: [
                            { loader: 'raw-loader' },
                            { loader: 'less-loader' }
                        ]
                    }
                ]
            },

            {
                include: [
                    resolve('node_modules')
                ],
                exclude: [
                    resolve('node_modules/semantic-ui-less')
                ],
                rules: [
                    {
                        test: /\.css$/,
                        loader: extractCssPluginInstance.extract({
                            fallback: 'style-loader',
                            use: [
                                { loader: 'css-loader' }
                            ]
                        })
                    },
                    {
                        test: /\.less$/,
                        loader: extractCssPluginInstance.extract({
                            fallback: 'style-loader',
                            use: [
                                { loader: 'css-loader' },
                                { loader: 'less-loader' }
                            ]
                        })
                    }
                ]
            },

            {
                include: [
                    resolve('node_modules/semantic-ui-less')
                ],
                rules: [
                    {
                        test: /\.less$/,
                        loader: extractCssPluginInstance.extract({
                            fallback: 'style-loader',
                            use: [
                                { loader: 'css-loader' },
                                {
                                    loader: 'semantic-ui-less-loader',
                                    options: {
                                        siteFolder: resolve('semantic/site'),
                                        themeConfigPath: resolve('semantic/theme.config')
                                    }
                                }
                            ]
                        })
                    }
                ]
            },

            {
                test: /\.(eot|gif|jpeg|jpg|png|svg|ttf|woff|woff2)$/,
                // TODO: url-loader?
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                }
            }
        ]
    },

    plugins: [
        new NgcWebpackPlugin({
            tsConfig: resolve('tsconfig.json')
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
            template: '!!haml-haml-loader!./src/index.haml',
            chunksSortMode(left, right) {
                const leftIndex = Math.min.apply(null, left.files.map(file => indexOfOrInfinity(fileList, file)));
                const rightIndex = Math.min.apply(null, right.files.map(file => indexOfOrInfinity(fileList, file)));

                return (leftIndex - rightIndex) || 0;
            }
        }),
        new WatchIgnorePlugin([
            resolve('.awcache'),
            resolve('aot'),
            resolve('dist'),
            resolve('node_modules')
        ])
    ]
});


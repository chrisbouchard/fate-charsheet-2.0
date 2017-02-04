var path = require('path');
var webpack = require('webpack');

var { ContextReplacementPlugin, ProvidePlugin } = webpack;

var { CommonsChunkPlugin, DedupePlugin, UglifyJsPlugin } = webpack.optimize;

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCssPluginInstance = new ExtractTextPlugin('[name].css');

var HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultEnv = {
  profile: "development",
};

module.exports = (env = defaultEnv) => ({
  entry: {
    'app': ['./src'],
    'polyfill': ['./src/polyfill']
  },

  output: {
    chunkFilename: 'chunk-[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    sourceMapFilename: '[name].js.map'
  },

  devtool: devtool(env),
  stats: stats(env),

  resolve: {
    alias: {
      'semantic': path.resolve(__dirname, 'semantic/dist')
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
        include: path.resolve(__dirname, 'src'),
        rules: [
          {
            test: /\.ts$/,
            use: [
              { loader: 'ng-router-loader' },
              {
                loader: 'awesome-typescript-loader',
                options: {
                  useBabel: true,
                  useCache: true
                }
              },
              { loader: 'angular2-template-loader' },
              { loader: 'tslint-loader' }
            ]
          },
          {
            test: /\.js$/,
            loader: 'babel-loader'
          },

          {
            test: /\.html$/,
            loader: 'html-loader'
          },
          {
            test: /\.haml$/,
            use: [
              { loader: 'haml-haml-loader' }
            ]
          },

          {
            test: /\.css$/,
            use: [
              { loader: 'css-loader' }
            ]
          },
          {
            test: /\.less/,
            use: [
              { loader: 'css-loader' },
              { loader: 'less-loader' }
            ]
          }
        ]
      },

      {
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'semantic'),
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
          name:'assets/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    ...commonPlugins(env),
    ...productionPlugins(env)
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    publicPath: '',
    stats: stats()
  }
});


function devtool(env) {
  if (isProduction(env)) {
    return 'source-map';
  }

  return 'eval-source-map';
}

function stats(env) {
  return {
    children: false,
    chunks: false,
    colors: true,
    hash: false,
    timings: true,
    version: false
  };
}

function commonPlugins(env) {
  return [
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, 'src'),
      {} // a map of your routes
    ),
    extractCssPluginInstance,
    new DefinePlugin({
      __PRODUCTION__: JSON.stringify(isProduction(env))
    }),
    new ProvidePlugin({ 'jQuery': 'jquery', '$': 'jquery' }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: '!!haml-haml-loader!./src/index.haml'
    }),
    new CommonsChunkPlugin({
      names: ['polyfill', 'manifest'],
      minChunks: Infinity
    })
  ];
}

function productionPlugins(env) {
  if (!isProduction(env)) {
    return [];
  }

  return [
    new UglifyJsPlugin()
  ];
}

function isProduction(env) {
  return env.profile === 'production';
}


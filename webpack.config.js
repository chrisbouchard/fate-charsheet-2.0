var path = require('path');
var webpack = require('webpack');

//var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var DefinePlugin = webpack.DefinePlugin;
var ProvidePlugin = webpack.ProvidePlugin;

var DedupePlugin = webpack.optimize.DedupePlugin;
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  verbose: true,
  displayErrorDetails: true,
  devtool: devtool(),

  stats: {
    colors: true,
    reasons: true
  },

  entry: {
    'app': ['./src']
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    sourceMapFilename: '[name].js.map'
  },

  resolve: {
    alias: {
      'semantic': path.join(__dirname, 'semantic/dist')
    },
    extensions: ['', '.ts', '.js']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint',
        exclude: [path.join(__dirname, 'node_modules')]
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'babel!ts',
        exclude: [path.join(__dirname, 'node_modules')]
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [
          path.join(__dirname, 'node_modules'),
          path.join(__dirname, 'semantic')
        ]
      },
      {
        test: /\.css$/,
        loader: 'file?name=styles/[hash].[ext]',
      },
      {
        test: /\.haml$/,
        loader: 'file?name=templates/[hash].html!extract!haml-haml'
      },
      {
        test: /\.html$/,
        loader: 'file?name=templates/[hash].[ext]'
      },
      {
        test: /\.less$/,
        loader: 'file?name=styles/[hash].[ext]!less'
      },
      {
        test: /\.(eot|png|svg|ttf|woff|woff2)$/,
        loader: 'url?limit=5000&name=assets/[hash].[ext]'
      }
    ],
    noParse: [
      path.join(__dirname, 'node_modules', 'zone.js'),
      path.join(__dirname, 'node_modules', 'reflect-metadata')
    ]
  },

  plugins: [
    ...commonPlugins(),
    ...productionPlugins()
  ]
}

function devtool() {
  if (!isProduction()) {
    return undefined;
  }

  return '#cheap-module-eval-source-map';
}

function commonPlugins() {
  return [
    new DefinePlugin({
      __PRODUCTION__: JSON.stringify(isProduction())
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      template: '!!haml-haml!./src/index.haml'
    }),
    new ProvidePlugin({ 'jQuery': 'jquery', '$': 'jquery' }),
  ];
}

function productionPlugins() {
  if (!isProduction()) {
    return [];
  }

  return [
    new DedupePlugin(),
    new OccurenceOrderPlugin(),
    // TODO: Figure out how to enable this without breaking things.
    new UglifyJsPlugin()
  ];
}

function isProduction() {
  return process.env.NODE_ENV === 'production';
}


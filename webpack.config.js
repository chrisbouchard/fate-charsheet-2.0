var path = require('path');
var webpack = require('webpack');

var DefinePlugin = webpack.DefinePlugin;
var ProvidePlugin = webpack.ProvidePlugin;

var DedupePlugin = webpack.optimize.DedupePlugin;
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCssPluginInstance = new ExtractTextPlugin('[name].css');

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
        loader: 'awesome-typescript',
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
        test: /\.html$/,
        loader: 'file?name=templates/[name].[hash:8].html'
      },
      {
        test: /\.haml$/,
        loader: 'file?name=templates/[name].[hash:8].html!extract!haml-haml'
      },

      {
        test: /\.css$/,
        loader: 'file?name=templates/[name].[hash:8].css!extract!css',
        include: [
          path.join(__dirname, 'src')
        ]
      },
      {
        test: /\.less/,
        loader: 'file?name=templates/[name].[hash:8].css!extract!css!less',
        include: [
          path.join(__dirname, 'src')
        ]
      },

      {
        test: /\.css$/,
        loader: extractCssPluginInstance.extract('css'),
        exclude: [
          path.join(__dirname, 'src')
        ]
      },
      {
        test: /\.less$/,
        loader: extractCssPluginInstance.extract('css!less'),
        exclude: [
          path.join(__dirname, 'src')
        ]
      },

      {
        test: /\.(eot|png|svg|ttf|woff|woff2)$/,
        loader: 'file?name=assets/[name].[hash:8].[ext]'
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
    extractCssPluginInstance,
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
    new UglifyJsPlugin()
  ];
}

function isProduction() {
  return process.env.NODE_ENV === 'production';
}


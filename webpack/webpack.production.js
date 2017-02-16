const webpack = require('webpack');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin, UglifyJsPlugin } = webpack.optimize;

module.exports = require => ({
  plugins: [
    new DefinePlugin({
      __PRODUCTION__: true
    }),
    new CommonsChunkPlugin({
      names: ['polyfill', 'manifest'],
      minChunks: Infinity
    }),
    new UglifyJsPlugin()
  ]
});


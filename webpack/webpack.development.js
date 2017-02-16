const webpack = require('webpack');

const { DefinePlugin } = webpack;
const { CommonsChunkPlugin } = webpack.optimize;

module.exports = require => ({
  devtool: 'source-map',

  plugins: [
    new DefinePlugin({
      __PRODUCTION__: false
    }),
    new CommonsChunkPlugin({
      names: ['polyfill', 'manifest'],
      minChunks: Infinity
    })
  ]
});


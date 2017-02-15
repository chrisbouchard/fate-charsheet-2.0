var webpack = require('webpack');

var { DefinePlugin } = webpack;
var { UglifyJsPlugin } = webpack.optimize;

module.exports = require => ({
  plugins: [
    new DefinePlugin({
      __PRODUCTION__: true
    }),
    new UglifyJsPlugin()
  ]
});


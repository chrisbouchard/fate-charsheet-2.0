const { DefinePlugin } = require('webpack');

module.exports = require => ({
  plugins: [
    new DefinePlugin({
      __PRODUCTION__: false
    }),
  ]
});


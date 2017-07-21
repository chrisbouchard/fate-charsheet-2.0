const webpackConfig = require('./webpack.config');

module.exports = webpackConfig({profile: 'test-prod'});

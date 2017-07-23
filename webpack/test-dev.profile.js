const nodeExternals = require('webpack-node-externals');

const { DefinePlugin } = require('webpack');

const profileFn = require('./development.profile.js');

module.exports = resolve => {
    const profile = profileFn(resolve);
    return {
        appEntry: resolve('test/index.dynamic'),
        typescriptLoaders: profile.typescriptLoaders,

        extraConfig: {
            target: 'node',
            externals: [nodeExternals()],
            plugins: [
                new DefinePlugin({
                    __PRODUCTION__: false
                })
            ]
        }
    };
};

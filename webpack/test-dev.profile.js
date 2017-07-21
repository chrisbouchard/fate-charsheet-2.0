const nodeExternals = require('webpack-node-externals');

const { CheckerPlugin } = require('awesome-typescript-loader');
const { DefinePlugin } = require('webpack');

const profileFn = require('./development.profile.js');

module.exports = resolve => {
    const profile = profileFn(resolve);
    return {
        appEntry: profile.appEntry,
        typescriptLoaders: profile.typescriptLoaders,

        extraConfig: {
            target: 'node',
            externals: [nodeExternals()],
            plugins: [
                new CheckerPlugin(),
                new DefinePlugin({
                    __PRODUCTION__: false
                })
            ]
        }
    };
};

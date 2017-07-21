const nodeExternals = require('webpack-node-externals');

const profileFn = require('./development.profile.js');

module.exports = resolve => {
    const profile = profileFn(resolve);
    return {
        appEntry: profile.appEntry,
        typescriptLoaders: profile.typescriptLoaders,

        extraConfig: {
            target: 'node',
            externals: [nodeExternals()],
            ...profile.extraConfig
        }
    };
};

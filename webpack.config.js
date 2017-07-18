const { resolve } = require('path');
const merge = require('webpack-merge');

const coreConfig = require('./webpack/webpack.core.js');

const developmentProfile = require('./webpack/development.profile.js');
const productionProfile = require('./webpack/production.profile.js');
const testProfile = require('./webpack/test.profile.js');

module.exports = env => {
    const profile = getProfile(env.profile)(path => resolve(__dirname, path));

    return merge([
        coreConfig(profile, path => resolve(__dirname, path)),
        profile.extraConfig
    ]);
};

function getProfile(profileName) {
    switch (profileName) {
        case 'development':
            return developmentProfile;

        case 'test':
            return testProfile;
    }

    return productionProfile;
}


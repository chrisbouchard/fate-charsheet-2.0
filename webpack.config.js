const { resolve } = require('path');
const merge = require('webpack-merge');

const coreConfig = require('./webpack/webpack.core.js');

const developmentProfile = require('./webpack/development.profile.js');
const productionProfile = require('./webpack/production.profile.js');
const testDevProfile = require('./webpack/test-dev.profile.js');
const testProdProfile = require('./webpack/test-prod.profile.js');

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

        case 'test-dev':
            return testDevProfile;

        case 'test-prod':
            return testProdProfile;
    }

    return productionProfile;
}


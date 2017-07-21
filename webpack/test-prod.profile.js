const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const { NgcWebpackPlugin } = require('ngc-webpack');

const { DefinePlugin, NoEmitOnErrorsPlugin } = webpack;
const { UglifyJsPlugin } = webpack.optimize;

const profileFn = require('./production.profile.js');

module.exports = resolve => {
    const profile = profileFn(resolve);
    return {
        appEntry: profile.appEntry,
        typescriptLoaders: profile.typescriptLoaders,

        extraConfig: {
            devtool: 'source-map',
            target: 'node',
            externals: [nodeExternals()],
            plugins: [
                new NgcWebpackPlugin({
                    tsConfig: resolve('tsconfig.json')
                }),
                new DefinePlugin({
                    __PRODUCTION__: true
                }),
                new NoEmitOnErrorsPlugin(),
                new UglifyJsPlugin({
                    parallel: true,
                    sourceMap: true,
                    uglifyOptions: {
                        ie8: false
                    }
                })
            ]
        }
    };
};


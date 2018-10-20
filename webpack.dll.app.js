const webpack = require("webpack")
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        publicPath: "/webpack-demo/"
    },
    module: {
        rules: [
            {
                test: /.(css|less|scss)$/,
                sideEffects: true
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        }),
        new AddAssetHtmlPlugin({ filepath: require.resolve("./dist/vendor.dll.js") }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        runtimeChunk: 'single'
    }
});
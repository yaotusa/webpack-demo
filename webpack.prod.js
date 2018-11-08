const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require("clean-webpack-plugin")
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
        new CleanWebpackPlugin(["dist"]),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
/*
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            },
*/
            minSize: 5000,
            chunks: 'all'
        }
    }
});
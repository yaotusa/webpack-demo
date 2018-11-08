const path = require("path")
const webpack = require("webpack")
const merge = require('webpack-merge');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: "/"
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname),
            manifest: require('./vendor-manifest.json')
        }),
        new AddAssetHtmlPlugin({ filepath: path.resolve(__dirname, "./dist/*.dll.js") })
    ]
});
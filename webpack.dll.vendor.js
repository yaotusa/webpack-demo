const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const vendors = [
    "antd",
    "axios",
    "babel-polyfill",
    "lodash",
    "npm-publish-test-yaot",
    "react",
    "react-dom",
    "react-loadable",
    "react-router",
    "react-router-dom"
];

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[chunkhash].dll.js',
        library: '[name]_[chunkhash]',
    },
    entry: {
        vendor: vendors,
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new webpack.DllPlugin({
            path: path.join(__dirname, '[name]-manifest.json'),
            name: '[name]_[chunkhash]',
            context: __dirname,
        }),
    ],
};
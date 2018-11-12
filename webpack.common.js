const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: [
            "babel-polyfill",
            "./src/index.js"
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Study",
            template: path.resolve(__dirname, "src/index.html")
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.ProvidePlugin({
        })
    ],
    resolve: {
        alias: {
            Common: path.resolve(__dirname, "src/common/"),
            Mock: path.resolve(__dirname, "mock/")
        }
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    }

}
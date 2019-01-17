const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: [
            "./index.js"
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Study",
            favicon: path.resolve(__dirname, "src/favicon.ico"),
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
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[path]___[name]__[local]',
                        }
                    },
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            localIdentName: '[path]___[name]__[local]',
                        }
                    },
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    }

}
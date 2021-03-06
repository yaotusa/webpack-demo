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
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[path]___[name]__[local]',
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll-manifest.json')
        }),
        new AddAssetHtmlPlugin({ filepath: path.resolve(__dirname, "./dist/dll.*.js") }),
        new webpack.DefinePlugin({
        })
    ]
});
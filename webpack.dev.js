const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const PrettierPlugin = require("prettier-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase:  './public',
        hot: true,
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new ErrorOverlayPlugin(),
        new PrettierPlugin({
            parser: "babel",
            printWidth: 120,             // Specify the length of line that the printer will wrap on.
            tabWidth: 4,                // Specify the number of spaces per indentation-level.
            useTabs: true,              // Indent lines with tabs instead of spaces.
            bracketSpacing: true,
            extensions: [ ".js", ".jsx" ],
            jsxBracketSameLine: true,
            trailingComma: "none",                 // Print semicolons at the ends of statements.
            encoding: 'utf-8'           // Which encoding scheme to use on files
        }),
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv({
            path: path.resolve(process.cwd(),".env"),
            systemvars:true
        })
    ]
});

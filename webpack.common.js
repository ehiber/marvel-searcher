const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        },
        {
            test:/\.html$/,
            use:{
                loader:"html-loader"
            }
        },
        {
          test: /\.(css|scss)$/, use: [{
                loader: "style-loader" // creates style nodes from JS strings
          }, {
                loader: "css-loader" // translates CSS into CommonJS
          }, {
                loader: "sass-loader" // compiles Sass to CSS
          }, {
                loader: MiniCSSExtractPlugin.loader
          }, {
                loader: 'resolve-url-loader',
        }]
         
        }, //css only files
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        }, //for images
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    },
                },
            ],    
        } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
        favicon: 'Marvel.ico',
        template:"index.html",
        filename:"./index.html",
    }),
    new MiniCssExtract({
        filename:'[name].css',
        chunkFilename:'[id].css',
    }),
    new OptimizeCssAssetsPlugin(),
    
  ]
};
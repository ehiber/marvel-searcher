const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtract = require('mini-css-extract-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';


const webpackConfig ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[hash].js'
    },
    mode: "production",
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader'],
                resolve: {
                    extensions: [".js",".jsx"]
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:"html-loader"
                }
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use: [
                    {
                      loader: MiniCssExtract.loader,
                      options: {
                        publicPath: (resourcePath, context) => {
                            return path.relative(path.dirname(resourcePath), context) + '/'
                            },
                        }
                    },
                    "css-loader"
                ]
               
            },
            { 
                test: /\.scss$/, 
                loader: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
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
            },
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
            }
        ]
    },
    devtool: 'source-map',
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            favicon: 'Marvel.ico',
            template:"./public/index.html",
            filename:"./index.html",
        }),
        new MiniCssExtract({
            filename:'[name].css',
            chunkFilename:'[id].css',
        }),
        new OptimizeCssAssetsPlugin(),
    ],
};
module.exports = webpackConfig;
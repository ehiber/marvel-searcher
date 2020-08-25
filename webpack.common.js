const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig ={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.[hash].js',
        publicPath: '/'
    },
    resolve:{
        extensions:['*','.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use: ['babel-loader', 'eslint-loader'],
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
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            favicon: 'Marvel.ico',
            template:"./index.html",
            filename:"./index.html",
        }),
        new MiniCssExtract({
            filename:'[name].css',
            chunkFilename:'[id].css',
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.ProvidePlugin()
    ],
};
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: './'
    },
    plugins: [
        new Dotenv({
            path: path.resolve(process.cwd(),".env"),
            systemvars:true
        })
    ]
});

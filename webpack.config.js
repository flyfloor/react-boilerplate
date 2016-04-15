var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new ExtractTextPlugin("app.css"),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // })
    ],
    module: {
        loaders: [
            { 
                test: /\.less$/,
                loader: "style!css!less", // ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, { 
                test: /\.css$/,
                loader: "style!css" // ExtractTextPlugin.extract("style-loader", "css-loader") 
            },  { 
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel" 
            }
        ]
    },
    
};
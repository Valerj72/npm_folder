const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
    },
   devServer: {
     static: './dist',
     port: 3001
   },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
      }, { template: "./src/index.html" }),
    ],
    module: {
        rules: [
            {
                 use: [{
                     loader: HtmlWebpackPlugin.loader,
                     options: {
                         esModule: true,
                     }
                 }, 'css-loader'],
                 test: /\.css$/
            }
        ]
    }
};

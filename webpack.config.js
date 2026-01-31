const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    module: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
       static: './dist',
       port: 3001,
       stats: {
           children: false
       },
       contentBase: './dist',
       hot: true,
    },
    output: {
        filename: "main.js"
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new ESLintPlugin(),
        new HtmlWebpackPlugin( options: {
            template: "./src/index.pug",
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css=loader'],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    }
};

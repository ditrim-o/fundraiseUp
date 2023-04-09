const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.ts'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        port: 9000,
    },
}
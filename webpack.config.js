const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: './src/app.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://ilos.local/'
        }),
        new webpack.ProvidePlugin({
            'PIXI': 'pixi.js',
        })
    ],

    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development'
};

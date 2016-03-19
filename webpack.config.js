'use strict'

var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')

module.exports = {
    context: __dirname + "/src",
    devtool: debug ? 'inline-source-map' : null,
    entry: './js/client.js',
    output: {
        path: __dirname + 'src',
        filename: 'client.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: []
                }
            }
        ]
    },
    plugins: debug ? [] : [
    ]
}

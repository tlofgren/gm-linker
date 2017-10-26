var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.(ico)$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /(\.css|\.scss)$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader?sourceMap!sass-loader"
                })
            },
            {
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                loaders: [ 'raw-loader', 'sass-loader']
            },
            {
                test: /\.xlf$/,
                loader: 'raw-loader'
            },
            {
                test:  /\.json|\.map$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.zip$/,
                loader: 'file-loader?name=assets/zip/[name].[ext]'
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./src'),
            {}
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
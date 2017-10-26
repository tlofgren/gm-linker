var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AotPlugin = require('@ngtools/webpack').AotPlugin;
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var ReplaceStringPlugin = require('./plugins/replace-string-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    module: {
        rules: [
            {   test: /\.ts$/,
                loaders: [ '@ngtools/webpack' ]
            }
        ]
    },

    output: {
        path: helpers.root('dist/dev'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
        new ReplaceStringPlugin({
            pattern: "<!--LANGUAGE_CONTEXT -->",
            replacement: "<base href=\"/dev/\">"
        }),
        new AotPlugin({
            tsConfigPath: './src/tsconfig-aot.json',
            entryModule: helpers.root('./src/app/app.module#AppModule'),
            i18nFile: "./src/assets/locale/messages.dev.xlf",
            i18nFormat: "xlf",
            locale: "dev"

        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('./assets/[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false // workaround for ng2
            }
        })
    ]
});
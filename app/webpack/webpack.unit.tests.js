var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
			test: /\.ts$/,
			loaders: [
				{
				loader: 'awesome-typescript-loader',
				options: { configFileName: helpers.root('src', 'tsconfig.json') }
				}, 'angular2-template-loader'
			],
			exclude: [
                'node_modules'
			]
        },
        {
			test: /\.ts$/,
			loaders: [ 
				{
				loader: 'istanbul-instrumenter-loader'
				}            
			],
			exclude: [
                /\.spec\.ts$/
			],
			enforce: 'post'
        },  
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'null-loader'
        },
        {
            test: /\.(ico)$/,
            loader: 'null-loader'
        },
        {
            test: /(\.css|\.scss)$/,
            loader: ExtractTextPlugin.extract({
                loader: "css-loader!sass-loader"
            })
        },
        {
            test: /\.xlf$/,
            loader: 'null-loader'
        },
        {
            test:  /\.json|\.map$/,
            loader: 'ignore-loader'
        },
        {
            test: /\.zip$/,
            loader: 'null-loader'
        }
      ]
    },
    plugins: [
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)@angular/,
			helpers.root('src'), // location of your src
			{} // a map of your routes
		),
		new webpack.SourceMapDevToolPlugin({
			filename: null, // if no value is provided the sourcemap is inlined
			test: /\.(ts|js)($|\?)/i // process .js and .ts files only
		})
    ]
}
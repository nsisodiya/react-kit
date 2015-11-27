var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8000',
		'webpack/hot/only-dev-server',
		'./src/entry.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath: '/static/'
		//libraryTarget: 'umd',
		//library: "[name]"
	},
//	externals: {
//		"react": {
//			commonjs: 'react',
//			commonjs2: 'react',
//			amd: 'React',
//			root: 'React'
//		},
//		"react-dom": {
//			commonjs: 'react-dom',
//			commonjs2: 'react-dom',
//			amd: 'ReactDOM',
//			root: 'ReactDOM'
//		}
//	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('app.css', {
			allChunks: true
		})
	],
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', "babel"]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style',
						'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
			},
			{test: /\.png$/, loader: "url-loader?limit=100000"},
			{test: /\.jpg$/, loader: "file-loader"}
		]
	}
};
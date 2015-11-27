var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		entry: "./src/entry.js"
	},
	output: {
		path: "dist",
		filename: "[name].bundle.js"
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
		new ExtractTextPlugin('app.css', {
			allChunks: true
		})
	],
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: "babel",
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style',
						'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
			},
//			{test: /\.css$/, loader: "style-loader!css-loader"},
			{test: /\.png$/, loader: "url-loader?limit=100000"},
			{test: /\.jpg$/, loader: "file-loader"}
		]
	}
};
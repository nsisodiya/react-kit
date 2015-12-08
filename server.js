var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry.unshift(
		'webpack-dev-server/client?http://localhost:8000',
		'webpack/hot/only-dev-server'
);

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config), {
	publicPath: '/',
	hot: true,
	historyApiFallback: true
}).listen(8000, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at localhost:8000');
});

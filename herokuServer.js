var server = require('pushstate-server');
var port = process.env.PORT || 8000;
server.start({
	port: port,
	directories: [".", "./dist"],
	file: '/index.html'
});
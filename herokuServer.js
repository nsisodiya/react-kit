var server = require('pushstate-server');
server.start({
	port: 80,
	directories: [".", "./dist"],
	file: '/index.html'
});
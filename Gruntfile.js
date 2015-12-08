module.exports = function (grunt) {
	"use strict";
	grunt.initConfig({
		exec: {
			runWebpackWatch: "webpack --colors --watch &",
		},
//		"http-server": {
//			dev: {
//				root: "./",
//				port: 8000,
//				host: "0.0.0.0",
//				showDir: true,
//				autoIndex: true,
//				runInBackground: true
//			}
//		},
		watch: {
			reload: {
				files: ["dist/**", "index.html"],
				options: {
					livereload: 35731
				},
				tasks: []
			},
			configFiles: {
				files: ["Gruntfile.js"],
				options: {
					reload: true
				}
			}
		}
	});

	//grunt.loadNpmTasks("grunt-http-server");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-exec");

	var server = require('pushstate-server');
	grunt.registerTask("pushstate-server", "Start Push State Server", function () {
		server.start({
			port: 8000,
			directories: [".", "./dist"],
			file: '/index.html'
		});

	});

	grunt.registerTask("start-dev-server", ["pushstate-server", "exec:runWebpackWatch", "watch"]);
};
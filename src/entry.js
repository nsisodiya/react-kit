/**
 * Created by narendrasisodiya on 26/11/15.
 */


import React, {Component} from 'react';
import ReactDOM from 'react-dom';


window.reactBridge = {
//	app: require('./../bl/models/app'),
//	evtBus: require('./../bl/common/evtBus'),
//	api: {},
//	util: require('./../bl/common/util'),
	components: {},
	stores: {},
	constants: {}//,
//	dispatcher: require('./../bl/dispatcher/dispatcher')
};

[
	"HelloWorld"
].map(function (v, i) {
	window.reactBridge.components[v] = require('./components/' + v + '/' + v);
});

//Register React !
window.React = React;
window.ReactDOM = ReactDOM;
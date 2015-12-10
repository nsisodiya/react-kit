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
	constants: {},
	dispatcher: require('./common/dispatcher').default
};


import './css/loadcss';

//Register Components
[
	"MainApp",
	"Counter",
	"About",
	"UserList",
	"Header",
	"ContentArea",
	"LeftNav",
	"Header",
	"StoreLoader"
].map(function (v, i) {
	window.reactBridge.components[v] = require('./components/' + v + '/' + v).default;
});


//Register Stores
[
	"CounterStore"
].map(function (v) {
	window.reactBridge.stores[v] = require('./stores/' + v).default;
});

//Register React !
window.React = React;
window.ReactDOM = ReactDOM;
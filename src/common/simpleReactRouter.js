/**
 * Created by narendrasisodiya on 10/12/15.
 */

import EventBus from 'eventbus_js';
import {Component} from 'react';
import PathParser from 'pathparser';


//======================================  routeEventBus ============================//

var routeEventBus = new EventBus();
var addEvent = (function () {
	if (document.addEventListener) {
		return function (el, type, fn) {
			if (el && el.nodeName || el === window) {
				el.addEventListener(type, fn, false);
			} else if (el && el.length) {
				for (var i = 0; i < el.length; i++) {
					addEvent(el[i], type, fn);
				}
			}
		};
	} else {
		return function (el, type, fn) {
			if (el && el.nodeName || el === window) {
				el.attachEvent('on' + type, function () {
					return fn.call(el, window.event);
				});
			} else if (el && el.length) {
				for (var i = 0; i < el.length; i++) {
					addEvent(el[i], type, fn);
				}
			}
		};
	}
})();


addEvent(window, 'popstate', function (event) {
	if (PageHolder.currentPageHolded === false || confirm(PageHolder.currentPageHolded)) {
		PageHolder.unHold();
		routeEventBus.publish("ROUTE_CHANGE_REQUESTED_POPSTATE", {
			event: event
		});
	} else {
		console.log("Back/Forward Button Clicked, but Page is currently holded");
		event.preventDefault();
		//history.replaceState(null, document.title, "/about");
		history.go(1); //This will make two alertBOX but working !!
		return false;
	}
});

setTimeout(function () {
	routeEventBus.publish("ROUTE_CHANGE_REQUESTED", {
		path: window.location.pathname
	});
}, 0);

module.exports.routeEventBus = routeEventBus;

//======================================  Link ============================//


class Link extends Component {
	constructor(props, context) {
		super(props, context);
	}

	linkClicked(synthEvt) {
		//Stop Event
		synthEvt.preventDefault();
		synthEvt.stopPropagation();

		if (PageHolder.currentPageHolded === false || confirm(PageHolder.currentPageHolded)) {
			PageHolder.unHold();
			//Send RouteChange Signal to everywhere
			routeEventBus.publish("ROUTE_CHANGE_REQUESTED", {
				path: synthEvt.target.getAttribute("href")
			});
		} else {
			//Do nothing, If False !!
			console.log("Link Clicked, but Page is currently holded");
		}
	}

	render() {
		return (
				<a onClick={this.linkClicked.bind(this)} {...this.props}>{this.props.children}</a>
		);
	}
}
Link.defaultProps = {};
Link.propTypes = {};

module.exports.Link = Link;

//======================================  RouteLoader ============================//


var simplePathParser = new PathParser();

class RouteLoader extends Component {
	constructor(props, context) {
		super(props, context);
		console.log("%c RouteLoader Component -> Init ", 'background: red; color: white');
		this.state = {
			currentRoute: null
		};

		this.subId = routeEventBus.subscribe("ROUTE_CHANGE_REQUESTED", function (routeObj) {
			simplePathParser.run(routeObj.path);
		});

		this.subId1 = routeEventBus.subscribe("ROUTE_CHANGE_REQUESTED_POPSTATE", function (routeObj) {
			console.log("Path Requested", window.location.pathname);
			routeEventBus.publish("ROUTE_CHANGE_REQUESTED", {
				path: window.location.pathname
			});
			//simplePathParser.run(window.location.pathname);
		});


		var self = this;
		Object.keys(this.props.config.routes).map((i) => {
			console.log("adding", i);
			simplePathParser.add(i, function () {
				//Load Component which mached with {i}
				this.url = "/" + this.url;

				// Change State if new Component is requested
				//if (self.state.currentRoute !== i) {
				self.setState({
					currentRoute: i,
					url: this.url,
					args: this
				});
				//}

				//Now Set Path
				if (window.location.pathname !== this.url) {
					history.pushState({}, "WTF", this.url);
				}

				routeEventBus.publish("ROUTE_CHANGE_DONE", {
					currentRoute: i,
					url: this.url,
					args: this
				});
			});
		});
	}

	componentWillUnmount() {
		routeEventBus.unsubscribe(this.subId);
		routeEventBus.unsubscribe(this.subId1);
		console.log("%c RouteLoader Component -> UnMount ", 'background: black; color: yellow');
	}

	render() {
		console.log("%c RouteLoader Component -> Render ", 'background: black; color: pink');
		if (this.state.currentRoute === null) {
			return (<div></div>);
		}
		var C = this.props.config.routes[this.state.currentRoute];
		return (
				<div styleName='container'>
					<C {...this.state.args} />
				</div>
		);
	}
}
RouteLoader.defaultProps = {};
RouteLoader.propTypes = {};

module.exports.RouteLoader = RouteLoader;

//========================= Page Holder API ===========================//

var PageHolder = {
	currentPageHolded: false,
	hold(message){
		this.currentPageHolded = message;
	},
	unHold(){
		this.currentPageHolded = false;
	}
};

module.exports.PageHolder = PageHolder;

//============================= Modify pushStateFunction ====================//
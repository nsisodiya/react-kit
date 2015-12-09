import React, {Component} from 'react';
import styles from './RouteLoader.css';
import CSSModules from 'react-css-modules';
import PathParser from 'pathparser';

var simplePathParser = new PathParser();
import routeEventBus from '../../common/routeEventBus';

class RouteLoader extends Component {
	constructor(props, context) {
		super(props, context);
		console.log("RouterLoader -> Init");
		this.state = {
			currentRoute: null
		};

		this.subId = routeEventBus.subscribe("ROUTE_CHANGE_REQUESTED", function (routeObj) {
			simplePathParser.run(routeObj.path);
		});

		this.subId1 = routeEventBus.subscribe("ROUTE_CHANGE_REQUESTED_POPSTATE", function (routeObj) {
			console.log("Path Requested", window.location.pathname);
			simplePathParser.run(window.location.pathname);
		});


		var self = this;
		Object.keys(this.props.config.routes).map((i) => {
			console.log("adding", i);
			simplePathParser.add(i, function () {
				//Load Component which mached with {i}
				var url = "/" + this.url;

				// Change State if new Component is requested
				//if (self.state.currentRoute !== i) {
					self.setState({
						currentRoute: i,
						url: url,
						args: this
					});
				//}

				//Now Set Path
				if (window.location.pathname !== url) {
					history.pushState({}, "WTF", url);
				}
			});
		});
	}

	componentWillUnmount() {
		routeEventBus.unsubscribe(this.subId);
		routeEventBus.unsubscribe(this.subId1);
	}

	render() {
		console.log("RouterLoader -> Render");
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
export default CSSModules(RouteLoader, styles);

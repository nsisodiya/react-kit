import React, {Component} from 'react';

import routeEventBus from '../../common/routeEventBus';

class Link extends Component {
	constructor(props, context) {
		super(props, context);
	}

	linkClicked(synthEvt) {
		//Stop Event
		synthEvt.preventDefault();
		synthEvt.stopPropagation();
		//Send RouteChange Signal to everywhere
		routeEventBus.publish("ROUTE_CHANGE_REQUESTED", {
			path: synthEvt.target.getAttribute("href")
		});
	}
	render() {
		return (
				<a onClick={this.linkClicked.bind(this)} {...this.props}>{this.props.children}</a>
		);
	}
}
Link.defaultProps = {};
Link.propTypes = {};
export default Link;

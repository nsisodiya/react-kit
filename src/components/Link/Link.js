import React, {Component} from 'react';

class Link extends Component {
	constructor(props, context) {
		super(props, context);
	}

	linkClicked(synthEvt) {
		//Stop Event
		synthEvt.preventDefault();
		synthEvt.stopPropagation();
		//Send RouteChange Signal to everywhere

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

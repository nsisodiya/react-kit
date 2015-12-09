import React, {Component} from 'react';
import styles from './ContentArea.css';
import CSSModules from 'react-css-modules';

class ContentArea extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: 'ContentArea'
		};
	}

	render() {
		return (
				<div styleName='container'>
					This is {this.state.name} Component
				</div>
		);
	}
}
ContentArea.defaultProps = {};
ContentArea.propTypes = {};
export default CSSModules(ContentArea, styles);

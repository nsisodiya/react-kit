import React, {Component} from 'react';
import styles from './LeftNav.css';
import CSSModules from 'react-css-modules';

class LeftNav extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: 'LeftNav'
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
LeftNav.defaultProps = {};
LeftNav.propTypes = {};
export default CSSModules(LeftNav, styles);

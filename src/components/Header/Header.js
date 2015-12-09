import React, {Component} from 'react';
import styles from './Header.css';
import CSSModules from 'react-css-modules';

class Header extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
				<div styleName='container'>
					Welcome to React Kit
				</div>
		);
	}
}
Header.defaultProps = {};
Header.propTypes = {};
export default CSSModules(Header, styles);

import React, {Component} from 'react';
import styles from './Header.css';
import CSSModules from 'react-css-modules';

class Header extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
				<h1 styleName='container'>
					Welcome to React Kit
				</h1>
		);
	}
}
Header.defaultProps = {};
Header.propTypes = {};
export default CSSModules(Header, styles);

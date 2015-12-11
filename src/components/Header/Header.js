import React, {Component} from 'react';
import styles from './Header.css';
import CSSModules from 'react-css-modules';

class Header extends Component {
	constructor(props, context) {
		super(props, context);
		console.log("%c Header Component -> Init ", 'background: red; color: white');
	}

	render() {
		console.log("%c Header Component -> render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					Welcome to React Starter Kit !
				</div>
		);
	}
}
Header.defaultProps = {};
Header.propTypes = {};
export default CSSModules(Header, styles);

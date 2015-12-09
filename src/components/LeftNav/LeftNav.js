import React, {Component} from 'react';
import styles from './LeftNav.css';
import CSSModules from 'react-css-modules';
import Link from '../Link/Link';

class LeftNav extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
				<div styleName='container'>
					<Link href="/counter">Counter</Link>
					<Link href="/users">Users</Link>
					<Link href="/about">About</Link>
				</div>
		);
	}
}
LeftNav.defaultProps = {};
LeftNav.propTypes = {};
export default CSSModules(LeftNav, styles);

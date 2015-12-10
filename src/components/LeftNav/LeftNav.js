import React, {Component} from 'react';
import styles from './LeftNav.css';
import CSSModules from 'react-css-modules';
import {Link} from '../../common/simpleReactRouter';

class LeftNav extends Component {
	constructor(props, context) {
		super(props, context);
		console.log("%c LeftNav Component -> Init ", 'background: red; color: white');
	}

	render() {
		console.log("%c LeftNav Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					<Link href="/counter">CounterComponent</Link>
					<Link href="/store/CounterStore">Counter Store</Link>
					<Link href="/users">Users</Link>
					<Link href="/module">Module Loader</Link>
					<Link href="/about">About</Link>
				</div>
		);
	}
}
LeftNav.defaultProps = {};
LeftNav.propTypes = {};
export default CSSModules(LeftNav, styles);

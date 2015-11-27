import React, {Component} from 'react';
import styles from './HelloWorld.css';
import CSSModules from 'react-css-modules';

class HelloWorld extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: 'HelloWorld'
		};
	}

	render() {
		return (
				<div styleName='container'>
					This is {this.state.name} Component ! Hot Module Reload is Working !
				</div>
		);
	}
}
HelloWorld.defaultProps = {};
HelloWorld.propTypes = {};
export default CSSModules(HelloWorld, styles);

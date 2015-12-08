import React, {Component} from 'react';
import styles from './MainApp.css';
import CSSModules from 'react-css-modules';

class MainApp extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: 'MainApp'
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
MainApp.defaultProps = {};
MainApp.propTypes = {};
export default CSSModules(MainApp, styles);

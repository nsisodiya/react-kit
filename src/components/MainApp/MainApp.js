import React, {Component} from 'react';
import styles from './MainApp.css';
import CSSModules from 'react-css-modules';

import Header from '../Header/Header';
import LeftNav from '../LeftNav/LeftNav';
import ContentArea from '../ContentArea/ContentArea';

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
					<Header/>
					<div styleName='mainArea'>
						<LeftNav />
						<ContentArea/>
					</div>
				</div>
		);
	}
}
MainApp.defaultProps = {};
MainApp.propTypes = {};
export default CSSModules(MainApp, styles);

import React, {Component} from 'react';
import styles from './MainApp.css';
import CSSModules from 'react-css-modules';

import Header from '../Header/Header';
import LeftNav from '../LeftNav/LeftNav';
import ContentArea from '../ContentArea/ContentArea';

import GitHubForkRibbon from 'react-github-fork-ribbon';

class MainApp extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: 'MainApp'
		};
		console.log("%c MainApp Component -> Init ", 'background: red; color: white');
	}

	render() {
		console.log("%c MainApp Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					<GitHubForkRibbon href="https://github.com/nsisodiya/react-kit"
							target="_blank"
							position="right">
						Fork me on GitHub
					</GitHubForkRibbon>
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

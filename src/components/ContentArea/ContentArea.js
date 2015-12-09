import React, {Component} from 'react';
import styles from './ContentArea.css';
import CSSModules from 'react-css-modules';

import Counter from '../Counter/Counter';
import About from '../About/About';

class ContentArea extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
				<div styleName='container'>
					<Counter/>
					<About/>
				</div>
		);
	}
}
ContentArea.defaultProps = {};
ContentArea.propTypes = {};
export default CSSModules(ContentArea, styles);

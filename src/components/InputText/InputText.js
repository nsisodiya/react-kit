import React, {Component} from 'react';
import styles from './InputText.css';
import CSSModules from 'react-css-modules';

class InputText extends Component {
	constructor(props, context) {
		super(props, context);
		Object.defineProperty(this, 'value', {
			get: function () {
				return this.refs.input.value;
			},
			enumerable: false,
			configurable: false
		});
	}

	render() {
		return (
				<input ref="input" type="text" {...this.props} styleName="inputBox"/>

		);
	}
}
InputText.defaultProps = {
	error: true,
	errorText: "Something is wrong"
};
InputText.propTypes = {};
export default CSSModules(InputText, styles);

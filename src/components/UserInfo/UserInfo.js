import React, {Component} from 'react';
import styles from './UserInfo.css';
import CSSModules from 'react-css-modules';

class UserInfo extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			name: 'UserInfo'
		};
	}

	render() {
		return (<div>User Info will be shown here</div>);
	}
}
UserInfo.defaultProps = {};
UserInfo.propTypes = {};
export default CSSModules(UserInfo, styles);

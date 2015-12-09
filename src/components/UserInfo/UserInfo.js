import React, {Component} from 'react';
import styles from './UserInfo.css';
import CSSModules from 'react-css-modules';

class UserInfo extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			userId: this.props.userId
		};
	}

	componentWillReceiveProps (nextProps){
		this.setState({
			userId: nextProps.userId
		});
	}

	render() {
		return (<div>User {this.state.userId} Selected </div>);
	}
}
UserInfo.defaultProps = {};
UserInfo.propTypes = {};
export default CSSModules(UserInfo, styles);

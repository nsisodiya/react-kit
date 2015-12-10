import React, {Component} from 'react';
import styles from './UserInfo.css';
import CSSModules from 'react-css-modules';

class UserInfo extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			userId: this.props.userId
		};
		console.log("%c UserInfo Component -> Init ", 'background: red; color: white');
	}

	componentWillReceiveProps (nextProps){
		this.setState({
			userId: nextProps.userId
		});
	}

	render() {
		console.log("%c UserInfo Component -> Render ", 'background: black; color: pink');
		return (<div>User {this.state.userId} Selected </div>);
	}
}
UserInfo.defaultProps = {};
UserInfo.propTypes = {};
export default CSSModules(UserInfo, styles);

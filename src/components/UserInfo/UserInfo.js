import React, {Component} from 'react';
import styles from './UserInfo.css';
import CSSModules from 'react-css-modules';

class UserInfo extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			user: this.props.user
		};
		console.log("%c UserInfo Component -> Init ", 'background: red; color: white');
	}

	componentWillReceiveProps (nextProps){
		this.setState({
			user: nextProps.user
		});
	}

	render() {
		console.log("%c UserInfo Component -> Render ", 'background: black; color: pink');
		//return (<div>User {this.state.userId} Selected </div>);
		return (<div styleName="container">
			<h1>{this.state.user.name}</h1>
			<img styleName="img" src={this.state.user.img} alt=""/>

			<div><b>Twitter : </b><span><a href={"http://twitter.com/" + this.state.user.twitter}>{"http://twitter.com/" +
			this.state.user.twitter}</a></span></div>
			<div><b>Github : </b><span><a href={"http://github.com/" + this.state.user.github}>{"http://github.com/" +
			this.state.user.github}</a></span></div>
		</div>);
	}
}
UserInfo.defaultProps = {};
UserInfo.propTypes = {};
export default CSSModules(UserInfo, styles);

import React, {Component} from 'react';
import styles from './UserList.css';
import CSSModules from 'react-css-modules';
import {Link} from '../../common/simpleReactRouter';
import util from '../../common/util';

let myusers = [
	{
		name: "Elie Rotenberg",
		twitter: "elierotenberg",
		github: "elierotenberg",
		url: "http://elie.rotenberg.io",
		img: "http://raw.githubusercontent.com/react-europe/cfp-2015/master/flux-over-the-wire/speaker1.jpg"
	}, {
		name: "Mikhail Davydov",
		twitter: "azproduction",
		github: "azproduction",
		url: "http://azproduction.ru",
		img: "http://raw.githubusercontent.com/react-europe/cfp-2015/master/back-to-text-ui/speaker1.jpg"
	}, {
		name: "Nick Schrock",
		twitter: "schrockn",
		github: "schrockn",
		img: "http://raw.githubusercontent.com/react-europe/cfp-2015/master/a-deep-dive-into-graphql/speaker1.jpg"
	}, {
		name: "Dan Schafer",
		twitter: "dlschafer",
		github: "dschafer",
		img: "http://raw.githubusercontent.com/react-europe/cfp-2015/master/a-deep-dive-into-graphql/speaker2.jpg"
	}, {
		name: "Evan Morikawa",
		twitter: "e0m",
		github: "emorikawa",
		img: "http://raw.githubusercontent.com/react-europe/cfp-2015/master/applications-into-extensible-platforms/speaker1.jpg"
	}, {
		name: "Ben Gotow",
		twitter: "bengotow",
		github: "bengotow",
		img: "http://raw.githubusercontent.com/react-europe/cfp-2015/master/applications-into-extensible-platforms/speaker2.jpg"
	}
];

import UserInfo from '../UserInfo/UserInfo';

class UserList extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			userId: this.props.userId
		};
		console.log("%c UserList Component -> Init ", 'background: red; color: white');
	}

	componentWillReceiveProps (nextProps){
		this.setState({
			userId: nextProps.userId
		});
	}

	render() {
		console.log("%c UserList Component -> Render ", 'background: black; color: pink');
		var self = this;
		return (
				<div styleName='container'>
					<ul>{
						myusers.map(user => {
							return <li key={user.twitter}><Link href={"/users/" + user.twitter}>{user.name}</Link></li>
						})
					}</ul>
					{
							util.iff(this.state.userId !== undefined, <div className="userInfoBox">
								<UserInfo user={myusers.filter(function(v) {
								  return v.twitter === self.state.userId;
								})[0]}/>
							</div>)
					}

				</div>);
	}
}
UserList.defaultProps = {};
UserList.propTypes = {};
export default CSSModules(UserList, styles);

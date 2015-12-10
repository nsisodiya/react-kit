import React, {Component} from 'react';
import styles from './LeftNav.css';
import CSSModules from 'react-css-modules';
import {Link, routeEventBus} from '../../common/simpleReactRouter';
import util from '../../common/util';

class LeftNav extends Component {
	constructor(props, context) {
		super(props, context);
		console.log("%c LeftNav Component -> Init ", 'background: red; color: white');
		this.state = {
			selectedLink: null
		};
		this.config = [
			{
				url: "/component/Counter",
				text: "Counter"
			}, {
				url: "/store/CounterStore",
				text: "Counter Store"
			}, {
				url: "/component/Header",
				text: "Header"
			}, {
				url: "/component/LeftNav",
				text: "LeftNav"
			}, {
				url: "/users",
				text: "Users"
			}, {
				url: "/about",
				text: "About"
			}
		];
		this.subId = routeEventBus.subscribe("ROUTE_CHANGE_DONE", (routeObj) => {
			this.setState({
				selectedLink: routeObj.url
			});
		});
	}

	componentWillUnmount() {
		routeEventBus.unsubscribe(this.subId);
		console.log("%c LeftNav Component -> UnMount ", 'background: black; color: yellow');
	}

	render() {
		console.log("%c LeftNav Component -> Render ", 'background: black; color: pink');
		var self = this;
		return (
				<div styleName='container'>
					{this.config.map(function (v, i) {
						return (
								<Link key={i} styleName={util.iff(self.state.selectedLink === v.url, 'selected')}
										href={v.url}>{v.text}</Link>);
					})}
				</div>
		);
	}
}
LeftNav.defaultProps = {};
LeftNav.propTypes = {};
export default CSSModules(LeftNav, styles);

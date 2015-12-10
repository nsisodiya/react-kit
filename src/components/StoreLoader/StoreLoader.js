import React, {Component} from 'react';
import styles from './StoreLoader.css';
import CSSModules from 'react-css-modules';
import JSONViewer from 'react-json-viewer';
import StoreActionsViewer from '../StoreActionsViewer/StoreActionsViewer';


class StoreLoader extends Component {
	constructor(props, context) {
		super(props, context);
		if(this.props.storeName === undefined){
			alert("storeName Prop not passed");
			return;
		}
		this.store = window.reactBridge.stores[this.props.storeName];
		window.currentStore = this.store;
		this.actionList = this.store.getAllEvents();
		console.log("Events", this.actionList);
		console.log("Try dispatching some Events");
		console.log("Ex - reactBridge.dispatcher.publish(\"" + Object.keys(this.actionList)[0] + "\")");

		this.state = {
			storeName: this.props.storeName,
			jsonData: this.store.getState()
		};

		this.unsub = this.store.onChange(() => {
			this.setState({
				jsonData: this.store.getState()
			});
		});
		console.log("%c StoreLoader Component -> Init ", 'background: red; color: white');
	}

	componentWillUnmount() {
		this.unsub();
		console.log("%c StoreLoader Component -> UnMount ", 'background: black; color: yellow');
	}

	render() {
		console.log("%c StoreLoader Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					<h1>{this.state.storeName}</h1>
					<JSONViewer json={this.state.jsonData}></JSONViewer>
					<StoreActionsViewer actionList={this.actionList}></StoreActionsViewer>
				</div>
		);
	}
}
StoreLoader.defaultProps = {
};
StoreLoader.propTypes = {};
export default CSSModules(StoreLoader, styles);

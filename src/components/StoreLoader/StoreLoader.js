import React, {Component} from 'react';
import styles from './StoreLoader.css';
import CSSModules from 'react-css-modules';
import JSONViewer from 'react-json-viewer';
import StoreActionsViewer from '../StoreActionsViewer/StoreActionsViewer';


class StoreLoader extends Component {
	constructor(props, context) {
		super(props, context);

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

		this.store.onChange(() => {
			this.setState({
				jsonData: this.store.getState()
			});
		});
	}

	render() {
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
	storeName: "something"
};
StoreLoader.propTypes = {};
export default CSSModules(StoreLoader, styles);

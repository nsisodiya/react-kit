import React, {Component} from 'react';
import styles from './ComponentLoader.css';
import CSSModules from 'react-css-modules';

class ComponentLoader extends Component {
	constructor(props, context) {
		super(props, context);
		if (this.props.componentName === undefined) {
			alert("storeName Prop not passed");
			return;
		}
		this.state = {
			component: window.reactBridge.components[this.props.componentName]
		};
		console.log("%c ComponentLoader Component -> Init ", 'background: red; color: white');
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			component: window.reactBridge.components[nextProps.componentName]
		});
	}

	render() {
		console.log("%c ComponentLoader Component -> Render ", 'background: black; color: pink');
		if(this.state.component === undefined){
			return (
					<div>Unable to find Component : {this.props.componentName}
					<p>Hint : Add ComponentName in entry.js</p>
					</div>
			);
		}
		return (
				<this.state.component/>
		);
	}
}
ComponentLoader.defaultProps = {};
ComponentLoader.propTypes = {};
export default CSSModules(ComponentLoader, styles);

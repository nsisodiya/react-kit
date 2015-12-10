import React, {Component} from 'react';
import styles from './StoreActionsViewer.css';
import CSSModules from 'react-css-modules';
import dispatcher from '../../common/dispatcher.js';
import InputText from '../InputText/InputText.js';
import util from '../../common/util.js';

//TODO - move style to css file !
var liStyle = {
	padding: "2px"
};
var inputStyle = {
	width: "142px",
	display: "inline",
	marginLeft: "10px"
};
class StoreActionsViewer extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			actionList: this.props.actionList
		};
		console.log("%c StoreActionViewer Component -> Init ", 'background: red; color: white');
	}

	handleClick(action) {
		var arr = [action];
		this.state.actionList[action].map((arg) => {
			arr.push(this.refs[action + arg].value)
		});
		dispatcher.publish.apply(dispatcher, arr);
	}

	render() {
		console.log("%c StoreActionViewer Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					<h1>ActionList</h1>
					<ul styleName="listnone">
						{
							util.mapObject(this.state.actionList, (args, action) => {
								return <li style={liStyle} key={action}>
									<button onClick={this.handleClick.bind(this, action)}>{action}</button>
									{
										args.map((arg)=> {
											return <InputText style={inputStyle} key={action + arg} ref={action + arg} placeholder={arg}/>
										})
									}
								</li>
							})
						}
					</ul>
				</div>
		);
	}
}
StoreActionsViewer.defaultProps = {};
StoreActionsViewer.propTypes = {};
export default CSSModules(StoreActionsViewer, styles);

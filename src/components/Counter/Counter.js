import React, {Component} from 'react';
import styles from './Counter.css';
import CSSModules from 'react-css-modules';
import CounterStore from '../../stores/CounterStore.js';
import Actions from '../../common/Actions.js';
import dispatcher from '../../common/dispatcher.js';

class Counter extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = CounterStore.getState();
		console.log("Initial State", this.state);
		console.log("%c Counter Component -> Init ", 'background: red; color: white');
	}

	componentDidMount() {
		this.unsub = CounterStore.onChange(()=> {
			this.setState(CounterStore.getState());
		});
	}

	componentWillUnmount() {
		this.unsub();
		console.log("%c Counter Component -> UnMount ", 'background: black; color: yellow');
	}

	add() {
		dispatcher.publish(Actions.COUNTER_INCREMENT);
	}

	sub() {
		dispatcher.publish(Actions.COUNTER_DECREMENT);
	}

	render() {
		console.log("%c Counter Component -> Render ", 'background: black; color: pink');
		return (
				<div styleName='container'>
					Counter Value {this.state.count}
					<div>
						<button onClick={this.add.bind(this)}>Add</button>
					</div>
					<div>
						<button onClick={this.sub.bind(this)}>Subtract</button>
					</div>
				</div>
		);
	}
}
Counter.defaultProps = {};
Counter.propTypes = {};
export default CSSModules(Counter, styles);

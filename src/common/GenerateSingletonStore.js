import util from '../common/util.js';
import dispatcher from './dispatcher.js';
import EventBus from 'eventbus_js';

export default function (exposedAPI) {
	var storeBus = new EventBus();
	var state = {};

	var eventList = {};

	Object.keys(exposedAPI).filter(function (v) {
		return v !== "INIT";
	}).map(function (eventName) {
		eventList[eventName] = exposedAPI[eventName]
				.toString().split("{")[0].split("(")[1].split(")")[0].split(",")
				.filter(function (v) {
					return v !== "state";
				})
				.map(function (v) {
					return v.trim();
				});
	});

	if (typeof exposedAPI.INIT === "function") {
		exposedAPI.INIT(state);
	}
	util.mapObject(exposedAPI, function (fun, eventName) {
		if (eventName === "INIT") {
			return;
		}
		dispatcher.subscribe(eventName, function (...data) {
			var cloneState = util.clone(state);
			fun(cloneState, ...data);
			state = cloneState;
			//Now trigger onChange.
			storeBus.publish("onChange");
		});
	});

	var store = {
		onChange(cb){
			var subId = storeBus.subscribe("onChange", cb);
			return function () {
				storeBus.unsubscribe(subId);
			};
		},
		getState(){
			return state;
		},
		getAllEvents(){
			return eventList;
		}
	};
	return store;
}
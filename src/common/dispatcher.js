//Dispatcher is Singleton Object.
//Dispatcher is a common event bus where Store subscribe to events
//    and Component publish events


import EventBus from 'eventbus_js';
import Actions from './Actions.js';

var dispatcherBus = new EventBus();

//Add Tap on publish function.

var oldPublish = EventBus.prototype.publish;

dispatcherBus.publish = function (action, ...args) {
	//All Published Events will come here first

	if (Actions[action] !== undefined) {
		console.log("Event", arguments);
		oldPublish.apply(this, arguments);
	} else {
		console.error("Unknown Event", arguments);
	}
};

export default dispatcherBus;
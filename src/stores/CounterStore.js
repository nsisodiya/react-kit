//Store is Singleton Entity
//they will be initialised

import GenerateSingletonStore from './../common/GenerateSingletonStore.js';

export default GenerateSingletonStore({
	INIT: function (state) {
		state.count = 0;
	},
	COUNTER_INCREMENT: function (state) {
		state.count = state.count + 1;
	},
	COUNTER_DECREMENT: function (state) {
		state.count = state.count - 1;
	}
});
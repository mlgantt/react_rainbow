import Alt from '../alt';

import RainbowGeneratorAction from '../actions/RainbowGenerator.action';

class RainbowGeneratorStore {
	// constructor for RainbowGeneratorStore
	constructor() {
		// initialize variables
		this.rainbow = null;

		// bind listeners on this Store
		this.bindListeners({
			handleRainbowGenerator: RainbowGeneratorAction.GENERATE_RAINBOW,
		});
	}

	// this is dispatched at the start of the action
	handleRainbowGenerator(colors) {
		this.rainbow = colors;
	}
}

// export our created store from alt
export default Alt.createStore(RainbowGeneratorStore, 'RainbowGeneratorStore');

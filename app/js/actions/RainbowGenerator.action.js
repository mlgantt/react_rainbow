import Alt from '../alt';

class RainbowGeneratorAction {

    generateRainbow() {

        // array of rainbow colors
        let color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

        this.dispatch(color);

    }
}

// export our created action
export default Alt.createActions(RainbowGeneratorAction);

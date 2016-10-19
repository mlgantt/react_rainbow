import React from 'react';

import RainbowGeneratorStore from '../stores/RainbowGenerator.store';
import RainbowGeneratorAction from '../actions/RainbowGenerator.action';


var Rainbow = React.createClass({
    render: function() {

        return (
       		<div className="rainbow_wrapper">
			<div className="rainbow">
          {
              this.props.colors.map(function(color, index) {
                return <div className={color} key={ index }>{color} ribbon</div>
              })
          }  
			</div>
		</div>
        );
    }
});

class RainbowGenerator extends React.Component {
	// when our component is being constructed
	constructor(props) {
		super(props);
		
		// set our state to the RainbowGeneratorStore state
		this.state = RainbowGeneratorStore.getState();
	}

	// called when the component finishes mounting
	componentDidMount() {
		// listening for state change on RainbowGeneratorStore
		RainbowGeneratorStore.listen(this.onChange.bind(this));

	}

	// called when the component is going to be removed
	componentWillUnmount() {
		RainbowGeneratorStore.unlisten(this.onChange);
	}

	// listening for state change from RainbowGeneratorStore
	onChange(state) {
		this.setState(state);
	}

	// render RainbowGenerator component
	render() {

		var rainbow;

		if (this.state.rainbow) {
			// render a loading header because why not
			rainbow = <Rainbow colors={this.state.rainbow} />

		}

		return (
			<div>
				{rainbow}
				<button className="rainbow_button" onClick={RainbowGeneratorAction.generateRainbow}>Make Rainbow!</button>
			</div>
		);
	}
}

export default RainbowGenerator;

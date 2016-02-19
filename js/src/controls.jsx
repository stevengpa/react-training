import React from 'react';
import Power from './partials/power';

export default React.createClass({
	displayName: 'Controls',
	propTypes: {
		scale: React.PropTypes.array.isRequired,
		updatePower: React.PropTypes.func.isRequired
	},
	render() {
		const Controls = this.props.scale.map((power) =>
			<Power key={power} power={power} updatePower={this.props.updatePower} />
		);

		return (
			<div className="control-container">
				{Controls}
			</div>
		);
	}
});

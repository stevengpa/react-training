import React from 'react';
import {Label, Button} from 'react-bootstrap';

export default React.createClass({
	displayName: 'Power',
	propTypes: {
		power: React.PropTypes.number.isRequired,
		updatePower: React.PropTypes.func.isRequired
	},
	render() {
		return (
			<div className="power-container">
				<Label className="power-label">Power - {this.props.power}</Label>
				<Button
					bsSize="xsmall"
					bsStyle="success"
					className="power-action"
					onClick={this.props.updatePower.bind(null, this.props.power)}>
					Apply
				</Button>
			</div>
		);
	}
});

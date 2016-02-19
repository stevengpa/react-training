import React from 'react';
import Power from './partials/power';

export default React.createClass({
	displayName: 'Rocket',
	propTypes: {
		power: React.PropTypes.number.isRequired
	},
	getDefaultProps() {
		return {
			power: 0
		};
	},
	render() {
		const {power} = this.props;
		const attributes = {
			src: 'images/rocket-' + power + '.png',
			alt: 'Current Power ' + power,
			className: 'rocket rocket-style-' + power
		};

		const Rocket = (power !== 0) ? <img {...attributes} /> : null;
		return (
			<div className="rocket-container">
				{Rocket}
			</div>
		);
	}
});

import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Col, Row, Navbar, Nav, NavItem} from 'react-bootstrap';

import Rocket from './rocket';
import Controls from './controls';

const App = React.createClass({
	displayName: 'App',
	getInitialState() {
		return {
			power: 0,
			scale: [100, 75, 50, 25, 0]
		}
	},
	componentWillMount() {
		console.log('[App] -> componentWillMount');
	},
	componentDidMount() {
		console.log('[App] -> componentDidMount');
	},
	componentWillUpdate() {
		console.log('[App] -> componentDidMount');
	},
	shouldComponentUpdate(nextProps, nextState) {
		console.log('=========  [App] -> shouldComponentUpdate  =========');
		console.log('== nextProps ==');
		console.log(nextProps);
		console.log('== nextState ==');
		console.log(nextState);
		console.log('=====  End of [App] -> shouldComponentUpdate>  =====');
		return true;
	},
	componentWillUpdate(nextProps, nextState) {
		console.log('=========  [App] -> componentWillUpdate  =========');
		console.log('== nextProps ==');
		console.log(nextProps);
		console.log('== nextState ==');
		console.log(nextState);
		console.log('=====  End of [App] -> componentWillUpdate>  =====');
	},
	componentDidUpdate(prevProps, prevState) {
		console.log('=========  [App] -> componentDidUpdate  =========');
		console.log('== prevProps ==');
		console.log(prevProps);
		console.log('== prevState ==');
		console.log(prevState);
		console.log('=====  End of [App] -> componentDidUpdate>  =====');
	},
	componentWillUnmount() {
		// Unsubscribe
	},
	updatePower(power = 0) {
		this.setState({
			power
		});
	},
	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Brand>
						<a href="#">React-Rocket</a>
					</Navbar.Brand>
					<Nav>
							<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
					</Nav>
				</Navbar>

				<Grid>
					<Row>
						<Col md={4}>
							<Controls scale={this.state.scale} updatePower={this.updatePower} />
						</Col>
						<Col md={8}>
							<Rocket power={this.state.power} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

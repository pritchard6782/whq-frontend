import React, { Component } from 'react';
import Lobby from './lobby/lobby';
import GameScreen from './gameScreen/gameScreen';
import SocketService from './../services/socketService.js';
import ApiService from './../services/apiService.js';

class App extends Component {

	state = {
		services: {
			socket: new SocketService(),
			api: new ApiService()
		},
		room: null
	}

	render() {
		return (
			<div>
				{ this.state.room === null
					?
					<Lobby
						doSetRoom={this.setRoom}
						services={this.state.services}
						/>
					:
					<GameScreen
						room={this.state.room}
						doLeaveRoom={this.leaveRoom}
						services={this.state.services}
						/>
				}
			</div>
		);
	}

	setRoom = room => {

		this.setState({room: room});
	};

	leaveRoom = () => {
		this.setState({room: null});
	};
}

export default App;

import React from 'react';
import LobbyRoom from './lobbyRoom';
import LobbyNewRoomNameBox from './lobbyNewRoomNameBox';

class Lobby extends React.Component {
	state = {
		showNewRoomNameModal: false
	};

	componentDidMount() {
		this.refreshList();
	}

	render () {
		return (
			<div className="container">
				<button onClick={this.newRoom}>New Room</button>
				<button onClick={this.refreshList}>Refresh</button>
				{ this.state.rooms ?
					this.state.rooms.map(room => <LobbyRoom key={room.id} room={room} doSetRoom={this.props.doSetRoom} />) :
					<div className="row">
						Fetching Rooms...
					</div>
				}
				<div className="row">
					<LobbyNewRoomNameBox
						display={this.state.showNewRoomNameModal}
						hideNewRoomBox={this.hideNewRoomBox}
						services={this.props.services} />
				</div>
			</div>
		);
	}

	refreshList = () => {
		console.log("fetching list");
		fetch('http://localhost:8081/lobby/list')
      		.then(response => response.json())
	    	.then(rooms => this.setState({ rooms: rooms }));
	};

	newRoom = () => {
		this.setState({showNewRoomNameModal: true});
	};

	hideNewRoomBox = () => {
		this.setState({showNewRoomNameModal: false});
	};
}

export default Lobby;

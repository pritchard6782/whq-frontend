import React from 'react';

class LobbyRoom extends React.Component {

	render () {
		return (
			<div className="row">
				<label>
					{this.props.room.id}
				</label>
				<button onClick={() => this.props.doSetRoom(this.props.room)}>
					Enter Room
				</button>
			</div>
		);
	}
}

export default LobbyRoom;

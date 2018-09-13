import React from 'react';

class GameScreen extends React.Component {

	sock = null;

	state = {

	};

	constructor(props) {
		super();
		this.sock = props.services.socket;
		this.sock.connect(() => {
			//this.state.socket.send("getRoom", 6);
		});
	}

	render() {
		return (
			<div><button onClick={this.exitGame}>Exit</button></div>
		);
	}

	sendMessage = () => {
	  	//this.state.sock.sendMessage();
	}

	exitGame = () => {
	  	this.sock.disconnect();
		this.props.doLeaveRoom();
	}


}

export default GameScreen;

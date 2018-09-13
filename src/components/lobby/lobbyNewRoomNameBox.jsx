import React from 'react';

class LobbyNewRoomNameBox extends React.Component {

	state = {
		inputValue: ''
	};

	render () {
		return (
			<div className="modal" style={{display: this.props.display ? 'block' : 'none'}} tabIndex="-1" role="dialog">
				<div className="modal-dialog" role="document">
				    <div className="modal-content">
					    <div className="modal-header">
					        <h5 className="modal-title" id="exampleModalLabel">Enter new room name</h5>
					        <button type="button" className="close" aria-label="Close">
					        	<span aria-hidden="true">&times;</span>
					        </button>
					    </div>
					    <div className="modal-body">
					        <input type="text" onChange={this.handleInputChange} />
					    </div>
					    <div className="modal-footer">
					        <button type="button"
								className="btn btn-secondary"
								onClick={this.props.hideNewRoomBox}>
								Close
							</button>
					        <button type="button" className="btn btn-primary" onClick={this.createDungeon}>
								Create Dungeon
							</button>
					    </div>
				    </div>
				</div>
			</div>
		);
	}

	handleInputChange = event => {
		this.setState({inputValue: event.target.value});
	}

	createDungeon = () => {
		//TODO: check inputValue
		this.props.services.api.post('new', this.state.inputValue);
	}
}

export default LobbyNewRoomNameBox;

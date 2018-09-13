import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const sockUrl = "http://localhost:8080/ws";

class SocketService {
	stompClient = null;

	send = (messageMapping, json) => {
	    this.stompClient.send("/app/" + messageMapping, {}, json);
	};

	connect = (callback) => {
		console.log('connecting...');
		if (this.stompClient != null) {
			console.log("connection already open!");
			return;
		}

		this.stompClient = Stomp.over(new SockJS(sockUrl));
	    this.stompClient.connect({}, frame => {
	        console.log('Connected: ' + frame);
	        this.stompClient.subscribe('/topic/public', function (greeting) {
	            console.log(greeting);
	        });
			callback && callback();
	    });
	}

	disconnect = () => {
		console.log('disconnecting...');
	    this.stompClient !== null && this.stompClient.disconnect();
		this.stompClient = null;
	    console.log("Disconnected");
	}
}

export default SocketService;

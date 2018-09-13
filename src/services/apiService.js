const apiUrl = 'http://localhost:8081/lobby/';

class ApiService {

	fetch(messageMapping, callback) {
		fetch(apiUrl + messageMapping)
			.then(response => response.json())
			.then(a => console.info(a));
	}

	post(messageMapping, json, callback) {
		fetch(apiUrl + messageMapping, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(json)
		});
	}
}

export default ApiService;

declare var $: any;

// what CRUD/REST method are we doing? GET, POST, PUT, DELETE
// What URL is the data located at? https://api.dribbble.com/v1/shots
// are any headers, or authorizations required? Bearer d022a312419233de2c4cd7a7bac92718df25beb367655278c1b74b219981ff42

function getShots(cb) {

	$.ajax({
		method: 'GET',
		headers: {
			authorization: "Bearer d022a312419233de2c4cd7a7bac92718df25beb367655278c1b74b219981ff42"
		},
		url: 'https://api.dribbble.com/v1/shots',
		success: function(shotsArray) {
			cb(shotsArray);
		},
	});

}

export default getShots;

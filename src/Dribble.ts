/// <reference path="../typings/jquery/jquery.d.ts" />

// Interact with the dribble api, getting different tpes of data
// Parse and interpret that data, try to draw conclusions (ie. what colours are popular)
// deal with the UI, updating, interactions, click etc
/**
 * Dribble class provides methods for
 * interacting with the dribble API
*/
export default class Dribble {

	getShots(){
		var settings = {
  			"async": true,
  			"crossDomain": true,
  			"url": "https://api.dribbble.com/v1/shots",
  			"method": "GET",
  			"headers": {
			    "authorization": "Bearer d022a312419233de2c4cd7a7bac92718df25beb367655278c1b74b219981ff42",
			    "cache-control": "no-cache",
			    "postman-token": "27831738-330e-3cc1-01eb-2dd1e2131b44"
  			},
  			"data": {
			    "title": "lemmons",
			    "body": "okoko",
			    "userId": "1"
  			}
		}
		$.ajax(settings).done(function (response) {
		  console.log(response);
		});

	}

}

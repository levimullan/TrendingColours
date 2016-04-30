import getShots from '../dribbble.ts'
declare var require: any;
declare var Ractive: any;
var pantoneCardTemplate = require('./pantoneCard.jade')();


var pantoneCard = new Ractive({
	// The `el` option can be a node, an ID, or a CSS selector.
	el: '#pantoneCard',

	// We could pass in a string, but for the sake of convenience
	// we're passing the ID of the <script> tag above.
	template: pantoneCardTemplate,

	// Here, we're passing in some initial data
	data: {
		name:'DRIBBBLE',
		color:'pink',
		theme:'someTheme'
	}
});






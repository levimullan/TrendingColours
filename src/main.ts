import lemmons from './dribbble.ts'
require('./styles/main.scss');
var compile = require('./hexTrends.jade');

declare var require: any;
declare var Ractive: any;


var ractive = new Ractive({
	// The `el` option can be a node, an ID, or a CSS selector.
	el: '#nav',

	// We could pass in a string, but for the sake of convenience
	// we're passing the ID of the <script> tag above.
	template: compile(),

	// Here, we're passing in some initial data
	data: { name: 'levi' }
});


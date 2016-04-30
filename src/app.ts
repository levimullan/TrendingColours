import getShots from './dribbble.ts';
declare var Ractive: any;
declare var require: any;		
var pantoneCardTemplate = require('./pantoneCard/pantoneCard.jade')();

getShots(function displayData(shots){
	// at least by this point, you need an array of shots
	var ractive = new Ractive({
		el: '#app',
		template: ` {{#each newShots:i}}
						<pantone-card/>
						<p>{{newShots[i].title}}</p>
					{{/each}}`,
		data: {
			newShots: shots,
		},
		components: {
			'pantone-card': PantoneCard
		}
	});

	console.log(shots);

});
	
var PantoneCard = Ractive.extend({
	template: pantoneCardTemplate,
});

// var gallery = new Ractive ({
// 	el:'#app',
// 	template: `<pantone-card/>`,
// 	components: {
// 		'pantone-card': PantoneCard,
// 	}
// })

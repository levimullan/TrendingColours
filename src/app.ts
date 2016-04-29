import getShots from './dribbble.ts';
declare var Ractive: any;	

getShots(function displayData(shots){
	// at least by this point, you need an array of shots
	var ractive = new Ractive({
		el: '#app',
		template: ` {{#each newShots:i}}
						<p>{{newShots[i].title}}</p>
					{{/each}}`,
		data: {
			newShots: shots,
		}
	});

	console.log(shots);

});
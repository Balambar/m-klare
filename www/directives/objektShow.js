app.directive('objektShow', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/objektShow.html',
		controller : ['$scope', 'Home', function($scope, Home){
			Home.get({
				// _sort: {address: 1}, 
				// _limit : 6
			},function(data){
			// xxx (million) xxx (hundredthousand) xxx(thousand)
			var priceArray = [];
			for(var i = 0; i < data.length; i++){
			priceArray.push(data[i].price);
			}

				console.log(priceArray);


			
// 			gul = n.toFixed(2).replace(/./g, function(c, i, a) {
//     return i && c !== "." && ((a.length - i) % 3 === 0) ? ' ' + c : c;
// }); --> troligvis inte 

// ____________________________________________________________
// alterNumber = n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
// alterNumber = alterNumber.replace('.', ' ');


// lasdigit = gul.lastIndexOf("0");
// gul = gul[lasdigit].replace("0","");
// _____________________________________________________________




				// function destroyDigits(array){
				// 	 console.log(array);
				// lasdigit = array.lastIndexOf("0");
				// array = array[lasdigit].replace("0","");
				// array = space(array);
				// return array;
				// };


// _________________________________________________
// for ( var i = 0; i < a.length; i++){
// a[i] = space(a[i]);
// }
					
				// function space(number){

				// 	alteredNumber = number.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
				// 	alteredNumber = alteredNumber.replace('.', ' ');
				// 	console.log(alteredNumber);
				// 	return alteredNumber;



				// }

				$scope.information = data;
			})
		}],
		link: function(scope, elem, attrs) {
 		// scope is an Angular scope object.
	      // element is the base element for this directive
	      // (attrs - not within the scope of this course)

	      // scope is called "scope" rather than "$scope"
	      // here just out of convention...

	      // If jQuery is loaded before angular
	      // angular.element IS jQuery
	      // (otherwise it is jqLite)
	      var $ = angular.element;

	      // A function to show/hide wells
	      // create ordinary jQuery code 
	      scope.toggleWells = function(){

	      }
	   }
   
	};
}]);
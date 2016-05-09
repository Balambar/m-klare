app.directive('getVillor', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/villorShow.html',
		controller : ['$scope', 'Home', function($scope, Home){
			Home.get({
				type: "Villor",
				_sort: {address: 1},
				_limit : 3
			},function(data){
				$scope.information = data;
			})
		}]
    // controller: ['$scope', 'Download', function($scope, download) {
//  Download.get({
//   species: "rabbit",
//   _sort: {name: 1},
//   _skip: 10,
//   _limit: 5
// });
 
    // }]
  // };
	};
}]);
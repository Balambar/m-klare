
app.directive('getAppart', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/lagenheterShow.html',
		controller : ['$scope', 'Home', function($scope, Home){
			Home.get({
				type : "Lägenhet",
				_sort: {address: 1},
				_limit : 3
			},function(data){
				$scope.information = data;
			})
		}]

	};
}]);
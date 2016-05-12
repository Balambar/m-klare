app.controller("testHomes", ["$scope", '$rootScope', '$location', function($scope, $rootScope, $location){

	// If no result go to home
	if(!$rootScope.results){
		$location.path('/');
	}

	$scope.minToMax = function(){
			var myResult = $rootScope.results;
			myResult.sort(function(a,b){
			return (a.price - b.price)
		});
		console.log("HOLA");
	}

	$scope.maxToMin = function(){
			var myResult = $rootScope.results;
			myResult.sort(function(a,b){
			return (b.price - a.price)
		});
		console.log("CHAO");
	}		

}]);
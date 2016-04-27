app.controller("seller", ["$scope", "Seller", function($scope, Seller){

	Seller.get(function(allSellers){
		console.log(allSellers);
		$scope.sellers = allSellers;
	});

}]);
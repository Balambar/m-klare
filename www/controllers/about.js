app.controller("about", ["$scope", "About", function($scope, About) {
  
	$scope.items = [42];

	 About.get(function(allItems) {

	 	$scope.items = allItems;
	 })

 
}]);
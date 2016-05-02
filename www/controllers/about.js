app.controller("about", ["$scope", "About", function($scope, About) {
  
	 About.get(function(allItems) {

	 	$scope.items = allItems;
	 })

 
}]);
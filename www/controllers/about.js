app.controller("about", ["$scope", "About", function($scope, About) {
  
	 About.get(function(allAbouts) {
		console.log(allAbouts);
	 	$scope.abouts = allAbouts;
	 });

 
}]);
app.controller("about", ["$scope", "About", function($scope, About) {
  
	 About.get(function(allAbouts) {
		
	 	$scope.abouts = allAbouts;
	 });

 
}]);
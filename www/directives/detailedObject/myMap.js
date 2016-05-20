app.directive('myMap',  [function () {

  return {
    templateUrl: '/directives/detailedObject/myMap.html',
    controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home) {

      var coordinates = {};

    	Home.getById({id:$routeParams.id}, function(data){

        coordinates = data.coordinates[0];
      });

      $scope.map = {
          center:{
            latitude: 55.5899, 
            longitude: 12.9212
          }, 
          zoom: 18
        };

      
      
      //this timeout fixes a bug that causes the map to turn grey 
  		//if the whole page isnt reloaded
  	 	setTimeout(function(){
  	 		window.dispatchEvent(new Event('resize'));
  	 	},0);
	      
	  }]

	};
}]);
app.directive('objektShow', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/objektShow.html',
		controller : ['$scope', 'Home', function($scope, Home){


// göra om till en funktion som både kallas på i "siduppstart" samt när den får ett klickevent med attribut. 
// function go(skip){});

$scope.go = function(capsulate) {
    console.log(capsulate);
    
  			var limit = 6;
			var skip = capsulate * limit;
    console.log(skip);
			Home.get({
			// _sort: {address: 1}, 
			_skip: skip,
  			_limit: limit
			},function(data,arg){
				

				$scope.updown = capsulate;
				$scope.information = data;
			})

  }

  $scope.$on("$locationChangeSuccess",
function(event, current, previous, rejection) {
  $window.scrollTo(0,0);
});

		}]}

	}]);
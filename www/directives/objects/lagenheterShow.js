
app.directive('getAppart', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/objects/lagenheterShow.html',
		controller : ['$scope','$anchorScroll' ,'Home', function($scope, $anchorScroll, Home){
			$scope.go = function(capsulate) {
    console.log(capsulate);
    
  			var limit = 6;
			var skip = capsulate * limit;
    console.log(skip);
			Home.get({
				type: 'Lägenhet',
			// _sort: {address: 1}, 
			_skip: skip,
  			_limit: limit
			},function(data,arg){
				

				$scope.updown = capsulate;
				$scope.information = data;
			})

$anchorScroll()

  }
$scope.go(0)



		}]}

	}]);
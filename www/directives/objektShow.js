app.directive('objektShow', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/objektShow.html',
		controller : ['$scope', 'Home', function($scope, Home){



			Home.get({
			// _sort: {address: 1}, 
			// _skip: 10,
  			_limit: 2
			},function(data){
				
				$scope.information = data;
			})
		}],
		link: function(scope, elem, attrs) {
			// scope is an Angular scope object.
			// element is the base element for this directive
			// (attrs - not within the scope of this course)
			
			// scope is called "scope" rather than "$scope"
			// here just out of convention...
			
			// If jQuery is loaded before angular
			// angular.element IS jQuery
			// (otherwise it is jqLite)
			var $ = angular.element;
			
			// A function to show/hide wells
			// create ordinary jQuery code 
			scope.toggleWells = function(){
			
			}
		}

	};
}]);
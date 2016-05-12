app.directive('myMap', [function () {

  return {
    templateUrl: '/directives/myMap.html',
    controller: ['$scope', function($scope) {

    	$scope.map = {
    center: [40.7, -74]
  }
  $scope.marker = {
    position: [40.7, -74]
  }
     setTimeout(function(){window.dispatchEvent(new Event('resize'))},0);
      
    }]

  };
}]);
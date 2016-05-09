// loads in ui bootstrap accordion
app.directive('enfastInfo', [function () {

  return {
    templateUrl: '/directives/enfastInfo.html',
    controller: ['$scope', 'Home', function($scope, Home) {
      // this data should come from our backend
      // using $resource!
      Home.get(function(data){

        $scope.info = data[1];

        
      });

    }]
  };
}]);
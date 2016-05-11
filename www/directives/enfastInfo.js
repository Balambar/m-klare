// loads in ui bootstrap accordion
app.directive('enfastInfo', [function () {

  return {
    templateUrl: '/directives/enfastInfo.html',
    controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home) {
      
      $scope.info = Home.getById({id:$routeParams.id});
      
    }]
  };
}]);
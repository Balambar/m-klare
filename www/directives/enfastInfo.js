// loads in ui bootstrap accordion
app.directive('enfastInfo', [function () {

  return {
    templateUrl: '/directives/enfastInfo.html',
    controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home) {
      
      $scope.info = Home.getById({id:$routeParams.id}, function(data){

        if(data.garden){
          $scope.info.garden = 'yes';
        }
        else{
          $scope.info.garden = 'no';
        }

        if(data.balcony){
          $scope.info.balcony = 'yes';
        }
        else{
          $scope.info.balcony = 'no';
        }

        $scope.info.size += ' M\xB2';
        $scope.info.price += ' SEK';

      });


      
    }]
  };
}]);
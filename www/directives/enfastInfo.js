// loads in ui bootstrap accordion
app.directive('enfastInfo', [function () {

  function boolChange(myData){
    
    var myBoolChange;
    if(myData){
      myBoolChange = 'yes';
    }
    else{
      myBoolChange = 'no';
    }

    return myBoolChange;
  };

  return {
    templateUrl: '/directives/enfastInfo.html',
    controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home) {
      
      $scope.info = Home.getById({id:$routeParams.id}, function(data){

        $scope.info.garden = boolChange(data.garden);
        $scope.info.balcony = boolChange(data.balcony);

        $scope.info.size += ' M\xB2';
        $scope.info.price += ' SEK';

      });


      
    }]
  };
}]);
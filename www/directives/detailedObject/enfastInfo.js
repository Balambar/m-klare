// loads in ui bootstrap accordion
app.directive('enfastInfo', [function () {

  //return a different string depending on a boolean value
  //myTrue & myFalse is optional
  function boolChange(myData, myTrue, myFalse){
    
    //sets default values
    if(!myTrue){
      myTrue = 'Ja';
    }
    if(!myFalse){
      myFalse = 'Nej';
    }

    //string to be returned
    var myBoolChange;

    //if true
    if(myData){

      myBoolChange = myTrue;
    }
    //if false
    else{

      myBoolChange = myFalse;
    }

    return myBoolChange;
  };

  return {
    templateUrl: '/directives/detailedObject/enfastInfo.html',
    controller: ['$scope', '$routeParams', 'Home', function($scope, $routeParams, Home) {
      
      $scope.info = Home.getById({id:$routeParams.id}, function(data){

        $scope.info.garden = boolChange(data.garden);
        $scope.info.balcony = boolChange(data.balcony);

        //hex for square meter symbol (the miniature and raised 2)
        $scope.info.size += ' M\xB2';
      });


      
    }]
  };
}]);
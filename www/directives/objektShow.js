app.directive('objektShow', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/objektShow.html'
  //   controller: ['$scope', '$interval', function($scope, $interval) {

  //     function currentTime() {
  //       $scope.currentTime = new Date();
  //     }
  //     currentTime();
  //     // update currentTime every 1 second
  //     // if we don't use angulars $interval
  //     // $scope wont realize that there is an updated value!
  //     $interval(currentTime, 1000);
  //   }]
  // };
	};
}]);
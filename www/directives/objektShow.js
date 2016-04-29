app.directive('objektShow', [function(){
	// Runs during compile
	return {
		templateUrl: '/directives/objektShow.html'
  //   controller: ['$scope', '$interval', function($scope, $interval) {
  // <img src="../imgs/objekt/int/bed.jpg" alt="...">
  //     <img src="../imgs/objekt/int/bedroom-2.jpg" alt="...">
  //     <img src="../imgs/objekt/int/bedroom-1.jpg" alt="...">
  //     <img src="../imgs/objekt/int/bedroom-3.jpg" alt="...">
  //     <img src="../imgs/objekt/int/bedroom-4.jpg" alt="...">
  //     <img src="../imgs/objekt/int/bild1.jpg" alt="...">
  //     <img src="../imgs/objekt/int/bild2.jpg" alt="...">
  //     <img src="../imgs/objekt/int/bild3.jpg" alt="...">
  //     <img src="../imgs/objekt/int/diningroom.jpg" alt="...">
  //     <img src="../imgs/objekt/int/doorway.jpg" alt="...">
    
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
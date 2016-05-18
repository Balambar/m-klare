app.directive("paginationList", [

  function() {
    return {
      templateUrl: '/directives/objects/pagination.html',
      controller: ['$scope', 'Home', '$route', '$routeParams', '$location',
        function($scope, Home, $route, $routeParams, $location) {
          $scope.badge = function() {
            Home.get(function(data) {
              $scope.allBadge = data.length;
            });
            Home.get({
              type: 'Villor'
            }, function(data) {
              $scope.villorBadge = data.length;
            });
            Home.get({
              type: 'Lägenhet'
            }, function(data) {
              $scope.lagenhetBadge = data.length;
            });
          }




          $scope.all = function() {
            Home.get(function(data) {
            
              $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
              $scope.bigTotalItems = data.length;  //total number of objects in db. 
              $scope.bigCurrentPage = 1; // startingpoint for active 
              

            })
          };
          $scope.villor = function() {
            Home.get({
              type: 'Villor'
            }, function(data) {
                $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
              $scope.bigTotalItems = data.length;  //total number of objects in db. 
              $scope.bigCurrentPage = 1; // startingpoint for active 
            })
          };
          $scope.lagenheter = function() {
            Home.get({
              type: 'Lägenhet'
            }, function(data) {
               $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
              $scope.bigTotalItems = data.length;  //total number of objects in db. 
              $scope.bigCurrentPage = 1; // startingpoint for active 
            })
          };
          $scope.badge();
          if ($location.$$path === '/fastigheter') {
            $scope.all();
          }
          if ($location.$$path === '/villor') {
            $scope.villor();
          }
          if ($location.$$path === '/lagenheter') {
            $scope.lagenheter();
          }
          // // Hugos while loop
          //  // var i = 0;
          //  // while (i++ < fullNumber) {
          //  //  numberArray.push(i);
          //  // }
  }]
    }
}]);
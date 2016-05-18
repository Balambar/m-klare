app.directive("paginationList", [

  function() {
    return {
      templateUrl: '/directives/objects/pagination.html',
      controller: ['$scope', 'Home', '$route', '$routeParams', '$location', '$http',
        function($scope, Home, $route, $routeParams, $location, $http) {
          $scope.badge = function() {
            /*
              keys -> $scope properties
              values -> type to filter
            */
            var counts = {
              allBadge: '',
              villorBadge: 'Villor',
              lagenhetBadge: 'Lägenhet'
            };

            Object.keys(counts).forEach(function(key) {
              var url = '/api/objekt-count';
              // if we have a type to filter with
              if (counts[key]) {
                url += '?type=' + counts[key]
              }
              $http.get(url).then(function(data) {
                console.log("count for " + key, data);
                $scope[key] = data.data;
              });
            });

            // Home.get(function(data) {
            //   $scope.allBadge = data.length;
            // });
            // Home.get({
            //   type: 'Villor'
            // }, function(data) {
            //   $scope.villorBadge = data.length;
            // });
            // Home.get({
            //   type: 'Lägenhet'
            // }, function(data) {
            //   $scope.lagenhetBadge = data.length;
            // });
          };




          $scope.all = function() {
            var url = '/api/objekt-count';
            $http.get(url).then(function(data) {
                console.log(data);
                 $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
              $scope.bigTotalItems = data.data;  //total number of objects in db. 
              $scope.bigCurrentPage = 1; // startingpoint for active 
              });
          };
          $scope.villor = function() {
             var url = '/api/objekt-count?type="Villor"';
            $http.get(url).then(function(data) {
                console.log(data);
                 $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
              $scope.bigTotalItems = data.data;  //total number of objects in db. 
              $scope.bigCurrentPage = 1; // startingpoint for active 
              });
          };
          $scope.lagenheter = function() {
             var url = '/api/objekt-count?type="Lägenhet';
            $http.get(url).then(function(data) {
                console.log(data);
                 $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
              $scope.bigTotalItems = data.data;  //total number of objects in db. 
              $scope.bigCurrentPage = 1; // startingpoint for active 
              });
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
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
              // console.log(data);
              // $scope.totalItems = 64;  
              // $scope.currentPage = 4;

              // $scope.setPage = function(pageNo) {

              //   $scope.currentPage = pageNo;
              // };


              $scope.consol = function(page){
                console.log(page-1);
              }

              $scope.maxSize = 5;  // how many that shows in the menu  (Limit number for pagination size.)
              $scope.bigTotalItems = data.length;  //total number of objects in db. 
              $scope.bigCurrentPage = 1; // startingpoint for active 
              

              // var numberArray = [];
            //   var fullNumber = Math.ceil(data.length / 6);
            //   // console.log(fullNumber);
            //   for (var i = 1; i <= fullNumber; i++) {
            //     numberArray.push(i);
            //     // console.log(numberArray);
            //   }
            //   // console.log(fullNumber);
            //   $scope.first = 0;
            //   $scope.last = fullNumber;
            //   $scope.pageNumbers = numberArray;
            //   // [1,2,3,4,5];
            })
          };
          $scope.villor = function() {
            Home.get({
              type: 'Villor'
            }, function(data) {
              // console.log(data);
              var numberArray = [];
              var fullNumber = Math.ceil(data.length / 6);
              // console.log(fullNumber);
              for (var i = 1; i <= fullNumber; i++) {
                numberArray.push(i);
                // console.log(numberArray);
              }
              // console.log(fullNumber);
              $scope.pageNumbers = numberArray;
              // [1,2,3,4,5];
            })
          };
          $scope.lagenheter = function() {
            Home.get({
              type: 'Lägenhet'
            }, function(data) {
              // console.log(data);
              var numberArray = [];
              var fullNumber = Math.ceil(data.length / 6);
              // console.log(fullNumber);
              for (var i = 1; i <= fullNumber; i++) {
                numberArray.push(i);
                // console.log(numberArray);
              }
              // console.log(fullNumber);
              $scope.pageNumbers = numberArray;
              // [1,2,3,4,5];
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
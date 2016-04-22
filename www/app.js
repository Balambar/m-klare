console.log("Hello world!");

// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

	$routeProvider
    .when("/", {
      templateUrl: "templates/home.html"
      // controller: "home"
    })

    .otherwise({
      templateUrl: "templates/404.html"
    });

    $locationProvider.html5Mode(true);
    
}]);
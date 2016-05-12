console.log("Hello world!");

// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap',
  'ngMaps'
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

  $routeProvider
    .when("/", {
      templateUrl: "templates/home.html"
      //controller: "home"
    })
    .when("/about",{
      templateUrl: "templates/about.html",
      controller: "about"
    })
    .when("/fastigheter",{
      templateUrl: "templates/fastigheter.html",
      // controller: ""
    })
     .when("/villor",{
      templateUrl: "templates/villor.html"
      
      // controller: ""
    })
     .when("/lagenheter",{
      templateUrl: "templates/lagenheter.html",
      // controller: ""
    })
    .when("/enfastighet",{
      templateUrl: "templates/enfastighet.html",
      // controller: ""
    })  
    .when("/objekt/:id",{
      templateUrl: "templates/enfastighet.html",
      // controller: ""
    })
    .when("/kontakt",{  
        templateUrl: "templates/contact.html",
        controller: "contact"
    })
    .when("/maklare",{  
        templateUrl: "templates/seller.html",
        controller: "seller"
    })
    .when("/testHomes",{  
        templateUrl: "templates/testHomes.html",
        controller: "testHomes"
    })

    .otherwise({
      templateUrl: "templates/404.html"
    });

    $locationProvider.html5Mode(true);
    
}]);
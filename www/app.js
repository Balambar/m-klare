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
      //controller: "home"
    })
    .when("/about",{
      templateUrl: "templates/about.html"
      // controller: ""
    })
    .when("/fastigheter",{
      templateUrl: "templates/fastigheter.html",
      controller: "fastigheter"
    })
     .when("/villor",{
      templateUrl: "templates/villor.html"
      
      // controller: ""
    })
     .when("/appartments",{
      templateUrl: "templates/appartments.html",
      // controller: ""
    }) 
    .when("/villor/:id",{
      // templateUrl: "",
      // controller: ""
    })
    .when("/appartment/:id",{  
      // templateUrl: "",
      // controller: ""
    })
    .when("/contact",{  
        templateUrl: "templates/contact.html",
        controller: "contact"
    })
    .when("/sellers",{  
        templateUrl: "templates/seller.html",
        controller: "seller"
    })

    .otherwise({
      templateUrl: "templates/404.html"
    });

    $locationProvider.html5Mode(true);
    
}]);
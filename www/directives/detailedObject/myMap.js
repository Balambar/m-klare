app.directive('myMap',  [function () {

  return {
    templateUrl: '/directives/detailedObject/myMap.html',
    controller: ['$scope', 'uiGmapGoogleMapApi', '$routeParams', 'Home', function($scope, uiGmapGoogleMapApi, $routeParams, Home) {

      //coordinates that will be loaded from database
      var coordinates = {},
          //default coordinates that will be loaded initially
          defaultCoordinates = { lat: 0, lon: 0 };

      //initial map setup (the map need these values to load)
      $scope.map = {
        center:{
          latitude: defaultCoordinates.lat, 
          longitude: defaultCoordinates.lon
        }, 
        zoom: 18
      };

      //initial marker setuo (map need these values to load)
      $scope.marker = {
        id: 0,
        coords: {
          latitude: defaultCoordinates.lat,
          longitude: defaultCoordinates.lon
        },
        options: { dragable: false }
      };

      //GET request to database using the routeparam id
    	Home.getById({id:$routeParams.id}, function(data){

        //set the coordinates to the correspoding object from database
        coordinates = data.coordinates[0];

        //when the map api is ready, set the map and marker to the ones loaded from database
        uiGmapGoogleMapApi.then(function(maps) {
          $scope.map = {
            center:{
              latitude: coordinates.latitude, 
              longitude: coordinates.longitude
            }, 
            zoom: 18
          };

          //as above
          $scope.marker = {
            id: 0,
            coords: {
              latitude: coordinates.latitude,
              longitude: coordinates.longitude
            },
            //user should not be able to drag the marker around the map
            options: { dragable: false }
          };
        });
      });
    }]
  };
}]);
app.directive('myMap',  [function () {

  return {
    templateUrl: '/directives/detailedObject/myMap.html',
    controller: ['$scope', function($scope) {

    	//array of possible coordinates that our map will show
    	var coordinates = [
    		{
    			lat: 55.5899,
    			lon: 12.9212
    		},
    		{
    			lat: 55.6109,
    			lon: 12.9946
    		},
    		{
    			lat: 55.6048,
    			lon: 12.9874
    		},
    		{
    			lat: 59.3473,
    			lon: 18.0238
    		},
    		{
    			lat: 58.0367,
    			lon: 14.3127
    		}
    	];

    	//function that returns a random item from an array
    	function getRandomItem(arr){
    		//the array length is used to determine the maxvalue to random
        return arr[Math.floor(Math.random()*arr.length)];
    	}

    	//since the coordinates will be used in two different objects (marker and map),
    	//and we want them to be equal to eachoter we set a myCords var to one random item
    	//from our coordinates array
    	var myCords = getRandomItem(coordinates);

      //we want the map to be centered on the marker, we do this by
      //centering the map on the same coordinates as the marker
      $scope.map = {
        center:{
          latitude: 55.5899, 
          longitude: 12.9212
        }, 
        zoom: 18
      };
      
      //this timeout fixes a bug that causes the map to turn grey 
  		//if thesetTimeout whole page isnt reloaded
  	 	setTimeout(function(){
  	 		window.dispatchEvent(new Event('resize'));
  	 	},0);
	      
	  }]

	};
}]);